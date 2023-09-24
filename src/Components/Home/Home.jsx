import { useEffect, useState } from "react";

import '../Donate/Donate'
import Donate from "../Donate/Donate";
const Home = () => {

          const [donate, setDonate] = useState([])

          useEffect(() => {
          fetch('donate.json')
          .then(res => res.json())
          .then(donate => setDonate(donate))
          },[])

          return (
          <div>
          <div className="max-w-7xl mx-auto px-2">
          <div className="grid grid-cols-4 gap-4">
          {
           donate.map(donate => <Donate key={donate.id} donate = {donate}></Donate>)
          }
          </div>   
          </div>
                         
          </div>
          );
};

export default Home;