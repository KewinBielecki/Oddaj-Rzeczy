import React from 'react';
import './EasySteps.scss';
import Step from './Step/Step';
import icon from './Images/x.jpg';
import icon1 from './Images/y.jpg';
import icon2 from './Images/z.jpg';
import icon3 from './Images/w.jpg';

const EasySteps = () => {
    return (
        <div id='steps' className='step-background'>
            <h2 className='steps-title'>Wystarczą 4 proste kroki</h2>
            <div className='page-call-decoration'></div>
            <div className='steps-background'>

                <Step
                    icon = {icon}
                    heading = 'Wybierz rzeczy'
                    content = 'ubrania, zabawki, sprzęt i inne'
                />
                 <Step
                icon = {icon1}
                heading = 'Spakuj je'
                content = 'skorzystaj z worków na śmieci'
                 />
                 <Step
                icon = {icon2}
                heading = 'Zdecyduj komu chcesz pomóc'
                content = 'Wybierz zaufane miejsce'
                />
                <Step
                icon = {icon3}
                heading = 'Zamów kuriera'
                content = 'Kurier przyjedzie w dogodnym terminie'
                />

            </div>
            <button className='btn-create-account'>Załóż konto</button>
        </div>
    );
}


export default EasySteps;