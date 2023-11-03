import "./App.css";
import DataFetcher from "./components/DataFetcher/DataFetcher";
import PostVer1 from "./components/PostVer1/PostVer1";

function App() {
  return (
    <div>
      <DataFetcher
        render={(data) => {
          return <h1>{data.title}</h1>;
        }}
      />
      <DataFetcher
        render={(data) => {
          return <p>{data.body}</p>;
        }}
      />
      <DataFetcher render={(data) => <PostVer1 data={data} />} />
    </div>
  );
}

export default App;
