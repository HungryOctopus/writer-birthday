import React, { useState } from 'react';
import data from './writers-birthday-array.json';
import List from './List';
import FindDate from './FindDate';

function TodaysWriter() {
  const [people, setPeople] = useState(data);
  const [showDate, setShowDate] = useState(false);
  let day = ('0' + new Date().getDate()).slice(-2); // to ensure there is a 0 before the 1 to 9 dates.
  let month = new Date().getMonth();
  const months = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12'
  ];

  let writersBirthday = people.filter(
    (writer) => writer.birthday === `${day}/${months[month]}`
  );

  return (
    <main>
      <section className="container">
        <h3>
          Those {writersBirthday.length} writers were born today, the {day}/
          {months[month]}
        </h3>
        <List people={writersBirthday} />
        {/* <button onClick={() => setShowDate(!showDate)}>Choose another date</button>

        {showDate ? <FindDate /> : <></>} */}
      </section>
    </main>
  );
}

export default TodaysWriter;
