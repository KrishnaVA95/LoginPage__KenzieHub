import { useContext } from 'react';
import { TechContext } from '../../providers/TechContext';
import { BtnSubmit  } from '../btnSubmitControl';
import { StyleContainerShowcase } from './style'
import { MdDeleteForever } from 'react-icons/md';
import { ContainerFormUpdateTech } from '../techFormUpdate';

export const ContainerTechShowcase = () =>{

    const { techList, setEditinTech, techDelete } = useContext(TechContext)

    return(
        <StyleContainerShowcase>
            <header>
                <h3>Tecnologias</h3>
                <BtnSubmit typeStyle='dark' text='+'/>

            </header>

            <ul>
                {techList.length == 0 ? <h2>Voce não cadastrou nenhuma tecnologia</h2> :
                    techList.map((tech) =>{
                        return(
                            <li key={tech.id}  onClick={() =>  setEditinTech(tech)}>
                                <h3>{tech.title}</h3>
                                <p>{tech.status}</p>
                                {/* <div>
                                    < MdDeleteForever onClick={() => techDelete(tech.id)}/>
                                </div> */}
                            </li>
                        )
                    }) 
                }

            </ul>
        </StyleContainerShowcase>
    )
}

