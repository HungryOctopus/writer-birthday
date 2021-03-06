import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
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

export default List;
