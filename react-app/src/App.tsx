import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}> Hello <span>World</span> </Alert>}
      <Button onClick={() => setAlertVisibility(true)}>Something to click</Button>
    </div>
  );
}

export default App;
