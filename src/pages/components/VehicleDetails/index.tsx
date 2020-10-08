import React from 'react'
import { RiPencilFill } from 'react-icons/ri'

import './styles.css'

export default function VehicleDetails(){
    return(
        <div className="vehicleDetails">
            <p className="name">Palio</p>

            <div className="informations">
                <div className="brand">
                    <h3>Marca</h3>
                    <p>FIAT</p>
                </div>
                <div className="year">
                    <h3>Ano</h3>
                    <p>2016</p>
                </div>
            </div>

            <div className="description">
                <p>
                    O pálio é um carro ..........
                </p> 
            </div>

            <footer>
                <button className="edit">
                    <RiPencilFill/>
                    <p>EDITAR</p>
                </button>
                <div className="sellIcon">

                </div>
            </footer>
        </div>

    )
}