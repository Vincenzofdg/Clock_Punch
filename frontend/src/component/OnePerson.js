import React from 'react';

function OnePerson ({ person: { name, age } }) {
  return (
    <div>
      <h1>UMA PESSOA</h1>
      <p>{ name }</p>
      <p>{ age }</p>
    </div>
  );
}

export default OnePerson;