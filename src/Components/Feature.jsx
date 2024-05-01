import React from 'react';
import Featurebox from './Featurebox';
import fimage1 from '../Img/1.svg';
import fimage2 from '../Img/2.svg';
import fimage3 from '../Img/3.svg';
import fimage4 from '../Img/4.svg';



function Feature() {
  return (
    <div id='features'>
        <h1>Feature</h1>
        <div className="a-container">
            <Featurebox image ={fimage1} title ="WeightLifting"/>    
            <Featurebox image ={fimage2} title ="WeightLifting"/>    
            <Featurebox image ={fimage3} title ="WeightLifting"/>    
            <Featurebox image ={fimage4} title ="WeightLifting"/>    
        </div>    
    </div>
  )
}

export default Feature