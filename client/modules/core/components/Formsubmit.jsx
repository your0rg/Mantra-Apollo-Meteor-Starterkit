import React from 'react';

export default class Formsubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const content = this.state.value;
    const { createPost } = this.props;
    createPost({content});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Posts:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
