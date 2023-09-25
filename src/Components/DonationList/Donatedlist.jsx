import { Link } from "react-router-dom";


const Donatedlist = ({donations}) => {

          return (
                    <div className="border-2 border-solid p-4 rounded-lg grid grid-cols-3 items-center justify-center px-4 my-4 " style={{background: donations.card_bg_color, color: donations.text_color}}>
                    <div className='col-span-1 m-4 border-2 rounded-md w-10/12 lg:h-full h-[60%]'>
                    <img className="lg:w-auto h-full w-20" src={donations.picture_url} />
                    </div>

                    <div className='col-span-2 md:pl-4' >
                    <button className= "p-1 rounded-md " style={{background: donations.button_bg_color}} >{donations.category}</button>
                    <h1 className="text-2xl font-bold text-black">{donations.title}</h1>
                  <h1 className="ml-2 text-xl font-medium">${donations.price}</h1>
                  <Link  to = {`/donation/${donations.id}`}>
                  <button  className="btn border-none text-white" style={{background: donations.text_color }}>View Details</button>    
                    </Link>
                    </div>
                  </div>
          );
};

export default Donatedlist;