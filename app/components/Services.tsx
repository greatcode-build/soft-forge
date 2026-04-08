import { services } from "../constants";
import { Card } from "./Card";
import { Title } from "./Title";

const Services = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="container px-5 py-10 md:py-24 mx-auto">
        <Title
          title="Our Services"
          titleStyles="text-white"
          subTitle="We provide a wide range of services to help your business grow."
          subTitleStyles="text-gray-400"
        />
        <div className="w-full flex flex-wrap">
          {services.map(({ id, title, text, color, icon: Icon }) => (
            <div key={id} className="xl:w-1/3 md:w-1/2 p-4">
              <Card
                title={title}
                text={text}
                icon={
                  <Icon
                    size={30}
                    style={{ backgroundColor: `${color}` }}
                    className={`rounded-full p-1 text-white`}
                  />
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Services };
