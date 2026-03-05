import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white">
      <div className="container mx-auto py-5 ">
        <div className="flex justify-between items-center">
          <div>
            <h1 className=" ml-2 md:ml-0 text-xl md:text-2xl font-bold">
              CS — Ticket System
            </h1>
          </div>

          <div className="flex items-center gap-3 md:gap-7">
            {/* desktop section  */}
            <div className="hidden md:flex gap-7 items-center font-semibold">
              <h3>Home</h3>
              <h3>FAQ</h3>
              <h3>Changelog</h3>
              <h3>Blog</h3>
              <h3>Download</h3>
              <h3>Contact</h3>
            </div>

            <div>
              <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded mt-2 md:mt-0">
                + New Ticket
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button className="mr-1" onClick={() => setIsOpen(!isOpen)}>
                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 mt-4 px-4">
            <h3>Home</h3>
            <h3>FAQ</h3>
            <h3>Changelog</h3>
            <h3>Blog</h3>
            <h3>Download</h3>
            <h3>Contact</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
