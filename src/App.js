import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  const gifts = [
    {
      date: "1 June, 2024",
      image: "https://github.com/p-reetu/Gift-Hub/blob/master/src/assets/bracelet.jpg?raw=true",
      name: "Bracelet",
      description:
        "Received this special gift from my best friend on my birthday. I loved it a lot. One of the most beautiful gifts.",
    },
    {
      date: "1 June, 2024",
      image: "https://github.com/p-reetu/Gift-Hub/blob/master/src/assets/bracelet.jpg?raw=true",
      name: "Bracelet",
      description:
        "Received this special gift from my best friend on my birthday. I loved it a lot. One of the most beautiful gifts.",
    },
    {
      date: "1 June, 2024",
      image: "https://github.com/p-reetu/Gift-Hub/blob/master/src/assets/bracelet.jpg?raw=true",
      name: "Bracelet",
      description: "Received this special gift from my best friend on my birthday. I loved it a lot. One of the most beautiful gifts."
    },
    {
      date: "1 June, 2024",
      image: "https://github.com/p-reetu/Gift-Hub/blob/master/src/assets/bracelet.jpg?raw=true",
      name: "Bracelet",
      description: "Received this special gift from my best friend on my birthday. I loved it a lot. One of the most beautiful gifts."
    },
    {
      date: "1 June, 2024",
      image: "https://github.com/p-reetu/Gift-Hub/blob/master/src/assets/bracelet.jpg?raw=true",
      name: "Bracelet",
      description: "Received this special gift from my best friend on my birthday. I loved it a lot. One of the most beautiful gifts."
    }
  ];
  return (
    <div className="App">
      <Nav />
      <Main gifts={gifts} />
    </div>
  );
}

export default App;
