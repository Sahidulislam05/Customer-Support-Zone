import tw from "../../assets/fi_5969020.png";
import link from "../../assets/fi_145807.png";
import fb from "../../assets/fi_5968764.png";
import support from "../../assets/fi_6244710.png";
const Footer = () => {
  return (
    <div className="bg-black mt-36">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 text-white p-16 gap-16">
          <div>
            <h1 className="text-2xl font-bold">CS — Ticket System</h1>
            <p className="mt-4">
              A CS — Ticket System is a tool for managing customer support
              requests, organizing them into tickets that support teams can
              track, prioritize, and resolve efficiently.
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Company</h1>

            <div className="mt-4 flex flex-col gap-4">
              <h3>About Us</h3>
              <h3>Our Mission</h3>
              <h3>Contact Saled</h3>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Services</h1>
            <div className="mt-4 flex flex-col gap-4">
              <h3>Products & Services</h3>
              <h3>Customer Stories</h3>
              <h3>Download Apps</h3>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Information</h1>
            <div className="mt-4 flex flex-col gap-4">
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
              <p>Join Us</p>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Social Links</h1>
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex gap-2">
                <img className="h-full" src={tw} alt="" />
                <p>@CS — Ticket System</p>
              </div>
              <div className="flex gap-2">
                <img className="h-full" src={link} alt="" />
                <p>@CS — Ticket System</p>
              </div>
              <div className="flex gap-2">
                <img className="h-full" src={fb} alt="" />
                <p>@CS — Ticket System</p>
              </div>
              <div className="flex gap-2">
                <img className="h-full" src={support} alt="" />
                <p>support@cst.com</p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-center text-xl text-white p-7">
          © 2026 CS — Ticket System. All rights reserved.{" "}
        </h1>
      </div>
    </div>
  );
};

export default Footer;
