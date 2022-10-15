import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import data from './writers-birthday-array.json';
import List from './List';

function PickDate() {
  //selected: the value given by DayPicker when a date is selected
  const [selected, setSelected] = useState();
  const [matchDate, setMatchDate] = useState(data);
  const [listWriter, setListWriter] = useState();

  if (selected) {
    let formattedDate =
      ('0' + selected.getDate()).slice(-2) + `/` + (selected.getMonth() + 1);

    setListWriter(
      matchDate.filter((writer) => writer.birthday === formattedDate)
    );

    //setSelected('');

   // console.log(matchDate);
    console.log(formattedDate);
    console.log(listWriter);
  }

  return (
    <main>
      <section className="container">
        <div>
          <h3>Pick a date</h3>
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            //footer={footer}
          />
        </div>
        {/* {selected ? <p>Date is selected</p> : <div></div>} */}
        {/* {selected ? <List people={listWriter} /> : <div></div>} */}

        {selected ? <div> {listWriter} </div> : <div></div>}
      </section>
    </main>
  );
}

export default PickDate;
