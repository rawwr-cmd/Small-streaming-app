import { Component } from "react";

class GoogleAuth extends Component {
  state = { isSignedIn: null };
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
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I don't know if user is signed in</div>;
    } else if (this.state.isSignedIn) {
      return <div>Hi there, user is signed in</div>;
    } else {
      return <div>User is logged out</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
