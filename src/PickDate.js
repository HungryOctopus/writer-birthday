import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import data from './writers-birthday-array.json';
import List from './List';

function PickDate() {
  //selected: the value given by DayPicker when a date is selected
  const [selected, setSelected] = useState();
  const [matchDate] = useState(data);
  let formattedDate = 0;
  let listedWriter = '';

  if (selected) {
    formattedDate =
      ('0' + selected.getDate()).slice(-2) +
      `/` +
      ('0' + (selected.getMonth() + 1)).slice(-2);
  }

  if (formattedDate !== 0) {
    listedWriter = matchDate.filter(
      (writer) => writer.birthday === formattedDate
    );
  }
  /*   console.log(selected);
  console.log(formattedDate);
  console.log(listedWriter); */

  return (
    <section className="containerpd">
      <div>
        <h3>Pick a date</h3>
        <DayPicker
          mode="single"
          selected={selected}
          // onChange={(date) => setSelected(date)}
          onSelect={setSelected}
          //footer={footer}
        />
      </div>
      <div>
        {selected ? (
          <>
            <h3>
              Those {listedWriter.length} writers were born the {formattedDate}
            </h3>
            <List people={listedWriter} />
          </>
        ) : (
          <div>Please pick a date</div>
        )}
      </div>
    </section>
  );
}

export default PickDate;
