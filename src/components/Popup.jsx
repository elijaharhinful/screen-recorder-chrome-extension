import React, { useState } from 'react';
import HelpMeOutLogo from './assets/images/logos/HelpMeOutLogo.svg';
import Settings from './assets/images/icons/setting.svg';
import Close from './assets/images/icons/close-circle.svg';
import Microphone from './assets/images/icons/microphone.svg';
import Camera from './assets/images/icons/video-camera.svg';
import Monitor from './assets/images/icons/monitor.svg';
import Copy from './assets/images/icons/copy.svg';

function Popup() {
    const [isOpen, setIsOpen] = useState(true);
    const [checked, setChecked] = useState({ audio: false, camera: false });

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleToggle = (inputName) => {
        setChecked(prevState => ({ ...prevState, [inputName]: !prevState[inputName] }));
    };

    return (
        isOpen && (
            <div className="container">
                <div className="home__head">
                    <div className="home__head--header">
                        <div className="logo">
                            <img src={HelpMeOutLogo} alt="HelpMeOut" className="logo" />
                            <span>HelpMeOut</span>
                        </div>
                        <div className='settings'>
                            <img src={Settings} alt="Settings" className='settings-icon' />
                            <img src={Close} alt="Close" className='close' onClick={handleClose} />
                        </div>
                    </div>
                    <div className="home__head--description">
                        <p>This extension helps you record and share help videos with ease.</p>
                    </div>
                </div>
                <div className="home__body">
                    <div className="home__body--icons">
                        <div className='full_screen'>
                            <img src={Monitor} alt="Full Screen" />
                            <span>Full screen</span>
                        </div>
                        <div className='current'>
                            <img src={Copy} alt="Current Tab" />
                            <span>Current Tab</span>
                        </div>
                    </div>
                    <div className="camera">
                        <div className="camera--icon">
                            <img src={Camera} alt="camera" />
                            <span>Camera</span>
                        </div>
                        <div className="toggle-slider">
                            <input
                                type="checkbox"
                                id="cameraToggle"
                                checked={checked.camera}
                                onChange={() => handleToggle('camera')}
                            />
                            <label htmlFor="cameraToggle" className="slider" />
                        </div>
                    </div>
                    <div className="audio">
                        <div className="audio--icon">
                            <img src={Microphone} alt="microphone" />
                            <span>Audio</span>
                        </div>
                        <div className="toggle-slider">
                            <input
                                type="checkbox"
                                id="audioToggle"
                                checked={checked.audio}
                                onChange={() => handleToggle('audio')}
                            />
                            <label htmlFor="audioToggle" className="slider" />
                        </div>
                    </div>
                    <a href="#" className='button button--large'>Start Recording</a>
                </div>
            </div>
        )
    );
}

export default Popup;
