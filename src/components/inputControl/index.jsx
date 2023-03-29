
import { StyleFieldset } from "./style"



export const InputControl = ({placeholder, type, idName, register, error, origin }) => {
     

    return(
        <StyleFieldset origin={origin} >
            <input id={idName} required  type={type}  {...register} />
            <label htmlFor={idName}>{placeholder}</label>
            {error ? <span>{error}</span> : null}
        </StyleFieldset>
    )
}