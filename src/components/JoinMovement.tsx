import React from 'react';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import ContactForm from './ContactForm';
import movementImage from "../assets/images/jb-view.jpeg";
import contactImage from '../assets/images/jbroberg-contact.jpg'

export default function JoinMovement() {
    const [displayMovement, setMovementDisplay] = useState(false);

    return (
        <React.Fragment>
            <div className="join-movement">
                <img alt="image" src={movementImage} />

                <div className="content">
                    <p>
                        Join the movement to end the silence of abuse.
                    </p>
                    <button type="button" className="join-btn" onClick={() => setMovementDisplay(!displayMovement)}>Join</button>
                </div>
            </div>


            <Dialog visible={displayMovement} style={{ width: 'auto' }} onHide={() => setMovementDisplay(!displayMovement)}>
                <ContactForm name={"join_movement"} />
            </Dialog>
        </React.Fragment>
    );
}