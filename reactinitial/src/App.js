import React, { useState } from "react";
import Clients from "./components/Clients";

const App = () => {
  const [bevitel, setBevitel] = useState("");
  const [ugyfelek, setUgyfelek] = useState([]);

  const changeBeviteliMezo = (event) => {
    setBevitel(event.target.value);
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(
        "https://demoapi.com/api/vet/clients?search=" + bevitel,
        {
          method: "GET",
        }
      );
      let resJson = await res.json();
      if (res.status === 200) {
        console.log(resJson);
        setUgyfelek(resJson);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <header>Veterinarian admin clients</header>
      <form onSubmit={handleSubmit}>
        <input
          name="bevitel"
          value={bevitel}
          onChange={changeBeviteliMezo}
          type="text"
          placeholder="Enter name"
        />
        <input disabled={!(bevitel.length > 3)} value="Search" type="submit" />
        <div>
          {ugyfelek.map((u, index) => (
            <Clients key={index} clientParam={u} />
          ))}
        </div>
      </form>
    </div>
  );
};

export default App;
