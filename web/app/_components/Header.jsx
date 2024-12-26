import React from "react"

const Header = () => {
  return (
    <div className="navbar flex justify-between bg-base-100 bg-white px-6 md:px-8">
      {/* Navbar Start */}
      <div className="navbar-start">
        <p className="font-rock-salt text-xl text-primary">Rawr</p>
      </div>

      {/* Navbar End */}
      <div className="navbar-end md:hidden">
        <div className="dropdown dropdown-left">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-circle btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Label</a>
            </li>
            <li>
              <a>Prediksi</a>
            </li>
            <li>
              <a>Team</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Navbar End for larger devices */}
      <div className="navbar-end hidden sm:flex font-semibold text-black flex gap-5">
        <a href="#home">Home</a>
        <a href="#label">Label</a>
        <a href="#prediks">Prediksi</a>
        <a href="#team">Team</a>
      </div>
    </div>
  )
}

export default Header
