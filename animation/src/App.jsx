
import FormValidation from "./component/FormValidation";
import ProgressBar from "./component/ProgressBar";
import ReplacingDiv from "./component/ReplacingDiv";
import SelectAll from "./component/SelectAll";
import Form from "./component/UseFormHook";
import BasicAnimation from "./framerMotion/BasicAnimation";


function App() {
  return (
    <div>
      <ReplacingDiv/>
      <ProgressBar percentage={20}/>
      <SelectAll/>
      <FormValidation/>
      <Form/>
    </div>
  )
}

export default App;