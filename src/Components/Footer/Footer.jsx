

const Footer = () => {
          return (
          <div>
          <footer className="bg-[#1A1919]  py-10 lg:px-0 px-5 text-white">
          <div className="max-w-7xl mx-auto">
          <div className="hidden lg:flex md:flex flex-col lg:flex-row md:flex-row gap-6 mb-8">
          <div className="footer-part lg:w-[36%] w-full">
          <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
          </div>
          <div className="footer-part lg:w-[16%] w-full">
          <h3 className="text-center lg:text-left">Company</h3>
          <ul>
          <li>About Us</li>
          <li>Work</li>
          <li>Latest News</li>
          <li>Careers</li>
          </ul>
          </div>
          <div className="footer-part lg:w-[16%] w-full">
          <h3 className="text-center lg:text-left">Product</h3>
          <ul>
          <li>Prototype</li>
          <li>Plans & Pricing</li>
          <li>Customers</li>
          <li>Integrations</li>
          </ul>
          </div>
          <div className="footer-part lg:w-[16%] w-full">
          <h3 className="text-center lg:text-left">Support</h3>
          <ul>
          <li>Help Desk</li>
          <li>Sales</li>
          <li>Become a Partner</li>
          <li>Developers</li>
          </ul>
          </div>
          <div className="footer-part lg:w-[16%] w-full">
          <h3 className="text-center lg:text-left">Contact</h3>
          <ul>
          <li>524 Broadway, NYC</li>
          <li>+1 777 - 978 - 5570</li>
          </ul>
          </div>
          </div>
          <hr className="mb-6 hidden lg:flex md:flex" />
          <div className="flex justify-between items-center flex-col lg:flex-row">
          <div className="copyRight">
          <p>@2023 Donation Campaign. All Rights Reserved</p>
          </div>
          <div className="copyRight hidden lg:flex md:flex">
          <p>Powered by Donation Campaign</p>
          </div>
          </div>
          </div>
          </footer>
          </div>
          );
};

export default Footer;