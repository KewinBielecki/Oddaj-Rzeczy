import React from 'react';
import './Card.scss';

const Card = (props) => {
    let { displayNumber, cardTitle, cardDescription } = props;
    return (
        <div className = 'page-stats-card'>
            <div className="card-number">{displayNumber}</div>
            <h3 className="card-title">{cardTitle}</h3>
            <p className="card-description">{cardDescription}</p>
        </div>
    )
}

export default Card;