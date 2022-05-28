import { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "157656274269-1euoa0kt4nql92egjs87slfpcvtsjoru.apps.googleusercontent.com",
          scope: "email",
          plugin_name: "streamIt",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.OnAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.OnAuthChange);
        });
    });
  }

  OnAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    // console.log(this.props);
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <div>
          <button
            onClick={this.onSignOutClick}
            className="ui red google button"
          >
            <i className="google icon" />
            Sign Out
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.onSignInClick} className="ui red google button">
            <i className="google icon" />
            Sign In with Google
          </button>
        </div>
      );
    }
  }

  render() {
    // console.log(this.props);
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
