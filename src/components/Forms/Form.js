function Form({children}){
  return (
    <form className="block flex-wrap border lg:w-1/2 rounded-xl top-1/4 left-1/4 absolute box-border py-16 px-7 w-auto h-96">
        {children}
    </form>
  );
}

export default Form;
