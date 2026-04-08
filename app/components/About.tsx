import Image from "next/image";
import { aboutData } from "../constants";

const About = () => {
  return (
    <section>
      <div className="container mx-auto px-5 py-14">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-sm text-blue-500 tracking-widest font-medium">
            ABOUT US
          </h1>
          <p className="sm:text-3xl text-2xl font-semibold text-slate-900">
            Smart Digital Solutions
          </p>
        </div>
        <div className="flex flex-wrap -m-4 gap-10 md:gap-0">
          {aboutData.map(({ id, title, text, icon: Icon }) => (
            <div key={id} className="md:w-1/3 p-4">
              <div className="flex rounded-lg h-full bg-white p-6 flex-col shadow-lg">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white shrink-0">
                    <Icon />
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium">{title}</h2>
                </div>
                <div className="flex grow">
                  <p className="leading-relaxed text-base">{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto flex flex-wrap px-5 py-24">
        <div className="lg:w-1/2 flex items-center lg:mb-0 mb-10 w-full rounded-lg overflow-hidden">
          <Image
            src="/images/About.jpeg"
            alt="About Us"
            width={400}
            height={400}
            className="w-full"
          />
        </div>
        <div className="flex flex-col lg:py-6 -mb-10 lg:w-1/2 lg:pl-12">
          {aboutData.map(({ id, title, text, icon: Icon }) => (
            <div
              key={id + title}
              className="flex flex-col lg:items-start items-center mb-10"
            >
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5">
                <Icon />
              </div>
              <div className="grow">
                <h2 className="text-gray-900 text-lg font-semibold mb-3">
                  {title}
                </h2>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { About };
