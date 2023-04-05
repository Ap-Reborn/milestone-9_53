import { list } from 'postcss';
import React from 'react';
import Feture from '../Feture/Feture';

const PriceCard = ({price}) => {

    // console.log(price)
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4 flex flex-col'>
            <h2 className='text-center'><span className='text-purple-700 text-5xl
            font-extrabold'>{price.prices}</span> <span className='text-2xl text-white'>/mon</span></h2>
                <h5 className='text-center'>{price.name}</h5>
                <p className='text-white font-bold underline'>features:</p>
                {
                   price.features.map((feature,idx) => <Feture
                   key={idx}
                   feature={feature}
                
                   ></Feture>)
                }
                <button className='w-full mt-auto hover:bg-green-700 bg-green-500 rounded-md text-white font bold'>Buy now</button>
            
        </div>
    );
};

export default PriceCard;