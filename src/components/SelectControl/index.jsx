import { StyleFieldset } from "./style"


export const SelectControl = ({origin, placeholder, register, error}) => {

    if(origin == 'dash'){
        return(
            <StyleFieldset>
            <select id='select' required  {...register}>
                <option disabled="" defaultValue='' ></option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
            </select>
            <label htmlFor="select">{placeholder}</label>
            {error ? <span>{error}</span> : null}
        </StyleFieldset>
        )
    }else{
        return(
            <StyleFieldset>
                <select id='select' required  {...register}>
                    <option disabled="" defaultValue='' ></option>
                    <option value="Primeiro Módulo (Frontend)">Primeiro Módulo</option>
                    <option value="Segundo Módulo (Frontend)">Segundo Módulo</option>
                    <option value="Terceiro Módulo (Frontend avançado)">Terceiro Módulo </option>
                    <option value="Quarto Módulo (backend)">Quarto Módulo</option>
                    <option value="Quinto Módulo (backend)">Quinto Módulo</option>
                    <option value="Sexto Módulo (backend avançado)">Sexto Módulo</option>
                </select>
                <label htmlFor="select">{placeholder}</label>
                {error ? <span>{error}</span> : null}
            </StyleFieldset>
        )
    }
}