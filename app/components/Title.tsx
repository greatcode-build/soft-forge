const Title = ({
  title,
  subTitle,
  titleStyles,
  subTitleStyles,
}: {
  title: string;
  subTitle: string;
  titleStyles: string;
  subTitleStyles: string;
}) => {
  return (
    <div className="w-full flex flex-col mb-16 items-center text-center justify-center">
      <h1 className={`text-3xl md:text-2xl font-semibold mb-4 ${titleStyles}`}>
        {title}
      </h1>
      <p
        className={`lg:w-1/2 w-full leading-relaxed text-base${subTitleStyles}`}
      >
        {subTitle}
      </p>
    </div>
  );
};

export { Title };
