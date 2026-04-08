const CustomButton = ({
  title,
  buttonStyle,
}: {
  title: string;
  buttonStyle: string;
}) => {
  return <button className={buttonStyle}>{title}</button>;
};

export { CustomButton };
