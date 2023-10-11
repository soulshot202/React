import "./App.css";
import pp from "./images/pp.jpg";
import { useState } from "react";
import Button from "./components/Button/Button";
import State from "./components/Text/Text";
import Image from "./components/Image/Image";

function App() {
  const [Nuotaika, setNuotaika] = useState(
    "https://i.pinimg.com/originals/de/c8/47/dec847a39acc97528afaba50e586b824.jpg"
  );
  const [Text, setText] = useState("Kokia tavo nuotaika?");
  return (
    <div className="App">
      <State text={Text} />
      <Image url={Nuotaika} />
      <br />
      <div>
        <Button
          text="Laimingas"
          bckColor={"green"}
          onClick={() => {
            setText("Laimingas");
            setNuotaika(
              "https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Smiling_large.png?v=1571606089"
            );
          }}
        />
        <Button
          text="Liūdnas"
          bckColor={"red"}
          onClick={() => {
            setText("Liūdnas");
            setNuotaika(
              "https://previews.123rf.com/images/yayayoy/yayayoy2006/yayayoy200600001/149517044-gloomy-sad-emoji-emoticon-looking-down.jpg"
            );
          }}
        />
        <Button
          text="Piktas"
          bckColor={"black"}
          onClick={() => {
            setText("Piktas");
            setNuotaika(
              "https://content.presentermedia.com/files/clipart/00028000/28697/angry_emoji_face_800_wht.jpg"
            );
          }}
        />
        <Button
          text="Sisimąstęs"
          bckColor={"grey"}
          onClick={() => {
            setText("Susimąstęs");
            setNuotaika(
              "https://graphicriver.img.customer.envatousercontent.com/files/273178983/wonder%20female%20emoticon%20preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=a73eeb6b65bf76475905802bda431d21"
            );
          }}
        />
        <Button
          text="Įsimylėjęs"
          bckColor={"#EA7FD9"}
          onClick={() => {
            setText("Įsimylėjęs");
            setNuotaika(
              "https://play-lh.googleusercontent.com/NbaFhQAnCToDQpAoMn2LIh-uwZzNiF8kMQzvW2TaPLxVxmq_nL56LBT_Bqr9juE9Qg"
            );
          }}
        />
      </div>
      <Button
        text="Po paskaitų"
        bckColor={"blue"}
        onClick={() => {
          setText("Po FrontEnd'o paskaitų");
          setNuotaika(pp);
        }}
      />
    </div>
  );
}

export default App;
