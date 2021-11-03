import React from 'react';
import contactImage from '../assets/images/jbroberg-contact.jpg'

interface IContactProps {
    name: string;
}

export default function ContactForm(props: IContactProps) {
    const rows: number = 10;
    const cols: number = 50;

    const title = ():string => {
        if (props.name == "contact") return "Reach out to me";
        if (props.name == "reserve_book") return "Reserve your book today";
        if (props.name == "join_movement") return "Join the movement"
        if (props.name == "speaking_engagements") return "Next speaking engagements"
        if (props.name == "public_appearances") return "My next public appearance"
        if (props.name == "future_developments") return "Future developments"

        return "Contact me";
    };

    const btnText = ():string => {
        if (props.name == "contact") return "Reach out";
        if (props.name == "reserve_book") return "Reserve";
        if (props.name == "join_movement") return "Join"
        // if (props.name == "speaking_engagements") return "Get Notified"
        // if (props.name == "public_appearances") return "Get Notified"
        // if (props.name == "future_developments") return "Get Notified"

        return "Get Notified";
    }

    return(
        <React.Fragment>
            <form id="contact-form">
                <div className="container">
                    <h3>{title()}</h3>
                    <div className="form-group">
                        <label>Your name</label>
                        <input type="text" placeholder="Ex. Jane Smitherines" />
                    </div>
                    <div className="form-group">
                        <label>Your email</label>
                        <input type="text" placeholder="janeMyDoe@gmail.com" />
                    </div>
                    {props.name == "contact" && 
                     <div className="form-group">
                        <label>WTF do you have to say:</label>
                        <textarea rows={rows} cols={cols} name="comment" form="usrform" defaultValue="Go ahead, I can't wait...">
                            
                        </textarea>
                    </div>
                    }
                   
                </div>
                
                <button className="btn" type="button">{btnText()}</button>
            </form>
        </React.Fragment>
    );
}