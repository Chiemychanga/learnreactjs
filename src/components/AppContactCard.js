import React from "react"
import ContactCard from "./ContactCard"


function AppContactCard() {
    return (
        <div className="contacts">
            <ContactCard
                name="Rawan Abdo"
                imgUrl="https://scontent-sjc3-1.cdninstagram.com/vp/8fd094569e07cd7507828abdac5875ba/5D40CFB9/t51.2885-19/s320x320/51221675_1129760180481734_6934090507433803776_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com"
                phone="(503)111-1111"
                email="rawanabdo@gmail.com"
            />

            <ContactCard
                name="Rajeev Singh"
                imgUrl="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/34483594_10155814841918893_406090021125226496_n.jpg?_nc_cat=111&_nc_ht=scontent-sea1-1.xx&oh=368fa8a78ba5e211b594e65f6db91f91&oe=5D0B4208"
                phone="(503)222-2222"
                email="rajeev@gmail.com"
            />

            <ContactCard
                name="Larry Chiem"
                imgUrl="http://placekitten.com/300/200"
                phone="(503)333-3333"
                email="larry@gmail.com"
            />
        </div>
    )
}
export default AppContactCard
