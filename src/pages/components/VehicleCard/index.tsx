import React from 'react'

import { BsFillTagFill } from 'react-icons/bs'

import './styles.css'

export default function VehicleCard({car, selected}: any){
    
    return(
        <div className={"vehicleCard " + selected}>
            <div className="information">
                <p className="brand">{car.marca}</p>
                <p className="name">{car.veiculo}</p>
                <p className="year">{car.ano}</p>
            </div>
                
            <BsFillTagFill size="3em" className={"sellIcon " + (car.vendido? "sold": "")}/>
        </div>
    )
}