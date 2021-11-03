import React from 'react';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import ContactForm from './ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faCommentAlt, faBook } from '@fortawesome/free-solid-svg-icons';
import { factory } from 'typescript';


let items = [
    {label: 'New', icon: 'pi pi-fw pi-plus'},
    {label: 'Delete', icon: 'pi pi-fw pi-trash'}
];


export default function Nav () {
    
var onClick = () => {
    console.log("CLICK");
    
}
const onHide = () => {}
const contactName:string = "contact";
    
const [displayContactForm, setCFDisplay] = useState(false);
const [displayBookReservation, setBRDisplay] = useState(false);
const [displayMovement, setMovementDisplay] = useState(false);

    return(
        <nav id="#nav" className="nav">
            <div className="logo"></div>
            <hr />
            <Dialog visible={displayContactForm} style={{ width: 'auto' }} onHide={() => setCFDisplay(!displayContactForm)}>
                <ContactForm name={"contact"} />
            </Dialog>
            <Dialog visible={displayMovement} style={{ width: 'auto' }} onHide={() => setMovementDisplay(!displayMovement)}>
                <ContactForm name={"join_movement"} />
            </Dialog>
            <Dialog visible={displayBookReservation} style={{ width: 'auto' }} onHide={() => setBRDisplay(!displayBookReservation)}>
                <ContactForm name={"reserve_book"} />
            </Dialog>

            <div className="nav-links">
                <a onClick={() => setCFDisplay(!displayContactForm)}>
                    <FontAwesomeIcon icon={faCommentAlt} /> Contact Me
                </a>
                <a onClick={() => setMovementDisplay(!displayMovement)}>
                    <FontAwesomeIcon icon={faUserFriends} /> Join the Movement
                    </a>
                <a onClick={() => setBRDisplay(!displayBookReservation)}>
                    <FontAwesomeIcon icon={faBook} />Reserve Book
                </a>
            </div>
        </nav>
    );
};