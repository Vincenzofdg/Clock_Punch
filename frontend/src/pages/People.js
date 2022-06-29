import React, { useContext, useEffect } from 'react';
import AppContext from '../context/Context'

import OnePerson from '../component/OnePerson';

function App() {
  const { people, getPeople } = useContext(AppContext);

  useEffect(() => { getPeople() }, []);

  return (
    <div>
      { people.map((obj) => <OnePerson key={ obj.id } person={ obj } />) }
    </div>
  );
}

export default App;