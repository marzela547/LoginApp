function FormField({ type, id, fname, onChange, caption, value, error, labelClassName, containerClassName, ...attr}){
  return (
    <section className={containerClassName}>
    <label className={labelClassName}>{caption}</label>
    <i className="fas fa-at"></i>
    <input className="w-full mb-5 border-b-2 h-10 md:h-14 md:border-b-4 md:mb-10 text-base md:text-3xl lg:text-xl lg:border-b-2 lg:h-10 border-pink-600 bg-transparent"
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
