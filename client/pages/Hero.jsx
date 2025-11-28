import { useEffect, useState } from "react";
import axios from 'axios';

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

    const abc = async () => {
    try {
    const response = await fetch("http://localhost:5100/api/targets");
    const data = await response.json();
    console.log(data.message);
    }
    catch (err) {
          console.error("Fetch error:", err);
          setData("Failed to load message: " + err.message);
      }
    };

function Hero() {
  const [data, setData] = useState("Loading...");

  useEffect(() => {
    abc();
  }, []);

  const images = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg"
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/136405/pexels-photo-136405.jpeg"
    },
    {id: 3,
      url: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg"
    },
    {id: 4,
      url: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg"
    },
    {id: 5,
      url: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg"
    }
  ];
   
  return (
    <>
    <div className = "w-auto h- auto flex justify-center">
        <img src = {images[2].url} alt = "FTINESS IMAGES" className = "h-150"/>
    </div>
    </>
  );
}

export default Hero;
