
const TagButton = ({ text }: { text: string }) => {
  return (
    <span
      className="mr-3 mb-3 inline-flex items-center justify-center rounded-md bg-primary bg-opacity-10 py-2 px-4 
      dark:bg-primary
      text-body-color duration-300 hover:bg-opacity-100 hover:text-white"
    >
      {text}
    </span>
  );
};

export default TagButton;
