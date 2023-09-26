import  { createContext, useContext, useState } from 'react';
import { useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import { saveDonations } from "../Localstorage/Localstorage";

const DonationContext = createContext();

export function DonationProvider({ children }) {
  const [donation, setDonation] = useState(0);

  const updateDonation = (amount) => {
    setDonation(donation + amount);
  };

  return (
    <DonationContext.Provider value={{ donation, updateDonation }}>
      {children}
    </DonationContext.Provider>
  );
}

export function useDonation() {
  return useContext(DonationContext);
}


const DonationDetails = () => {
  const { donation, updateDonation } = useDonation();
  const data = useLoaderData();
  const { id } = useParams();
  const idint = JSON.parse(id);
  const donate = data.find(d => d.id === idint);

  const handleDonate = () => {
    saveDonations(idint);
    updateDonation(donate.price);
    Swal.fire({
      icon: 'success',
      title: 'Donation Received',
      text: 'Thank You For Donating',
    });
  }

  return (
    <div className="max-w-7xl mx-auto my-24">
          <div >
          <div className="max-w-7xl mx-auto lg:h-[70vh] md:h-[30vh] h-[30vh] border-none rounded-md mb-5 px-6 bg-no-repeat bg-right" style={{ backgroundImage: `url(${donate.picture_url})`, backgroundSize: 'cover', position: 'relative' }}>
          <div className="w-full" >
          <div className="absolute inset-x-0 bottom-0 bg-black opacity-80 h-24"></div>     
          </div>                 
          <div style={{ position: 'absolute', bottom: '25px', left: '25px' }}>
          <button onClick={handleDonate} className="btn border-none text-white" style={{background: donate.text_color }}>Donate ${donate.price}</button>
          </div>
          </div>
          </div>  
          <div>
          <h1 className="text-3xl font-bold">{donate.title}</h1>
          <p className="text-xl">{donate.description}</p>
          </div>                  
          </div>
  );
};


export default DonationDetails;
