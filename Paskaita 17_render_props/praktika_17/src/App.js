import "./App.css";
import Fetcher from "./components/Fetcher/Fetcher";
import DataList from "./components/DataList/DataList";

function App() {
  return (
    <div className="App">
      <Fetcher render={(duomenys) => <DataList data={duomenys} />} />
      {/* <Fetcher render={(data) => <Table data={data} />} /> */}

      {/* <Fetcher render={(data) => <Card data={data} />} /> */}
    </div>
  );
}

export default App;
