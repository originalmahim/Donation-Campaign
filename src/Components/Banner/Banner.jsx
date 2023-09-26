

const Banner = () => {
          return (
              <div >
              <div className="max-w-7xl mx-auto lg:h-[50vh] md:h-[30vh] border-none rounded-md mb-5  bg-no-repeat bg-right" style={{ backgroundImage: "url('https://i.ibb.co/KXbdGsV/people-meeting-community-center.jpg')", backgroundSize: 'cover', }}>
              <div className="hero-overlay bg-opacity-80 rounded-md">
              <div className=" items-center h-full pt-24">
              <h1 className="text-center lg:text-4xl md:text-2xl text-xl font-bold text-white">
              I Grow By Helping People In Need
              </h1>
              <div className=" lg:relative md:relative lg:mx-44 md:mx-40 mt-8">
              <input type="text"  placeholder="Search here....." className="input input-bordered lg:w-full md:w-full pr-16" /> 
              <button className="btn btn-primary lg:absolute md:absolute lg:top-0 lg:right-0 lg:rounded-l-none md:rounded-l-none">Search</button>
              </div>
               </div>
              </div>
              </div>
             </div>
           );
};

export default Banner;