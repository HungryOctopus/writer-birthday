import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import data from './writers-birthday-array.json';
import List from './List';

function PickDate() {
  const [selected, setSelected] = useState();
  const [matchingBDay, setMatchingBDay] = useState(data);
  let footer = <p>When is your birthday ?</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }

  let Match = matchingBDay.filter((writer) => writer.birthday === `$selected`);
  console.log(Match);
  console.log(selected);
  return (
    <main>
      <section className="container">
        <div>
          <h3>Pick a date</h3>
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            footer={footer}
          />
        </div>
        {selected ? <List matchingBDay={Match} /> : <div></div>}
      </section>
    </main>
  );
}

export default PickDate;
