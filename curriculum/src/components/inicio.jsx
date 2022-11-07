import React from "react";
import "./inicio.css";

import Perfil from "../images/Fotoperfil.png";
import Linkedn from "../images/linkdn.png";
import GitHub from "../images/github.png";
import Mail from "../images/mail.png";

function Inicio()
{
    return(
        <>
            {/* <img src="../images/Vector.png" alt="Logo"></img> */}
            <div>
                <div className="div1">
                    {/* <h1>HELLO</h1> */}
                    <img src={Perfil} alt="Foto"></img>
                    <div>
                        <h1>Andrea Yela González</h1>
                        <h2>Idiomas</h2>
                        <ul>
                            <li className="p">Español: idioma natal</li>
                            <li className="p">Ingles: Nivel Avanzado con certificado TOEFL iBT</li>
                            <li className="p">Alemán: Certificado B1 con F+U Academy of Languages.</li>
                        </ul>
                        <h2>Historial académico:</h2>
                        <p className="p">Instituto Tecnológico y de Estudios Superiores de Monterrey</p>
                        <p className="p">2020 - a la actualidad</p>
                        <p className="p">Ingeniería en Tecnologías Computacionales</p>
                    </div>
                    <div className="div2">
                        <a href="https://www.linkedin.com/in/andrea-yela-gonz%C3%A1lez-7313071ba/">
                          <img  style={{ width: 60, height: 60}} src={Linkedn} alt="Link"></img>  
                        </a>
                        <a href="https://github.com/AnYelg">
                           <img  style={{ width: 60, height: 60}} src={GitHub} alt="Git"></img> 
                        </a>
                        <a href = "mailto: anyego@hotmail.com">
                            <img  style={{ width: 70, height: 60}} src={Mail} alt="Mail"></img> 
                        </a>
                    
                    </div>
                </div>
                
            </div>
            
         </>
       
     );      
}

export default Inicio;