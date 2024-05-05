// import React, { useState } from 'react'
import "./puja.css"
import PujaCards from './cards'
import image1 from "../Aasets/hometwo/homeT1.jpg"
import image2 from "../Aasets/hometwo/homeT2.jpg"
import image3 from "../Aasets/hometwo/homeT3.jpg"
import image4 from "../Aasets/hometwo/homeT4.jpg"


const puja = () => {
  
  return (
    <div className=''>
      <section className="">
        <div className="">
            <p className="">
"जागेश्वर धाम में ये पूजाएं उपलब्ध हैं, पूजा कराने के लिए बुक करें।"</p>
        </div>
      </section>
      <div className="">
        <section className="section">
            <div className="columns ">
                <div className="">
                    <PujaCards title="अष्टाध्यायी रुद्री पाठ" price="₹   1100" image={image1}/>
                </div>
                <div className="">
                    <PujaCards title="कालसर्प योग अंक" price="₹   1100" image={image2}/>
                </div>
                <div className="">
                    <PujaCards title="कालसर्प योग पूर्ण" price="₹   5100" image={image3}/>
                </div>
                <div className="">
                    <PujaCards title="लक्ष्मी पाठ-108" price="₹   5100" image={image4}/>
                </div>
                <div className="">
                    <PujaCards title="महामृत्युंजय जाप शनि/राहु/नवगृह-11000" price="₹   2500" image={image2}/>
                </div>
                <div className="">
                    <PujaCards title="महामृत्युंजय जाप शनि/राहु/नवगृह-125000" price="₹   25000" image={image2}/>
                </div>
                <div className="">
                    <PujaCards title="महामृत्युंजय जाप शनि/राहु/नवगृह-23000" price="₹   5100" image={image2}/>
                </div>
                <div className="">
                    <PujaCards title="महामृत्युंजय जाप शनि/राहु/नवगृह-51000" price="₹   11000" image={image2}/>
                </div>
                <div className="">
                    <PujaCards title="पार्थिव पूजा अस्तोतार" price="₹   550" image={image2}/>
                </div>
                <div className="">
                    <PujaCards title="रुद्राभिषेक (सामग्री को छोड़कर)" price="₹   500" image={image2}/>
                </div>
                <div className="">
                    <PujaCards title="संकल्प पाठ" price="₹   101" image={image2}/>
                </div>
                <div className="">
                    <PujaCards title="संतान गोपाल जाप-125000" price="₹   25000" image={image2}/>
                </div>
                <div className="">
                    <PujaCards title="संतान गोपाल जाप-1500" price="₹   1100" image={image2}/>
                </div>
                <div className="">
                    <PujaCards title="श्री सूक्त लक्ष्मी पाठ-11" price="₹   500" image={image2}/>
                </div>
                <div className="">
                    <PujaCards title="श्री सूक्त लक्ष्मी पाठ-51" price="₹   2100" image={image2}/>
                </div>
            </div>
        </section>
      </div>
    </div>
  )
}

export default puja
