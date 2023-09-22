import React from "react";

function NavBar() {
  return (
    <>
      <body>
        <nav class="lg:px-16 px-6 bg-[#0C1D42] shadow-md flex flex-wrap items-center lg:py-0 py-2">
          <div class="flex-1 flex justify-between items-center">
            <a href="/" class="flex text-lg font-semibold">
              <img
                src="../src/assets/logo.png"
                width="50"
                height="50"
                class="p-2"
                alt="Collins Nixon Tech Logo"
              />
              <div class='mt-3  text-white text-xl font-sans "Helvetica Neue" italic'>Mchapakazi Todo</div>
            </a>
          </div>
          <label for="menu-toggle" class="cursor-pointer lg:hidden block">
            <svg
              class="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input class="hidden" type="checkbox" id="menu-toggle" />
          <div
            class="hidden lg:flex lg:items-center lg:w-auto w-full"
            id="menu"
          >
            <nav>
              <ul class="text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex  lg:pt-0">
                {/* <li class="py-2 lg:py-0 ">
                  <a
                    class="text-white hover:pb-4 hover:border-b-4 hover:border-purple-400"
                    href="#"
                  >
                    Blog
                  </a>
                </li>
                <li class="py-2 lg:py-0 ">
                  <a
                    class="text-white hover:pb-4 hover:border-b-4 hover:border-purple-400"
                    href="#"
                  >
                    Projects
                  </a>
                </li>
                <li class="py-2 lg:py-0 ">
                  <a
                    class="text-white hover:pb-4 hover:border-b-4 hover:border-purple-400"
                    href="#"
                  >
                    Apps
                  </a>
                </li>
                <li class="py-2 lg:py-0 ">
                  <a
                    class="text-white hover:pb-4 hover:border-b-4 hover:border-purple-400"
                    href="#"
                  >
                    Designs
                  </a>
                </li> */}
                <li class="py-2 lg:py-0 ">
                  <a
                    class="text-white hover:pb-4 hover:border-b-4 hover:border-white"
                    href="#"
                  >
                    Sign in
                  </a>
                </li>
                <li class="py-2 lg:py-0 ">
                  <a
                    class="text-white hover:pb-4 hover:border-b-4 hover:border-white"
                    href="#"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </nav>
      </body>
    </>
  );
}

export default NavBar;
