import React from 'react';
import './AboutUs.scss';
import AboutUsImg from './Images/about.jpg';
import signature from './Images/signature.png';

const AboutUs = () => {
    return (
        <section id='aboutUs' className="AboutUsSection_cnt">
            <div className="AboutUsInfo_cnt">
                <h1>O nas</h1>
                <div className='page-call-decoration'></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a volutpat quam. Suspendisse in accumsan enim, id lobortis diam. Cras eros lorem, mollis eget velit dignissim, ullamcorper lacinia lacus. Nulla est sem, rutrum at lectus a, mollis eleifend urna. Mauris eu suscipit augue. Fusce vitae felis sed sem varius tempor.
                </p>
                <div className="Signature_box">
                    <figure>
                        <img className="Signature_img" src={signature} alt="signature"></img>
                    </figure>
                </div>
            </div>
            <div className="AboutUsImg_cnt">
                <img className="AboutUs_img" src={AboutUsImg} alt="People faces gathered in circle"></img>
            </div>
        </section>
    )
}




export default AboutUs;