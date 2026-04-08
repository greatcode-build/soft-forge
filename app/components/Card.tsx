const Card = ({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="bg-[#001a36] w-full h-64 border border-gray-400 rounded-lg shadow-md p-4 py-6 transform transition-transform duration-300 hover:scale-105">
      <div className="flex items-center justify-center">{icon}</div>
      <h2 className="text-xl font-bold mt-4 text-white">{title}</h2>
      <div className="mt-4 text-gray-300 text-[14px]">
        <p>{text}</p>
      </div>
    </div>
  );
};

export { Card };
