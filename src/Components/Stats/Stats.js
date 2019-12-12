import React from 'react'
import Card from './Card/Card';
import './Stats.scss';

const Stats = () => {
    return (
        <div id='stats' className="card-background">
            <div className = 'card-container'>

                <Card
                    displayNumber = '10'
                    cardTitle = 'Oddanych worków'
                    cardDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veniam quaerat facere quidem sapiente asperiores exercitationem sequi iste quam veritatis!'
                />
                <Card
                    displayNumber = '5'
                    cardTitle = 'Wspartych organizacji'
                    cardDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veniam quaerat facere quidem sapiente asperiores exercitationem sequi iste quam veritatis!'
                />
                <Card
                    displayNumber = '7'
                    cardTitle = 'Zorganizowanych zbiórek'
                    cardDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veniam quaerat facere quidem sapiente asperiores exercitationem sequi iste quam veritatis!'
                />

            </div>
        </div>
    )
}

export default Stats;