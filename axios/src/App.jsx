import "./App.css";
import UseContextAPI from "./component/UseContextAPI";
import { DataProvider } from "./context/UserContext";
import Data from "./component/Data";
import UseRef from "./component/UseRef";
import ToDO from "./component/ToDO";
import { PracProvider } from "./context/Context_Two";
import PracApi from "./component/PracApi";
import CountDownTimer from "./component/CountDownTimer";
function App() {
  return (
    <PracProvider>
      <ToDO />
      <PracApi/>
      <CountDownTimer/>
    </PracProvider>
  );
}

export default App;
