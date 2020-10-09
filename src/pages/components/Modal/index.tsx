import React, { useState } from 'react'

import { Switch, withStyles } from '@material-ui/core'

import './styles.css'

export default function Modal({closeModal, show}: any){
    
    const showHide = show? "modal display-block" : "modal display-none"
    
    const ColorSwitch = withStyles({
        switchBase: {
          color: "#67a88e",
          '&$checked': {
            color: "#83d6b5",
          },
          '&$checked + $track': {
            backgroundColor: "#83d6b5",
          },
        },
        checked: {},
        track: {},
    })(Switch);


    const [name, setName] = useState<string>()
    const [brand, setBrand] = useState<string>()
    const [year, setYear] = useState<number>()
    const [sold, setSold] = useState<boolean>(false)
    const [description, setDescription] = useState<string>()


    return(
        <div className={showHide}>
        
            <div className="modalWrapper">
            
                <div className="actionTitle">
                    Editar Carro
                </div>
                
                <div className="inputGroup">
                    
                    <div className="vehicle">
                        <h3>Veículo</h3>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            className="modalInput"
                        />
                    </div>
                
                    <div className="brand">
                        <h3>Marca</h3>
                        <input 
                            type="text" 
                            value={brand} 
                            onChange={(e) => 
                            setBrand(e.target.value)} 
                            className="modalInput"
                        />
                    </div>
                
                </div>
                
                <div className="inputGroup">
                    
                    <div className="year">
                        <h3>Ano</h3>
                        <input 
                            type="text" 
                            value={year} 
                            onChange={(e) => setYear(Number(e.target.value))} 
                            className="modalInput"
                        />
                    </div>
                    
                    <div className="isSold">
                        <ColorSwitch 
                            checked={sold} 
                            onChange={(e) => setSold(e.target.checked)}
                        />
                        <h3>Vendido</h3>
                    </div>
                
                </div>
                
                <div className="inputGroup">
                    <div className="description">
                        <h3>Descrição</h3>
                        <textarea  
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                            className="modalInput"
                        />
                    </div>
                    
                </div>
                
                <div className="actions">
                    <button className="close" onClick={() => closeModal()}>
                        Fechar
                    </button>
                    <button className="do">
                        Editar
                    </button>
                </div>
            
            </div>
        </div>
        )
    }