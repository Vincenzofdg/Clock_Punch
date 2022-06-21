import apiMethod from "./services/api";

function App() {
	const api = apiMethod('GET', '/people').then(i => console.log(i.data))
	console.log(api);

  // axios.get('http://localhost:3001/').then(i => console.log(i.data));

  return (
    <>
      <h1>FRONTEND</h1>
    </>
  );
}

export default App;
