import { Component } from "react";
import { Field, reduxForm } from "redux-form";
class StreamCreator extends Component {
  render() {
    return (
      <form>
        <Field name="title" />
        <Field name="description" />
      </form>
    );
  }
}

export default reduxForm({ form: "streamCreate" })(StreamCreator);
