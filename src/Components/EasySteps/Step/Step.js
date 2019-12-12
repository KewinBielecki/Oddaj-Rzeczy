import React from 'react';
import './Step.scss';


const Step = (props) => {
    let { icon, heading, content } = props;
    return (
        <div>
            <div className='step'>
                <img className='stepIcon' src={icon} alt={'stepIcon'} />
                <h3 className='heading'>{heading}</h3>
                <div className='line'></div>
                <span className='content'>{content}</span>
            </div>
        </div>
    );
}


export default Step;