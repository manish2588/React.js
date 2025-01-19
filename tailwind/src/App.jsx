import "./App.css";
import image from "../src/assets/A.png";

import { AnotherButton, Button } from "./styled_component/Button";
import { Input } from "./styled_component/Input";

import Typo from "./mui_component/Typography";
import SelectPractice from "./component/SelectPractice";
import Form2 from "./component/Form2";
import RenderingList from "./component/RenderingList";

function App() {
  return (
    <>
      <section>
        <div className="flex flex-col lg:flex-row space-y-6 space-x-0 lg:space-x-2 lg:space-y-0">
          <div className="bg-slate-400 p-4 box-border lg:basis-1/2 px-auto flex justify-center">
            <img
              src={image}
              className="shadow-xl shadow-blue-400 rounded-md lg:w-[60%] h-auto"
            />
          </div>

          <div className="bg-blue-400 lg:basis-1/2 lg:flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-center">Image 1</h1>
            <p className="px-4 text-justify font-medium tracking-tighter">
              This is an image of something I want to learn about. This is an
              image of the camera used for Middleways Films. This is an image of
              something I want to learn about. This is an image of the camera
              used for Middleways Films.
            </p>
          </div>
        </div>
      </section>
      <div>
        <h1>Button from Styled Component</h1>
        <Button primary={true}> Button</Button>
        <AnotherButton primary> Another</AnotherButton>
      </div>
      <Input type="text" placeholder="Styled Component" color="Green" />
     <RenderingList/>
    </>
  );
}

export default App;
