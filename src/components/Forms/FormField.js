function FormField({ type, id, fname, onChange, caption, value, error, ...attr}){
  return (
    <section>
    <label >{caption}</label>
    <i className="fas fa-at"></i>
    <input className="w-full mb-5 border-b-2 h-10 text-base border-pink-600 bg-transparent"
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
