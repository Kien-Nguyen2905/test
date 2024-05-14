import React from "react";

const Header = () => {
  return (
    <div className="w-full py-3 border-b-[0.5px] pl-4">
      <div className="w-full flex items-center gap-2">
        <a href="" className=" block w-[120px] h-[32px]">
          <img
            className="w-full h-full object-cover"
            src="https://geekup.vn/Icons/geekup-logo-general.svg"
            alt=""
          />
        </a>
        <h1>Test</h1>
      </div>
    </div>
  );
};

export default Header;
