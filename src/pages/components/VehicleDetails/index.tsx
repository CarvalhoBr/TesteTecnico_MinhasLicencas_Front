import React from 'react'
import { RiPencilFill } from 'react-icons/ri'
import { BsFillTagFill } from 'react-icons/bs'

import './styles.css'

export default function VehicleDetails({details, openModal}: any){
    return(
        <div className={"vehicleDetails " + (details===-1? "noData" : "data")}>

            <div className="contentWrapper">
                <p className="name">{details.veiculo}</p>
                <div className="informations">
                    <div className="brand">
                        <h3>Marca</h3>
                        <p>{details.marca}</p>
                    </div>
                    <div className="year">
                        <h3>Ano</h3>
                        <p>{details.ano}</p>
                    </div>
                </div>

                <div className="description">
                    <p>
                        {details.descricao}
                    </p> 
                </div>
            </div>

                

            <footer>
                <button className="edit" onClick={() => openModal()}>
                    <RiPencilFill/>
                    <p>EDITAR</p>
                </button>
                <div className={"sellIcon " + (details.vendido? "sold": "")} >
                    <BsFillTagFill size="4em"/>
                </div>
            </footer>
        </div>

    )
}