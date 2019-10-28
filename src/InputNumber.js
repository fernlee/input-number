import React from 'react';


class InputNumber extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  componentDidMount() {
    if (!this.props.defaultValue && this.props.value) {
      this.setCurrentValue();
    }
  }

  setCurrentValue() {
    this.input.current.value = this.props.value;
  }

  render() {
    if (this.props.value && this.input.current) {
      this.setCurrentValue();
    }
    return (
      <input defaultValue={this.props.defaultValue} ref={this.input} onChange={(e) => this.props.onChange(e)} />
    );
  }


}

export default InputNumber;
