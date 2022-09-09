import React from 'react'

function Feedback() {
    return (
        <section className="feedbk" id="feedback">
            <h1>What's new?</h1><br />
            <p>Tell me what you've got, to improve or to correct or to add or something else.</p>
            <form action="https://formsubmit.co/pmaadithya09@gmail.com" method="POST" acceptCharset="UTF-8"><br />
            <div className="wrap-input">
                <input type="hidden" name="_next" value="https://madhanaadithya.studio"/>
                <div className="wrapper">
                    <input required placeholder="Email" type="email" name="Email" /><br />
                    <input required placeholder="Name" type="text" name="Name" /><br /><br />
                    <input type="hidden" name="_autoresponse" value="Hello, your message successfully reached!, forgot who is this? It's Madhan Aadithya."/>
                </div>
                <textarea required className="feedf" placeholder="Message" type="text" name="Message" spellCheck="true"></textarea>
            </div><br /><br />
            <br /><br />
            <button type="submit" className="btn btn-light buttonn">Send</button><br /><br />
            </form>
        </section>
    )
}

export default Feedback
