import Image from "next/image";
import { teamMembers } from "../constants";
import { Title } from "./Title";

const Team = () => {
  return (
    <div className="container px-5 py-24 mx-auto">
      <Title
        title="Our Team"
        subTitle=""
        titleStyles="text-gray-800"
        subTitleStyles="text-gray-500"
      />
      <div className="flex flex-wrap">
        {teamMembers.map(({ id, name, title, email, image }) => (
          <div key={id} className="px-2 py-4 lg:w-1/3 md:w-1/2 w-full h-44">
            <div className="h-full flex items-center border border-gray-300 p-4 rounded-lg shadow-sm">
              <div className="w-16 h-16 rounded-full mr-4">
                <Image
                  src={image}
                  alt={name}
                  width={48}
                  height={48}
                  className="w-full h-full shrink-0 object-cover rounded-full"
                />
              </div>
              <div className="flex grow flex-col gap-1">
                <h2 className="text-gray-800 text-lg font-semibold">{name}</h2>
                <p className="text-gray-700">{title}</p>
                <p className="text-blue-700 text-sm">{email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Team };
