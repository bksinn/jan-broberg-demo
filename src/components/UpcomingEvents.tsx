import React from 'react';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import ContactForm from './ContactForm';
import movementImage from "../assets/images/jb-view.jpeg";
import contactImage from '../assets/images/jbroberg-contact.jpg'

export default function UpcomingEvents() {
    const [speakingEngagements, setSEDisplay] = useState(false);
    const [publicAppearances, setPADisplay] = useState(false);
    const [futureDevelopments, setFDDisplay] = useState(false);

    return(
        <React.Fragment>
            <div className="join">
                <div className="statements">
                    <p>
                        Become part of the movement to expose and end child sexual abuse!
                    </p>
                    <p>
                        Enter your email to be updated on <a onClick={() => setSEDisplay(!speakingEngagements)}>Speaking Events</a>, <a onClick={() => setPADisplay(!publicAppearances)}>Public Appearances</a> and <a onClick={() => setFDDisplay(!futureDevelopments)}>Future Developments</a>.
                    </p>
                </div>
                <img src={contactImage} />
            </div>

            <Dialog visible={speakingEngagements} style={{ width: 'auto' }} onHide={() => setSEDisplay(!speakingEngagements)}>
                <ContactForm name={"speaking_engagements"} />
            </Dialog>
            <Dialog visible={publicAppearances} style={{ width: 'auto' }} onHide={() => setPADisplay(!publicAppearances)}>
                <ContactForm name={"public_appearances"} />
            </Dialog>
            <Dialog visible={futureDevelopments} style={{ width: 'auto' }} onHide={() => setFDDisplay(!futureDevelopments)}>
                <ContactForm name={"future_developments"} />
            </Dialog>
        </React.Fragment>
        
    );
}
