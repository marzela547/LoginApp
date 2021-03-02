function FormAction({caption, onClick}){
  let myClasses = [
    "w-1/2",
    "flex",
    "items-center",
    "justify-center",
    "px-2",
    "py-2",
    "my-4",
    "border",
    "border-pink-600",
    "text-base",
    "font-medium",
    "rounded-lg",
    "text-white",
    "bg-transparent",
    "hover:border-pink-300",
    "md:py-4",
    "md:text-3xl",
    "md:px-10",
    "mx-auto",
    "lg:text-lg",
    "lg:py-2"
  ];
  return(
    <button
      onClick={onClick}
      className={myClasses.join(" ")}
    >
      {caption}
    </button>
  );
}

export default FormAction;
