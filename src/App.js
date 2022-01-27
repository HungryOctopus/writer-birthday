import React, { useState } from 'react';
import data from './writers-array.json';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);
  let day = new Date().getDate();
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
  console.log(month);
  console.log(new Date());

  return (
    <main>
      <section className="container">
        <h3>
          Those {people.length} writers were born on the {day}/{months[month]}
        </h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
