import { Link } from "react-router-dom";


const Errorinfos = () => {
          return (
          <div>
          <div className="max-w-7xl mx-auto">
          <div className="lg:ml-48" >
          <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=826&t=st=1695740375~exp=1695740975~hmac=a563ac25ee55b703a52717b028d5b5b7f40b664ac8f5b7cfcd6d246a8c095377" />
          </div>
          <div className="text-center">
          <Link to = "/">
          <button className="btn btn-primary">Go Back</button>
          </Link>
          
          </div>
          
          </div>
                              
          </div>
          );
};

export default Errorinfos;