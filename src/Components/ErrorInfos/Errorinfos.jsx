import { Link } from "react-router-dom";


const Errorinfos = () => {
          return (
          <div className="px-4 md:px-8 ">
          <div className="max-w-7xl mx-auto bg-base-200 rounded-lg">
          <div className="mt-32 mb-8 flex items-center justify-center  bg-base-200 " >
          
          <img src="https://i.ibb.co/ZKjRtXs/error-gif.gif" />
          </div>
          <div className="text-center ">
          <Link to = "/">
          <button className="btn btn-primary mb-5">Go Back</button>
          </Link>
          
          </div>
          
          </div>
                              
          </div>
          );
};

export default Errorinfos;
