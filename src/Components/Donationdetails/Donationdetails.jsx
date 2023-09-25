import { useLoaderData, useParams } from "react-router-dom";


const Donationdetails = () => {
          const data = useLoaderData();
          const {id} = useParams();
         const donate = data.find(donate => donate.id == id)
         console.log(donate.title);
          return (
          <div className="max-w-7xl mx-auto my-24">
            <div >
            <div className="max-w-7xl mx-auto lg:h-[70vh] md:h-[30vh] border-none rounded-md mb-5 px-3 bg-no-repeat bg-right" style={{ backgroundImage: `url(${donate.picture_url})`, backgroundSize: 'cover', position: 'relative' }}>
   <div className="w-full" >
   <div className="absolute inset-x-0 bottom-0 bg-black opacity-80 h-24"></div>     
</div>                 
  <div style={{ position: 'absolute', bottom: '25px', left: '25px' }}>
    <button className="btn border-none text-white" style={{background: donate.text_color }}>Donate ${donate.price}</button>
  
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

export default Donationdetails;