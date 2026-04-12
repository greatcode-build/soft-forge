import Link from "next/link";
import { footerIcons, footerLinks } from "../constants";
import { TextInput } from "./TextInput";
import { CustomButton } from "./CustomButton";

const Footer = () => {
  return (
    <footer className="text-gray-700">
      <div className="container px-5 py-24 mx-auto">
        <div className="w-full flex flex-wrap gap-10 justify-between -mb-10 -mx-4">
          {footerLinks.map(({ id, title, links }) => (
            <div key={id} className="w-auto px-4">
              <h2 className="font-medium text-gray-800 text-sm tracking-widest mb-3">
                {title}
              </h2>
              <div className="flex flex-col gap-3 mb-10">
                {links.map((link, index) => (
                  <Link
                    href="#"
                    className="text-gray-800 hover:text-gray-700"
                    key={index}
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="px-4 w-auto">
            <h2 className="font-semibold text-xs text-gray-800 mb-3">
              Get in Touch
            </h2>
            <div className="mb-10 flex flex-col gap-3 text-gray-900">
              <p>+234 9031 190 930</p>
              <p>support@softforge.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4">
        <p className="container px-5 mx-auto text-gray-500 mt-2">
          Subscribe to our Newsletter
        </p>
        <div className="container mx-auto px-5 pt-6 pb-8 flex flex-wrap items-center justify-between">
          <div className="w-full md:w-2/4 lg:w-1/3 flex justify-center md:justify-start">
            <TextInput
              type="text"
              placeholder="Email address"
              styles="w-full flex-grow md:w-40 bg-gray-100 mr-2 sm:mr-4"
            />
            <CustomButton
              title="Subscribe"
              buttonStyle={`block px-6 bg-blue-500 text-white py-2.5 rounded text-md hover:bg-blue-800 focus:outline-none flex-col items-center`}
            />
          </div>
          <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto gap-2">
            {footerIcons.map(({ icon: Icon, id }) => (
              <Link
                href="#"
                key={id}
                className="text-gray-500 text-xl hover:text-blue-500 hover:scale-125 ease-in-out duration-300"
              >
                <Icon />
              </Link>
            ))}
          </span>
        </div>
      </div>
      <div className="bg-blue-950">
        <div className="container mx-auto px-5 py-4">
          <p className="text-center sm:text-left text-sm text-gray-300">
            &copy;2026 SoftForge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
