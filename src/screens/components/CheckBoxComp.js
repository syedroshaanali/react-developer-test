import React, { Component } from 'react';

class CheckBoxComp extends Component {
    
  state = {
    isChecked: false,
  }
  
  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));

    handleCheckboxChange(label);
    console.log('check box state',this.state.isChecked)
  };
  
  render() {
      {console.log('checkbox comp =======',this.props)}
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="checkbox">
        {console.log(isChecked)}
        <label className="mt-1">
          <input
            type="checkbox"
            value={label}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
            className="mr-1"
          />

          {label}
        </label>
      </div>
    );
  }
}

// CheckBoxComp.propTypes = {
//   label: PropTypes.string.isRequired,
//   handleCheckboxChange: PropTypes.func.isRequired,
// };

export default CheckBoxComp;