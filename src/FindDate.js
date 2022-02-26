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
  const [selectedDay, setSelectedDay] = useState(days);
  const [selectedMonth, setSelectedMonth] = useState(months);
  const [writers, setWriters] = useState(data);
  const [showResult, setShowResult] = useState(false);

  let handleChangeM = (selectedMonth) => {
    setSelectedMonth(selectedMonth.value);
    console.log(selectedMonth.value);
  };

  let handleChangeD = (selectedDay) => {
    setSelectedDay(selectedDay.value);
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

  return (
    <section>
      <form>
        <Select
          options={days}
          //value={selectedDay}
          onChange={handleChangeD}
        />

        <Select
          options={months}
          //value={selectedMonth}
          onChange={handleChangeM}
        />
      </form>
      <button onClick={() => setShowResult(true)}>Show result</button>
      {/* {showResult ? <List2 writers={newWritersBirthday} /> : <></>} */}
    </section>
  );
}

export default FindDate;
