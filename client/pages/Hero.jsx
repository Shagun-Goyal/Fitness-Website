import { useEffect, useState } from "react";
import axios from 'axios';

function Hero() {
  const [data, setData] = useState("Loading...");
  const [data1, setData1] = useState("Loading...");

  useEffect(() => {
    fetchMsg();
  }, []);

  const i = 0;
  const fetchMsg = async () => {
      try {
        const base = "http://localhost:5100";
        const res = await axios.get(base + "/api/message");
        console.log(i);
        setData(res.data.images[i].imageUrl);
        setData1(res.data.images[i+1].imageUrl);
      } catch (err) {
          console.error("Fetch error:", err);
          setData("Failed to load message: " + err.message);
      }
    };

  return (
    <>
    <div className = "w-auto h- auto flex snap-x overflow-x-scroll scrollbar-hide bg-amber-950">
        <img src = {data} alt = "FTINESS IMAGES" className = "h-150 snap-center ml-75 mt-5 rounded-3xl"/>
        <img src = {data1} alt = "FTINESS IMAGES" className = "h-150 snap-center ml-10 mt-5 rounded-3xl"/>
        <img src = {data} alt = "FTINESS IMAGES" className = "h-150 snap-center ml-10 mt-5 mr-60 rounded-3xl"/>
    </div>
    </>
  );
}

export default Hero;
