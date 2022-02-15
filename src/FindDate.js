import React, { useState } from 'react';
import Select from 'react-select';
//import DisplayTodaysWriter from './DisplayTodaysWriter';
import data from './writers-birthday-array.json';
import List from './List';
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
  const [selectedDay, setSelectedDay] = useState();
  const [selectedMonth, setSelectedMonth] = useState();
  // Better with useEffect?

  let handleChangeM = (selectedOptionM) => {
    setSelectedMonth({ selectedOptionM });
    console.log(selectedMonth);
  };

  let handleChangeD = (selectedOptionD) => {
    setSelectedDay({ selectedOptionD });
    console.log(selectedDay);
  };

  const [people, setPeople] = useState(data);
  
  let writersBirthday = async () =>
    await (handleChangeD && handleChangeM).then(
      people.filter(
        (writer) =>
          writer.birthday === `${selectedDay.value}/${selectedMonth.value}`
      )
    );

  return (
    <section>
      <form>
        <Select options={days} value={selectedDay} onChange={handleChangeD} />

        <Select
          options={months}
          value={selectedMonth}
          onChange={handleChangeM}
        />
      </form>
      {/* 
      <List people={writersBirthday} /> */}
      {console.log(writersBirthday)}
    </section>
  );
}

export default FindDate;
