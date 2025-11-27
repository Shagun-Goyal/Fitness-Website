import { useEffect, useState } from "react";

function Hero() {
  const [data, setData] = useState("Loading...");

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
  }, []);

  const images = {};
   
  return (
    <>
    <div>
        <img src = "" alt = "FTINESS IMAGES" ClassName = "h-{50%} w-screen "/>
    </div>
    </>
  );
}

export default Hero;
