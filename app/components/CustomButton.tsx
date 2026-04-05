const CustomButton = ({ title }: { title: string }) => {
  return (
    <button className="text-white py-1.5 px-5 bg-blue-600 hover:bg-blue-700 rounded-full text-base">
      {title}
    </button>
  );
};

export { CustomButton };
