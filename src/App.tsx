import { useState, type ReactElement } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Astroturf from "./components/Astroturf";
import Title from "./components/Title";
import Window from "./components/ui/Window";
import Mainstage from "./components/Mainstage";
import Body from "./components/Body";
import Credits from "./components/Credits";
import Windowless from "./components/ui/Windowless";
import Tracklist from "./components/Tracklist";
import InfoBox from "./components/InfoBox";

function App() {
  const [infoContent, setInfoContent] = useState(
    <div>Simply Thandi, Hello World</div>,
  );

  const astroturf = <Astroturf setInfoState={setInfoContent}></Astroturf>;

  return (
    <>
      <InfoBox>{infoContent}</InfoBox>
      <Body setInfoState={setInfoContent}></Body>
      <Mainstage>{astroturf}</Mainstage>
      <Window title="Astroturf Lawn" position={[30, 60]}>
        <></>
      </Window>
      <Window title="ep.title" position={[200, 200]} width="300px">
        <Title></Title>
      </Window>
      <Window title="Digital" position={[170, 730]} width="200px">
        <img src="face1.jpg" className="photocopy" width="100%" />
        <p text-align="right">
          There I am
          <br />
          Imagined in the green field
          <br />
          that goes on forever
        </p>
      </Window>
      <Window title="cover" position={[70, 530]} width="100px" toolbar={false}>
        <img src="cover.png" className="photocopy" width="100%" />
      </Window>
      <Window title="Digital" position={[270, 1130]} width="300px">
        Position
      </Window>
      <Windowless position={[70, 1130]} width="200px">
        I have a body. You have a body. Then the world instantaneously and
        without becomes too massive to compute. We had enough light to build
        anything, so we built ourselves. Digital doppelgangers are walking
        around in the great big green field. We’ve poured so much into them. In
        some ways we had to. Now, I’m weaker and you’re sadder now. What have we
        become, my dear?
      </Windowless>
      <Windowless position={[730, 1130]} width="300px">
        <Tracklist></Tracklist>
      </Windowless>
      <Windowless position={[430, 1330]} width="50px">
        <img src="face3.jpg" className="photocopy" width="100%" />
      </Windowless>
      <Credits></Credits>
    </>
  );
}

export default App;
