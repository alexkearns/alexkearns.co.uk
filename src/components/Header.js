import React from 'react'

 const Header = ({title, center}) => {
    return (
        <header className={"container pt-6 pb-12 " + (center ? "text-center" : "")}>
          <h1 className="text-3xl font-medium leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
        </header>
    )
}

 export default Header