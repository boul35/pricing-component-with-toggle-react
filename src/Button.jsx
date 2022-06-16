import React from 'react'
import { useState } from "react";

const Button = ({className}) => {
    const [isHovered, setIsHovered] = useState(false);
     // On change l’état de isHovered à true
 const onMouseEnter = () => setIsHovered(true);
 // On change l’état de isHovered à false
 const onMouseLeave = () => setIsHovered(false);
 className = isHovered ? "Yes" : "No";
 return (
    
    <div
    className={className}
   
   onMouseEnter={onMouseEnter}
   
   onMouseLeave={onMouseLeave}><button className='btn-learn'>Learn More</button></div>
    );
   }

   

export default Button