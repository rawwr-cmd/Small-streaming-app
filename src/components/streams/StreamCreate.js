import { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import { withRouter } from "../../withRouter";
class StreamCreator extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderList = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = async (formValues) => {
    // console.log(this.props);
    await this.props.createStream(formValues);
  };

  onNavigate = async () => {
    await this.props.navigate("/");
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderList} label="Enter Title" />
        <Field
          name="description"
          component={this.renderList}
          label="Enter Description"
        />
        <button className="ui button primary" onClick={this.onNavigate}>
          Submit
        </button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

const wrapper = withRouter(StreamCreator);
const formWrapped = reduxForm({ form: "streamCreate", validate })(wrapper);

export default connect(null, { createStream })(formWrapped);
