// import React from "react";
// import ReactDOM from "react-dom/client";

import React from "./handwrite/react";
import ReactDOM from "./handwrite/react-dom/client";

// const element = React.createElement(
//   "div",
//   {
//     style: { color: "red" },
//   },
//   "Hello, React!"
// );
const elementJsx = <div style={{ color: "red" }}>"Hello, React!"</div>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(elementJsx);
