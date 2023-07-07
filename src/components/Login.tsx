import React from "react";
import { ReactComponent as EyeIcon } from "../assets/eye.svg";
import { ReactComponent as GoogleIcon } from "../assets/google.svg";
import { ReactComponent as FBIcon } from "../assets/fb.svg";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as ElipseTopIcon } from "../assets/elipse-top.svg";
import { ReactComponent as ElipseRightIcon } from "../assets/elipse-right.svg";

const Login = () => {
  return (
    <section className="grid grid-cols-5 gap-24 px-[60px] py-[114px]">
      <div className="col-span-3">
        <div className="flex flex-col justify-center min-h-screen">
          <h1 className="text-8xl font-semibold text-white leading-normal">Welcome Back .!</h1>

          <div className="pl-5">
            <span className="text-[32px] text-white font-semibold italic border-4 border-white px-6 py-[14px]">Skip the lag ?</span>
          </div>
        </div>
      </div>

      <div className="w-[480px] relative col-span-2 justify-self-end">
        <ElipseTopIcon className="absolute w-[302px] h-[302px] -top-12 -left-48" />
        <ElipseRightIcon className="absolute -bottom-20 -right-9" />
        <div className="border border-gray-200 rounded-2xl bg-white bg-opacity-5 backdrop-blur-[26px] px-10 py-24 text-white flex flex-col gap-12">
          <div className="flex flex-col gap-[14px] w-[400px]">
            <div>
              <h3 className="text-4xl leading-normal font-semibold">Login</h3>
              <p className="text-base font-medium leading-normal">Glad you’re back.!</p>
            </div>
            <div className="flex flex-col gap-6">
              <input className="px-4 py-[14px] w-full bg-transparent border border-gray-100 rounded-2xl placeholder:text-xl placeholder:font-normal placeholder:text-white placeholder:leading-normal" type="text" placeholder="Username" />

              <div className="relative flex flex-col gap-[14px]">
                <input
                  className="relative px-4 py-[14px] w-full bg-transparent border border-gray-100 rounded-2xl placeholder:text-xl placeholder:font-normal placeholder:text-white placeholder:leading-normal "
                  type="password"
                  placeholder="Password"
                />
                <div className="pointer-events-none absolute top-4 right-0 flex items-center px-4">
                  <EyeIcon className="h-[18px] w-[18px]" />
                </div>
                <div className="flex items-center gap-1">
                  <input type="checkbox" />
                  <label>Remember Me</label>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <button className="text-xl font-semibold leading-normal px-[10px] py-[14px] bg-gradient-to-r from-[#628EFF] via-[#8740CD] to-[#580475] rounded-2xl">Login</button>
                <button className="text-center">Forgot password ?</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[101px]">
            <div className="flex flex-col gap-3">
              <div className="flex gap-5 items-center">
                <hr className="border border-[#4D4D4D] w-full" />
                <p className="text-[#4D4D4D] text-base font-medium leading-normal">Or</p>
                <hr className="border border-[#4D4D4D] w-full" />
              </div>
              <div className="flex justify-center items-center gap-[18px]">
                <GoogleIcon className="cursor-pointer" />
                <FBIcon className="cursor-pointer" />
                <GithubIcon className="cursor-pointer" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base font-medium  text-white text-center">
                Don’t have an account ? <span className="cursor-pointer">Signup</span>
              </p>
              <div className="flex justify-between items-center">
                <p className="text-base font-normal cursor-pointer">Terms & Conditions</p>
                <p className="text-base font-normal cursor-pointer">Support</p>
                <p className="text-base font-normal cursor-pointer">Customer Care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;