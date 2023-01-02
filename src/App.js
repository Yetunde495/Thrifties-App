/** @format */

import React, { useState, useEffect, Suspense } from "react";
import Navbars from "./Pages/Landing/Components/Navbar/Navbar";
import About from "./Pages/About/About";
import Test from "./Pages/Test/test";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Pages/Landing/Components/Signup/Signup";

const loadApp = async () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        state: "done",
      });
    }, 2000);
  });

  await promise;
};

function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}

const suspenderCheck = wrapPromise(loadApp());

const ChildComponent = () => {
  const data = suspenderCheck.read();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Test />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </Router>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<p>Loading...</p>}>
        <ChildComponent />
      </Suspense>
    </div>
  );
}

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("/api")
//       .then((res) => res.json())
//       .then((data) => setData(data.message));
//   }, []);

//   {
//     /*<p>{!data ? "Loading..." : data}</p> */
//   }

//   return (
//     <div className="App">
//       <h1>This is a test page</h1>
//     </div>
//   );
// }

export default App;
