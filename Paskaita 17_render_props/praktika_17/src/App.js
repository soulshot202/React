import "./App.css";
import Fetcher from "./components/Fetcher/Fetcher";
import DataList from "./components/DataList/DataList";
import Table from "./components/Table/Table";
import Card from "./components/Card/Card";

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
