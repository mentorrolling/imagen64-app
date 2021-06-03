import React, { useState } from "react";

import FormBase64 from "./components/FormBase64";

function App() {
  const [state, setstate] = useState(""); //Estado donde guardaré la imagen

  return (
    <div className="container mt-5">
      <FormBase64 setstate={setstate} />
    </div>
  );
}

export default App;
