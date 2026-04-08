"use client";

import Image from "next/image";
import { CustomButton } from "./CustomButton";
import { stats } from "../constants";
import CountUp from "react-countup";

const Header = () => {
  return (
    <section>
      <div className="container mx-auto items-center py-8 2xl:pt-20 flex flex-col md:flex-row">
        <div className="flex flex-col lg:grow lg:pr-24 md:mb-0 mb-16 md:pr-16 md:w-1/2">
          <h1 className="text-3xl md:text-4xl mb-4 font-bold text-slate-600 leading-12 2xl:leading-16">
            Soft Forge Solutions
            <br /> <span>Building your digital future</span>
          </h1>
          <p className="mb-8 leading-relaxed 2xl:mb-14 2xl:leading-8">
            Your business deserves better software. We build reliable, scalable
            systems that streamline operations, cut costs, and give you a clear
            edge in your market.
          </p>
          <div>
            <CustomButton
              title="Get Started"
              buttonStyle={`text-white py-3 px-6 bg-blue-600 hover:bg-blue-800 rounded-md`}
            />
          </div>
        </div>
        <div className="relative h-100 md:h-125 lg:max-w-xl w-full md:w-1/2 flex items-center justify-center">
          <Image
            src="/images/Hero.png"
            alt="Soft Forge Solutions"
            width={500}
            height={500}
            className="rounded-md"
          />
          <div className="absolute bg-white p-2 shadow-2xl rounded-lg left-0 top-6 flex items-center gap-2 cursor-pointer hover:scale-110 ease-in-out duration-300">
            <div className="rounded-full w-10.5 h-10.5">
              <Image
                src="/images/Sam.png"
                alt="Sam"
                width={38}
                height={38}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold">Sam Smith</p>
              <span className="text-xs font-medium">
                Senior Software Engineer
              </span>
            </div>
          </div>
          <div className="absolute bg-white p-2 shadow-2xl rounded-lg right-0 bottom-6 flex items-center gap-2 cursor-pointer hover:scale-110 ease-in-out duration-300">
            <div className="rounded-full w-10.5 h-10.5">
              <Image
                src="/images/Jane.jpeg"
                alt="Jane"
                width={38}
                height={38}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold">Jane Doe</p>
              <span className="text-xs font-medium">Product Manager</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-16 py-10 md:py-20">
        {stats.map(({ id, title, value, start, suffix }) => (
          <div key={id}>
            <CountUp
              start={start}
              end={value}
              delay={0}
              duration={5}
              suffix={suffix}
              separator=""
            >
              {({ countUpRef }) => (
                <div className="flex flex-col justify-center items-center border border-slate-300 rounded-lg h-62.5 w-62.5">
                  <span
                    ref={countUpRef}
                    className="text-6xl text-orange-600 font-bold mb-3"
                  />
                  <span className="text-xl text-gray-600 font-semibold">
                    {title}
                  </span>
                </div>
              )}
            </CountUp>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Header };
