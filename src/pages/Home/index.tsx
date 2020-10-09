import React, { useState, useEffect } from 'react'
import api from '../../services/api'

import Car from '../../types/car'

import Header from '../components/Header'
import VehicleCard from '../components/VehicleCard'
import VehicleDetails from '../components/VehicleDetails'

import { BsPlusCircleFill } from 'react-icons/bs'

import './styles.css'
import Modal from '../components/Modal'

export default function Home() {
    
    const [cars, setCars] = useState<Car[]>([])
    const [selectedCard, setSelectedCard] = useState(1)
    const [show, setShow] = useState(false)
    
    function isSelected(id: number) {
        return selectedCard === id
    }

    function handleCardClick(id:number){
        setSelectedCard(id)
    }

    function getDetails(selectedCard: number){
        const index = cars.findIndex((car) => car.id === selectedCard)

        return (index === -1? index: cars[index])
    }

    function openModal(){
        setShow(true)
    }

    function hideModal(){
        setShow(false)
    }

    useEffect(() => {
        api.get('/veiculos')
            .then(response => setCars(response.data))
    }, [])
    
    
    return(
        <>
        <div className="container" >


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

                    {
                        cars.map(car => (
                            <div className="cardWrapper" onClick={()=>{handleCardClick(car.id)}} key={car.id}>
                                <VehicleCard 
                                    car={car} 
                                    selected={isSelected(car.id)? "selected" : "notSelected"}
                                />
                            </div>
                            
                        ))
                    }
                    
                </div>

                <div className="details">
                    <p className="vehicleDetailsTitle">Detalhes</p>
                    <VehicleDetails details={getDetails(selectedCard)} openModal={() => openModal()}/>
                </div>

            </main>


        </div>

        <Modal show={show} closeModal={() => hideModal()}/>
        </>
    )
}