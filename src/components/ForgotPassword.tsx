import React from "react";
import { ReactComponent as RedElipseTop } from "../assets/red-elipse-top.svg";
import { ReactComponent as RedElipseRight } from "../assets/red-elipse-right.svg";
import { ReactComponent as LineIcon } from "../assets/line.svg";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <section className="px-2 py-16 flex flex-col gap-10 md:gap-20 lg:grid lg:grid-cols-5 lg:gap-24 lg:px-[60px] lg:py-[114px]">
      <div className="lg:col-span-3">
        <div className="flex flex-col justify-center lg:pt-64">
          <h1 className="text-6xl text-center lg:text-start sm:text-8xl sm:font-semibold text-white sm:leading-normal z-10 tracking-wide">No Worries.!!</h1>

          <div className="relative text-center pt-3 sm:pl-5 sm:pt-3  lg:text-start">
            <span className="sm:text-[32px] text-white font-semibold italic border px-2 py-1 sm:border-4 border-white sm:px-6 sm:py-[14px]">Take me back.!</span>
            <LineIcon className="hidden lg:block absolute top-9 -right-20" />
          </div>
        </div>
      </div>

      <div className="md:w-full lg:w-[480px] relative lg:col-span-2 justify-self-end">
        <RedElipseTop className="absolute w-[302px] h-[302px] lg:-top-12 lg:-left-48" />
        <RedElipseRight className="absolute bottom-0 right-0 lg:-bottom-20 lg:-right-9" />

        <div className="border border-gray-200 rounded-2xl bg-white bg-opacity-5 backdrop-blur-[26px] px-6 py-10 sm:px-10 sm:py-24 text-white flex flex-col gap-24 sm:gap-[372px]">
          <div className="flex flex-col gap-[14px] md:w-full lg:w-[400px]">
            <div>
              <h3 className="text-3xl md:text-4xl leading-normal font-semibold">Forgot Password ?</h3>
              <p className="text-sm md:text-base font-medium leading-normal">Please enter you’re email</p>
            </div>
            <div className="flex flex-col gap-6">
              <input
                className="px-4 py-[14px] w-full bg-transparent border border-gray-100 rounded-2xl placeholder:text-lg md:placeholder:text-xl placeholder:font-normal placeholder:text-white placeholder:leading-normal outline-none"
                type="email"
                placeholder="example@mail.com"
              />

              <div className="flex flex-col gap-3">
                <button className="text-lg md:text-xl font-semibold leading-normal px-[10px] py-[14px] bg-gradient-to-r from-[#E948C5] via-[#CD407B] to-[#75042D] rounded-2xl">Reset Password</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[101px]">
            <div className="flex flex-col gap-2">
              <p className="text-sm md:text-base font-medium  text-white text-center">
                Don’t have an account ?{" "}
                <Link to={`/signup`} className="cursor-pointer">
                  Signup
                </Link>
              </p>
              <div className="flex flex-col sm:flex-row items-center md:justify-evenly lg:justify-between ">
                <p className="text-sm md:text-base font-normal cursor-pointer">Terms & Conditions</p>
                <p className="text-sm md:text-base font-normal cursor-pointer">Support</p>
                <p className="text-sm md:text-base font-normal cursor-pointer">Customer Care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
