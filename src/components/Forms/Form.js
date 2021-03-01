function Form({children}){
  return (
    <form className="block text-white flex-wrap left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute box-border py-16 px-7 min-w-max lg:min-w-min">
        <h1 className="border-b-4 border-pink-600 text-4xl mb-12 px-1 py-0 w-28 font-bold">Login</h1>
        {children}
    </form>
  );
}

export default Form;
