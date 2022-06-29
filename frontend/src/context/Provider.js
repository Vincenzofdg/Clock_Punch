import React, { useState } from 'react';
import AppContext from './Context';

import { getAll } from '../services/peopleAPI';

function AppProvider({ children }) {
  const [people, setPeople] = useState([]);

  const getPeople = async () => getAll().then( i => setPeople(i));

  const objValue = {
    people,
    getPeople,
  }

  return (
    <AppContext.Provider value={ objValue }>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;