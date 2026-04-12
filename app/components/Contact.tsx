import { CustomButton } from "./CustomButton";
import { TextInput } from "./TextInput";

const Contact = () => {
  return (
    <section>
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.63647957466!2d3.1191475975885954!3d6.548028244946805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1776004324341!5m2!1sen!2sng"
          width="100%"
          height="100%"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex container mx-auto px-5 py-24">
        <div className="lg:w-1/3 md:w-1/2 rounded-lg mx-auto flex flex-col mt-10 md:mt-0 w-full p-8 relative z-10 bg-white md:ml-auto md:mr-0">
          <h2 className="text-gray-800 text-lg font-medium mb-1">Feedback</h2>
          <p className="text-gray-600 mb-5">
            We&apos;d love to hear your thoughts!
          </p>
          <TextInput type="email" placeholder="Email" styles="bg-white mb-5" />
          <textarea
            className="h-32 border border-gray-400 rounded focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-base px-4 py-2 mb-5 resize-none"
            placeholder="Message..."
          ></textarea>
          <CustomButton
            title="Send Feedback"
            buttonStyle={`w-full block px-6 bg-blue-500 text-white py-2.5 rounded text-md hover:bg-blue-800 focus:outline-none flex-col items-center`}
          />
          <p className="text-xs text-gray-500 mt-4">
            We value your feedback and will get back to you soon.
          </p>
        </div>
      </div>
    </section>
  );
};

export { Contact };
