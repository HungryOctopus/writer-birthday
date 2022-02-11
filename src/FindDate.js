import React, { Component } from 'react';
import Select from 'react-select';
import data from './writers-birthday-array.json';

const months = [
  { label: 'January', value: '01' },
  { label: 'February', value: '02' },
  { label: 'March', value: '03' },
  { label: 'April', value: '04' },
  { label: 'Mai', value: '05' },
  { label: 'June', value: '06' },
  { label: 'July', value: '07' },
  { label: 'August', value: '08' },
  { label: 'September', value: '09' },
  { label: 'October', value: '10' },
  { label: 'November', value: '11' },
  { label: 'December', value: '12' }
];

let days = [];
for (let i = 1; i <= 31; i++) {
  days.push({ label: i, value: i });
  console.log(days);
}

const people = data;

class FindDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: '',
      month: '',
      isVisible: false
    };

    // Add conditional rendering.
    // FindDate is set to false, when pressing on the button the field appears

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
  }

  render() {
    if (this.state.isVisible) {
      return (
        <section className="container">
          <h3>Choose a date</h3>
          <div>
            <Select options={days} />
            <Select options={months} />
          </div>
          <button onClick={() => this.setState({ day: days, month: months })}>
            {/* To correct: Here it should only be the selected day in the state  */}
            View writer's birthdays
          </button>
        </section>
      );
    } else {
      return <></>;
    }
  }
}

export default FindDate;
