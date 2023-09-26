import  { useEffect, useState } from "react";
import Donate from "../Donate/Donate";
import Banner from "../Banner/Banner";
import { Helmet } from "react-helmet";

const Home = () => {
  const [donateData, setDonateData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {

    fetch('./donate.json')
      .then(res => res.json())
      .then(data => setDonateData(data));
  }, []);

  const handleFilterData = (filteredData) => {
    setFilteredData(filteredData);
  };

  return (
          <div>
            <Helmet>
              <title>Donation Campaign | Home</title>
            </Helmet>
          <Banner data={donateData} onFilterData={handleFilterData} />
          <div className="max-w-7xl mx-auto px-2 my-14">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          {filteredData.length > 0
          ? filteredData.map(donate => (
          <Donate key={donate.id} donate={donate} />
          ))
          : donateData.map(donate => (
          <Donate key={donate.id} donate={donate} />
          ))}
          </div>
          </div>
          </div>
  );
};

export default Home;
