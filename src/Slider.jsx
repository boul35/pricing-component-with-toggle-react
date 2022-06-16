import React from 'react'
import { ToggleSlider }  from "react-toggle-slider";
import { useState } from "react";

const Slider = ({}) => {
    const [active, setActive] = useState(false);
  return (
    
    <div className='Card'>
    <ToggleSlider onToggle={state => setActive(state)}/>
    Slider <h2>sdaasdfds</h2>isfewfwe{active ? "active" : "inactive"}
</div>
  )
}

export default Slider