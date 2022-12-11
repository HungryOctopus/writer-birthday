import React, { useState } from 'react';
import data from './writers-birthday-array.json';
import List from './List';
import PickDate from './PickDate';

function TodaysWriter() {
  const [people] = useState(data);
  const [showPickDate, setShowPickDate] = useState(false);
  //const [button, showButton] = useState(true);
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
    <>
      {showPickDate ? (
        <PickDate />
      ) : (
        <>
          <section className="container">
            <h3>
              Those {writersBirthday.length} writers were born today, the {day}/
              {months[month]}
            </h3>
            <List people={writersBirthday} />
            <button onClick={() => setShowPickDate(!showPickDate)}>
              Choose another date
            </button>
          </section>
        </>
      )}
    </>
  );
}

export default TodaysWriter;
