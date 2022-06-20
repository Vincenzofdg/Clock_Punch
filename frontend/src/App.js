import apiMethod from "./services/api";

function App() {

  const test = apiMethod('GET', '/')
  console.log(test)

  return (
    <>
      <h1>FRONTEND</h1>
    </>
  );
}

export default App;