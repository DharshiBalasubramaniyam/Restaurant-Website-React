import React from 'react';
import './Specials.css';
import ItemCard from './ItemCard';
import items from './SpecialsList';

function Specials() {
    
    const addItems =  items.map((item) => {
                    return <ItemCard item={item}/>;
                });
    
    
    return(
        <>
            <section id='specials'>
                <h1>Our Specials</h1>
                <div className='card-container'>
                    {addItems}
                </div>
            </section>
        </>
    );
}

export default Specials;