import { useEffect, useState } from "react";

import '../Donate/Donate'
import Donate from "../Donate/Donate";
import Banner from "../Banner/Banner";
const Home = () => {

          const [donate, setDonate] = useState([])

          useEffect(() => {
          fetch('donate.json')
          .then(res => res.json())
          .then(donate => setDonate(donate))
          },[])

          return (
          <div>
          <Banner></Banner>
          <div className="max-w-7xl mx-auto px-2 my-14">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          {
           donate.map(donate => <Donate key={donate.id} donate = {donate}></Donate>)
          }
          </div>   
          </div>
                         
          </div>
          );
};

export default Home;