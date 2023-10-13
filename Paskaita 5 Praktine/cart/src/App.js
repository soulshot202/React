import "./App.css";
import Product from "./components/Product/Product";

function App() {
  return (
    <div>
      <Product
        image={
          "https://i.etsystatic.com/31528178/r/il/5ec378/4395044410/il_570xN.4395044410_toh1.jpg"
        }
        title={"Best beatifull autumn calendar"}
        price={19.99}
        description={
          <div>
            <p>12 unique designs</p>
            <p>All pieces are printed on heavywheigt 200gsm art paper.</p>
            <p>Limited to 99 pieces</p>
            <div className="oneSize">
              <p>One size:</p>
              <p>11.7x16.5 inch / (297x420mm)</p>
            </div>
          </div>
        }
        availability={"10 In stock"}
        category={"Calendar"}
      />
    </div>
  );
}

export default App;
