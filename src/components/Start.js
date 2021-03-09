import React from 'react';

const Start = ({ onQuizStart }) => {
    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <div className="content">
                        <h1>Are you ready to attempt the quiz?</h1>
                        <p>Best of Luck!</p>
                        <button className="button is-info is-medium" onClick={onQuizStart} >Start</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Start;