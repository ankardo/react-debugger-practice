import React from 'react';

function BuggyComponent() {
  const obj = undefined;
  return (
    <div>
      <h2>This should break</h2>
      <p>{obj.foo}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Debugger Practice!</h1>
      <BuggyComponent />
    </div>
  );
}

export default App;