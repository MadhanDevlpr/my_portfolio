import React from 'react'

function Feedback() {
    return (
        <section className="feedbk" id="feedback">
            <h1>Greetings!</h1><br />
            <p>Always open for ideas.</p>
            <form action="https://formsubmit.co/pmaadithya09@gmail.com" method="POST" acceptCharset="UTF-8"><br />
            <div className="wrap-input">
                <input type="hidden" name="_next" value="https://madhanaadithya.studio"/>
                <input type="hidden" name="_autoresponse" value="Hello, your message successfully reached!, forgot who is this? It's Madhan Aadithya."/>
                <input required placeholder="Email" type="email" name="Email" /><br />
                <input required placeholder="Name" type="text" name="Name" /><br /><br />
            </div><br /><br />
            <textarea required className="feedf" placeholder="Feedback" type="text" name="Feedback" spellCheck="true" min-height="400px" width="auto"></textarea><br /><br />
            <button type="submit" className="btn btn-light buttonn">Send</button><br /><br />
            </form>
        </section>
    )
}

export default Feedback
