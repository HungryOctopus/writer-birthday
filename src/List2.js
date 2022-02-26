import React from 'react';
import FindDate from './FindDate';

const List2 = ({writers}) => {
  return (
    <>
      {writers.map((person) => {
        const { name } = person;
        return (
          <article key={name} className="person">
            {/* <img src={image} alt={name} /> */}
            <div>
              <h4>{name}</h4>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List2;
