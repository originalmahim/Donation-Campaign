

const Banner = () => {
          return (
                    <div >
                    <div className="max-w-7xl mx-auto lg:h-[50vh] md:h-[30vh] border-none rounded-md mb-5 px-3 bg-no-repeat bg-right">
            <div className=" items-center h-full pt-24">
              <h1 className="text-center lg:text-4xl font-bold">
              I Grow By Helping People In Need
              </h1>
              <div className="relative mx-44 mt-8">
        <input type="text" placeholder="Search here....." className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Search</button>
      </div>
            </div>
            
          </div>
                    </div>
          );
};

export default Banner;