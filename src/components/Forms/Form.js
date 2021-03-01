function Form({children}){
  return (
    <form className="block text-white flex-wrap left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute box-border py-16 px-7 lg:min-w-min">
        <label className="border-b-4 border-pink-600 text-2xl font-bold">Login</label>
        {children}
    </form>
  );
}

export default Form;
