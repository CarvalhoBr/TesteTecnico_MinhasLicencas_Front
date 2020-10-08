import React from 'react'
import Header from '../components/Header'
import VehicleCard from '../components/VehicleCard'
import VehicleDetails from '../components/VehicleDetails'

import { BsPlusCircleFill } from 'react-icons/bs'

import './styles.css'

export default function Home() {
    return(

        <div className="container">
            <header className="header">
                <Header/>
            </header>

            <header className="title">
                <p>VEÍCULO</p>
                <div className="addButton">
                    <BsPlusCircleFill size="2em"/>
                </div>
            </header>

            <main className="content">
                
                <div className="list">
                    <p className="vehicleList">Lista de veículos</p>

                    <VehicleCard/>
                    <VehicleCard/>
                    <VehicleCard/>
                </div>

                <div className="details">
                    <p className="vehicleDetailsTitle">Detalhes</p>
                    <VehicleDetails/>
                </div>

            </main>
        </div>
    )
}