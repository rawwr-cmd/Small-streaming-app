import { Component } from "react";
import { Field, reduxForm } from "redux-form";
class StreamCreator extends Component {
  renderList(formProps) {
    // console.log(formProps);
    return (
      <input
        onChange={formProps.input.onChange}
        value={formProps.input.value}
      />
    );
  }

  render() {
    return (
      <form>
        <Field name="title" component={this.renderList} />
        <Field name="description" component={this.renderList} />
      </form>
    );
  }
}

export default reduxForm({ form: "streamCreate" })(StreamCreator);
