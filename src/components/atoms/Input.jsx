function Input({type, id, inputName, textLabel, divClassName, value}) {
    return (  
        <>
        <div className={divClassName}> 
        <label htmlFor={id}>{textLabel}</label>
        <input type={type} id={id} name={inputName} value={value} required></input>
        </div>
        </>
    );
}

export default Input;