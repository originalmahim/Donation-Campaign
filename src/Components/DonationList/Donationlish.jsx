import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Donatedlist from "./Donatedlist";
import { getDonation } from "../Localstorage/Localstorage";


const Donationlish = () => {
          const [donation, setDonation] = useState([]);
          const donate = useLoaderData();
          
          const [show, setShow] = useState(4);

          const handleShowAll = () => {
           setShow(donation.length);
                    };

          useEffect(() => {
          const storedDonation = getDonation();

          if (donate.length > 0) {
          const donated = donate?.filter((donated) => storedDonation.includes(donated.id));
         setDonation(donated);
                }
          }, [donate]);

          return (
          <div>
            <div className={`text-center ${donation.length == 0 ? '' : 'hidden'}`}>
            <h1 className="text-3xl font-bold">No Data Faund.</h1>
            </div>
          <div className="max-w-7xl mx-auto p-2">
          <div className="px-6 lg:px-0 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
          {donation.slice(0, show).map((donations) => (
          <Donatedlist key={donations.id} donations={donations} ></Donatedlist>
          ))}
          </div>
          <div className={`text-center ${donation.length < 4 ? 'hidden' : ''}`}>
          <button onClick={handleShowAll} className="btn bg-green-600 text-white">
          See More
          </button>
          </div>
          </div>
          </div>
             );

              };

export default Donationlish;