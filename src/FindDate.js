import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import DisplayTodaysWriter from './DisplayTodaysWriter';
import data from './writers-birthday-array.json';
import List from './List';
import List2 from './List2';
//import { options } from 'request';

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
  days.push({ label: ('0' + i).slice(-2), value: ('0' + i).slice(-2) });
}

function FindDate() {
  const [day, setDay] = useState([]);
  const [month, setMonth] = useState('');
  const [writers, setWriters] = useState(data);
  const [showResult, setShowResult] = useState(false);

  let handleChangeM = (selectedMonth) => {
    setMonth(selectedMonth.value);
    console.log(selectedMonth.value);
  };

  const handleChangeD = (selectedDay) => {
    setDay(selectedDay.value);
    console.log(selectedDay.value);
  };

  // useEffect(() => {
  //   if (handleChangeD && handleChangeM) {
  //     let selectedDate = `${setSelectedDay}/${setSelectedMonth}`;
  //     let newWritersBirthday = writers.filter(
  //       (writer) => writer.birthday === selectedDate
  //     );
  //     console.log(selectedDate);
  //   }
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(setDay + ' / ' + setMonth);
    setShowResult(true);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>
          <Select
            placeholder="Select a day"
            options={days}
            value={day}
            onChange={handleChangeD}
          />
        </label>

        <Select
          placeholder="Select a month"
          options={months}
          value={month}
          onChange={handleChangeM}
        />
      </form>
      <button type="submit" onClick={handleSubmit}>
        Show result
      </button>
      {/* {showResult ? <List2 writers={newWritersBirthday} /> : <></>} */}
    </section>
  );
}

export default FindDate;
