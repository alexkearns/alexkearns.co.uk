import React from "react";

const Header = ({ title, center }) => {
  return (
    <header className={"container pt-3 sm:pt-6 pb-6 sm:pb-12 " + (center ? "text-center" : "")}>
      <h1 className="text-4xl font-light leading-9 tracking-tight text-gray-900 sm:leading-10 md:leading-14">
        {title}
      </h1>
    </header>
  );
};

export default Header;