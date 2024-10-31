import { useEffect } from "react";
import "./App.css";

import "//unpkg.com/mathlive";

function App() {
  useEffect(() => {
    const mf = document.querySelector("math-field");
    mf.setOptions({
      fractionNavigationOrder: "denominator-numerator",
    });

    mf.value = "{1}\\frac{1}{2}";
  }, []);

  return (
    <div className="App">
      <math-field style={{ width: "100px" }}></math-field>
    </div>
  );
}

export default App;
