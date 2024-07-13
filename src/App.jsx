import HeaderJmrDev from "./components/HeaderJmrDev";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Weather from "./components/Weather";
import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";

function App() {
  const [inputLocation, setInputLocation] = useState('manilAs');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const [isLocationExist, setIsLocationExist] = useState(true);

  const submitLocation = () => {
    const fetchApi = async () => {
      const apiKey = 'dc4d1aa83adb70a59c0e4d3e9bc1b12e';
      try {
        setInputLocation(inputLocation.charAt(0).toUpperCase() + inputLocation.slice(1));
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputLocation}&appid=${apiKey}`);

        if (!res.ok) {
          throw new Error('Failed to fetch');

        }

        const data = await res.json();
        setWeather(data);
        console.log(data);
        setIsLocationExist(true);

        if (!weather || !weather.main || !weather.weather || !weather.wind) {
          setLoading(false);
        }
      } catch (error) {
        console.error('Failed to fetch API', error);
        setIsLocationExist(false);
      } finally {
        setLoading(false);
        
      }
    };

    fetchApi();
  };

  const location = (e) => {
    if (e.key === 'Enter') {
      submitLocation();
    }
  };
  useEffect(() => {
    submitLocation();
  }, []);

  useEffect(() => {
    setLoading(true);
  }, [inputLocation]);

  return (
    <>
      <div className="p-8 flex flex-col md:container mx-auto md:px-[100px] md:py-20 lg:flex-row ">
        <div className="lg:basis-[49%] flex flex-col items-center justify-center ">
          <HeaderJmrDev />
          <div className="w-[300px] bg-input-bg h-[55px] rounded-lg relative flex items-center mt-10 ">
            <div className="w-full flex justify-between">
              <FaMapMarkerAlt className="text-[#AEAEAE] text-xl ml-3" />
              <button className="z-10" onClick={submitLocation}><IoSearch className="mr-4 text-[#AEAEAE] text-xl cursor-pointer " /></button>
            </div>
            <input
              id="location"
              type="text"
              className="font-kanit text-white w-full h-full px-10 bg-input-bg absolute rounded-lg inset-0 border border-[#303030] focus:border-yellow-400 focus:outline-none"
              placeholder="Enter your location"

              onChange={(e) => setInputLocation(e.target.value)}
              onKeyDown={location}
            // Add this line to keep the input value controlled
            />
          </div>
        </div>

        <div className="hidden lg:flex bg-yellow-rgba w-[1px] h-[500px]"></div>

        {loading ?
          (<Spinner />) :
          (<Weather weather={weather} isLocationExist={isLocationExist} />)}
      </div>
    </>
  );
}

export default App;
