import React from 'react'
import "../css/CompletedModal.css"
import congratulations from "../assets/congratulations.gif"
const CompletedModal = (props) => {
    const { open } = props;
    if (!open) return null;
    return (
        <>
            <div className="overlay">
                <div className="modalContainer">
                    <img src={congratulations} alt="" />
                    <div className="modalRight">
                        <p className="closeBtn"></p>
                        <div className="content">
                            <p>Do you want a </p>
                            <h1>$20 CREDIT</h1>
                            <p>for your first trade?</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompletedModal