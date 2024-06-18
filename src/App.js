import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const gifts = [
    {
      date: "1 June, 2024",
      image:
        "https://github.com/p-reetu/Gift-Hub/blob/master/src/assets/bracelet.jpg?raw=true",
      name: "Bracelet",
      description:
        "Received this special gift from my best friend on my birthday. I loved it a lot. One of the most beautiful gifts.",
    },
    {
      date: "1 June, 2024",
      image:
        "https://github.com/p-reetu/Gift-Hub/blob/master/src/assets/bracelet.jpg?raw=true",
      name: "Bracelet",
      description:
        "Received this special gift from my best friend on my birthday. I loved it a lot. One of the most beautiful gifts.",
    },
    {
      date: "1 June, 2024",
      image:
        "https://github.com/p-reetu/Gift-Hub/blob/master/src/assets/bracelet.jpg?raw=true",
      name: "Bracelet",
      description:
        "Received this special gift from my best friend on my birthday. I loved it a lot. One of the most beautiful gifts.",
    },
    {
      date: "1 June, 2024",
      image:
        "https://github.com/p-reetu/Gift-Hub/blob/master/src/assets/bracelet.jpg?raw=true",
      name: "Bracelet",
      description:
        "Received this special gift from my best friend on my birthday. I loved it a lot. One of the most beautiful gifts.",
    },
    {
      date: "1 June, 2024",
      image:
        "https://github.com/p-reetu/Gift-Hub/blob/master/src/assets/bracelet.jpg?raw=true",
      name: "Bracelet",
      description:
        "Received this special gift from my best friend on my birthday. I loved it a lot. One of the most beautiful gifts.",
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage gifts={gifts} />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
