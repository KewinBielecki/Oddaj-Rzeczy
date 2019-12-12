import React from 'react';
import './CallAction.scss';

const CallAction = () => {

    return (
        <div className="page-call-section">
        <div className="page-call-call">
        <h2>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h2>
    </div>
    <div className="page-call-decoration"></div>
        <div className="page-call-buttons">
        <button className="btn-donate">Oddaj <br/> rzeczy</button>
        <button className="btn-organize">Zorganizuj <br /> zbiórkę</button>
        </div>
        </div>
);

}

export default CallAction;
