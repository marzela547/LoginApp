function Form({children}){
  return (
    <form className="block text-white flex-wrap left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-3/5 md:h-1/2 md:text-3xl md:py-16 md:px-7 absolute box-border lg:py-16 lg:text-2xl lg:px-7 lg:h-auto lg:w-1/4">
        <h1 className="border-b-4 border-pink-600 text-2xl w-min mb-3 mt-2 md:border-b-8 md:mb-12 md:text-5xl md:mt-0 lg:text-4xl lg:mb-12 px-1 py-0 font-bold">Login</h1>
        {children}
    </form>
  );
}

export default Form;
