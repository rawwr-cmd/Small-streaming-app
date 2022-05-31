import { Component } from "react";
import { Field, reduxForm } from "redux-form";
class StreamCreator extends Component {
  renderList({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  render() {
    return (
      <form className="ui form">
        <Field name="title" component={this.renderList} label="Enter Title" />
        <Field
          name="description"
          component={this.renderList}
          label="Enter Description"
        />
      </form>
    );
  }
}

export default reduxForm({ form: "streamCreate" })(StreamCreator);
