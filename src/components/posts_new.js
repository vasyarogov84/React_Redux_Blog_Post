import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }
  onSubmit(values) {
    console.log(values);
  }

  render() {
    console.log('props', this.props);
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="title"
          component={this.renderField}
          label="Title"
        />
        <Field
          name="categories"
          component={this.renderField}
          label="Categories"
        />
        <Field
          name="content"
          component={this.renderField}
          label="Post Content"
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="submit" className="btn btn-primary">Cancel</button>
      </form>
    )
  }
}

function validate(values) {
  // console.log(values)  -> {title: '',categories: '',content: '' }
  const errors = {};
  let { title, categories, content } = values;
  // Validate the inputs from 'values'
  if (!title) {
    errors.title = 'Enter Title';
  }
  if (!categories) {
    errors.categories = 'Enter Category';
  }
  if (!content) {
    errors.content = 'Enter Content Please';
  }

  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'PostNewForm'
})(PostsNew);
