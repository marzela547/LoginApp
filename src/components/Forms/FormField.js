function FormField({ type, id, fname, onChange, caption, value, error, ...attr}){
  return (
    <section>
    <label>{caption}</label>
    <input class=" w-full mb-5 border-b-2 h-10 text-base border-white bg-transparent"
        type={type}
        id={id}
        name={fname}
        onChange={onChange}
        value={value}
        {...attr}
    />
      {(error && true) ? (<section>{error}</section>):null }
    </section>
  )
}

export default FormField;
