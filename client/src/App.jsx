import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("Default");

  useEffect(() => {
    const fetchMsg = async () => {
      try {
        const base = "http://localhost:5100";
        const res = await fetch(base + "/api/message");
        const json = await res.json();
        setData(json.message);
      } catch (err) {
        console.error("Fetch error:", err);
        setData("Failed to load message: " + err.message);
      }
    };
    fetchMsg();
  }), [];

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React + Express App</h1>
      <h2 style ={{color : "black"}}>{data}</h2>
    </div>
  );
}

export default App;