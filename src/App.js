import React, { useState } from 'react';
import DisplayTodaysWriter from './DisplayTodaysWriter';
import FindDate from './FindDate';

function App() {

  return (
    <div>
      <DisplayTodaysWriter />;
      <FindDate />
      {/* <WritersApi /> */}
    </div>
  );
}
export default App;
