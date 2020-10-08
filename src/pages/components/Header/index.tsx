import React from 'react'
import './styles.css'
import { BsDroplet } from 'react-icons/bs'

export default function Header(){
    return(
        <div className="header">
            <div className="logoWrapper">
                <div className="logo">
                    <BsDroplet size="4em"/>
                    <p>FULLSTACK</p>
                </div>
            </div>

            <div className="searchBar">
                <input type="text" className="search" placeholder="Busca por um veículo"/>
            </div>
        </div>
    )
}