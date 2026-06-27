const fs = require("fs");
const content = [
  'import { createBrowserRouter, Navigate } from "react-router-dom";',
  'import Login from "./features/auth/pages/Login";',
  'import Register from "./features/auth/pages/Register";',
  '// import Protected from "./features/auth/components/Protected";',
  '// // import Home from "./features/interview/pages/Home";',
  '// // import Interview from "./features/interview/pages/Interview";',
  "",
  "",
  "export const router = createBrowserRouter([",
  "    {",
  '        path: "/",',
  '        element: <Navigate to="/login" replace />',
  "    },",
  "    {",
  '        path: "/login",',
  "        element: <Login />",
  "    },",
  "    {",
  '        path: "/register",',
  "        element: <Register />",
  "    },",
  "    // {",
  "    //     path: \"/\",",
  "    //     element: <Protected><Home /></Protected>",
  "    // },",
  "    // {",
  "    //     path:\"/interview/:interviewId\",",
  "    //     element: <Protected><Interview /></Protected>",
  "    // }",
  "])",
  ""
].join("\n");

const path = "c:\\SNEHAL PAWAR\\PROJECTS\\Interview AI\\Frontend\\src\\app.routes.jsx";
fs.writeFileSync(path, content, "utf8");
console.log("File written successfully to: " + path);
