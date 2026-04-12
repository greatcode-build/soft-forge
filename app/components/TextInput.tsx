const TextInput = ({
  type,
  placeholder,
  styles,
}: {
  type: string;
  placeholder: string;
  styles: string;
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full rounded border border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 text-base px-4 py-2 ${styles}`}
    />
  );
};

export { TextInput };
