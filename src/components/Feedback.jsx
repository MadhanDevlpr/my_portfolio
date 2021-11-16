import React from 'react'

function Feedback() {
    return (
        <div className="feedbk" id="feedback">
            <h1 data-aos="zoom-out" data-aos-delay="500" data-aos-duration="1000" data-aos-once="true">Feedback</h1><br />
            <p data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000" data-aos-once="true">This feedback form works with formcarry.</p>
            <form data-aos="zoom-out" data-aos-delay="500" data-aos-duration="1000" data-aos-once="true" action="https://formcarry.com/s/mPUDUSPBIbi" method="POST" acceptCharset="UTF-8"><br />
            <div className="wrap-input">
                <input required="" placeholder="Email" type="email" name="Email" /><br />
                <input required="" placeholder="Name" type="text" name="Name" /><br /><br />
            </div><br /><br />
            <textarea required="" className="feedf" placeholder="Feedback" type="text" name="Feedback" spellCheck="true" min-height="400px" width="auto"></textarea><br /><br />
            <button className="buttonn" type="submit" className="btn btn-success btn-lg">Send</button><br /><br />
            </form>
        </div>
    )
}

export default Feedback
