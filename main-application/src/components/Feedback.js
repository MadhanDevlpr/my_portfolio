import React from 'react'

function Feedback() {
    return (
        <div class="feedbk" id="feedback">
            <form action="https://formcarry.com/s/mPUDUSPBIbi" method="POST" accept-charset="UTF-8"><br />
            <h1 data-aos="zoom-out" data-aos-delay="500" data-aos-duration="1000" data-aos-once="true">Feedback</h1><br />
            <input data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000" data-aos-once="true" required="" placeholder="Email" type="email" name="Email" />
            <input data-aos="zoom-out" data-aos-delay="800" data-aos-duration="1000" data-aos-once="true" required="" placeholder="Name" type="text" name="Name" /><br /><br />
            <textarea data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="1000" data-aos-once="true" required="" class="feedf" placeholder="Feedback" type="text" name="Feedback" spellcheck="true" min-height="400px" width="auto"></textarea><br /><br />
            <input data-aos="zoom-out" data-aos-delay="1100" data-aos-duration="1000" data-aos-once="true" class="buttonn" placeholder="Send to me" type="submit" value="SEND" /><br /><br />
            </form>
        </div>
    )
}

export default Feedback
