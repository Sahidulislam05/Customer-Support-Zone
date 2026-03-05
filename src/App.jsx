import { Suspense, useState } from "react";
import "./App.css";
import BannerCard from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Tickets from "./Components/Tickets/Tickets";

const fetchData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const fetchPromise = fetchData();
function App() {
  const [count, setCount] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const [resolved, setResolve] = useState([]);
  const [ticket, setTicket] = useState([]);

  return (
    <>
      <Navbar></Navbar>
      <BannerCard count={count} resolvedCount={resolved.length}></BannerCard>
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <Tickets
          count={count}
          setCount={setCount}
          selectedCards={selectedCards}
          setSelectedCards={setSelectedCards}
          fetchPromise={fetchPromise}
          resolved={resolved}
          setResolve={setResolve}
          ticket={ticket}
          setTicket={setTicket}
        ></Tickets>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
