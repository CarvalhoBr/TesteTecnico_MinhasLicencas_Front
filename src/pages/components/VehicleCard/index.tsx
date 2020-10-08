import React from 'react'

import { BsFillTagFill } from 'react-icons/bs'

import './styles.css'

export default function VehicleCard(){
    return(
        <div className="vehicleCard">
            <div className="information">
                <p className="brand">FIAT</p>
                <p className="name">Palio</p>
                <p className="year">2016</p>
            </div>
            <BsFillTagFill size="3em" className="sellIcon"/>
        </div>
    )
}