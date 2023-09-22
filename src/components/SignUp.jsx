import React from "react";

function SignUp() {
  return (
    <>
      <div class="bg-gray-500 h-screen w-screen flex items-center">
        <div class="h-max mx-auto flex flex-col items-center">
          {/* <img class="h-[45px] w-[50px] mb-5" src="../src/assets/logo.png" alt="logo" /> */}
          <h1 class="text-3xl font-bold font-mono monospace decoration-wavy text-white text-center italic pb-4">
            Sign up to your account
          </h1>
          <div class="bg-white shadow-xl p-10 flex flex-col gap-2 text-sm">
            <div>
              <label
                class="text-blue-900 font-bold font-mono monospace inline-block pb-2"
                for="username"
              >
                Username
              </label>
              <input
                class="border border-blue-600 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
                type="email"
                name="email"
                placeholder="username"
              />
            </div>
            <div>
              <label
                class="text-blue-900 font-bold font-mono monospace inline-block pb-2"
                for="email"
              >
                Email
              </label>
              <input
                class="border border-blue-600 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
                type="email"
                name="email"
                placeholder="cnixontech@gmail.com"
              />
            </div>
            <div>
              <label
                class="text-blue-900 font-mono monospace font-bold inline-block pb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="border border-blue-600 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
                type="password"
                name="password"
                placeholder="******"
              />
            </div>
            <div class="flex">
              <div class="w-1/2">
                <input type="checkbox" name="rememberMe" />
                <label class="font-mono monospace text-blue-900" for="rememberMe">
                  Remember me
                </label>
              </div>
              <div class="w-1/2">
                <a class="font-bold text-blue-900" href="">
                  Forgot password ?
                </a>
              </div>
            </div>
            <div>
              <input
                class="bg-[#4F46E5] w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#611196]"
                type="submit"
                value="Sign up"
              />
            </div>
            <div>
              <p class="text-center">Or continue with</p>
            </div>
            <div class="flex gap-4">
              <button class="bg-[#f01d1d] w-1/2 py-1 rounded-md text-white font-bold cursor-pointer hover:bg-[#581196]">
                Google
              </button>
              <button class="bg-[#24292F] w-1/2 py-1 rounded-md text-white font-bold cursor-pointer hover:bg-[#6c1196]">
                Github
              </button>
            </div>
          </div>
          <p class="text-sm text-white mt-10">
            Designed By{" "}
            <a href="#" class="text-white font-bold">
              Collins Nixon Tech
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
