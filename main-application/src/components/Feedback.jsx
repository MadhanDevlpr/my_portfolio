import React from 'react'

function Feedback() {
    return (
        <div className="feedbk" id="feedback">
            <form action="https://formcarry.com/s/mPUDUSPBIbi" method="POST" acceptCharset="UTF-8"><br />
            <h1 data-aos="zoom-out" data-aos-delay="500" data-aos-duration="1000" data-aos-once="true">Feedback</h1><br />
            <div className="wrap-input">
                <input data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000" data-aos-once="true" required="" placeholder="Email" type="email" name="Email" /><br />
                <input data-aos="zoom-out" data-aos-delay="800" data-aos-duration="1000" data-aos-once="true" required="" placeholder="Name" type="text" name="Name" /><br /><br />
            </div><br /><br />
            <textarea data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="1000" data-aos-once="true" required="" className="feedf" placeholder="Feedback" type="text" name="Feedback" spellCheck="true" min-height="400px" width="auto"></textarea><br /><br />
            <input data-aos="zoom-out" data-aos-delay="1100" data-aos-duration="1000" data-aos-once="true" className="buttonn" placeholder="Send to me" type="submit" value="SEND" /><br /><br />
            </form>
        </div>
    )
}

export default Feedback
