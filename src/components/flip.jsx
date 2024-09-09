import * as React from 'react';
import { useState } from 'react';
import './card.component.css';

const Flip = () => {
    const [isFlipped1, setIsFlipped1] = useState(true);
    const [class1, setClass1] = useState("e-card e-business e-flip");
   
    const flip1 = () => {
        setIsFlipped1(!isFlipped1);
        setClass1(isFlipped1 ? 'e-card e-business e-flip e-flipped' : 'e-card e-business e-flip');
    };
   
    return (<div className='control-pane'>
            <div className='control-section card-control-section flip_card_layout'>
                <div className="e-card-resize-container">
                    <div className='row'>
                        <div className="row card-layout">
                            <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                                <div className={class1} id="card_flip" onClick={flip1} title="Click to flip the Card">
                                    <div className="e-card-header e-front">
                                        <div className="e-card-header-caption">
                                            <div className="e-card-header-title">Mayumi Ohno</div>
                                            <div className="e-card-sub-title">Marketing Representative</div>
                                        </div>
                                    </div>
                                    <div className="e-card-actions e-front">
                                        <button className="e-card-btn">
                                            <div className="e-email e-card-btn-txt">mayum@mail.com</div>
                                        </button>
                                        <button className="e-card-btn">
                                            <div className="e-email e-card-btn-txt">011-232-221</div>
                                        </button>
                                        <button className="e-card-btn">
                                            <div className="e-email e-card-btn-txt">www.mayum.com</div>
                                        </button>
                                    </div>
                                    <div className="e-card-header e-back">
                                        <div className="e-card-header-caption">
                                            <div className="e-card-header-title">Address</div>
                                            <div className="e-card-sub-title">
                                                P.O. Box 78934<br /> 
                                                New Orleans<br />
                                                Los Angeles<br /> 
                                                Postal Code: 70117<br /> 
                                                USA
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                  
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};
export default Flip;