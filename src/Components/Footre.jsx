import '../App.css'

export default function Footre(){
    const About = ['About Us','Blog','Careers','Jobs','In Press','Gallery'];
    const Support = ['Contact Us','Online Chat','WhatsApp','Telegram','Ticketing','Call center'];
    const FAQ = ['Account','Booking','Payments','Returns','Privacy Policy','Terms & Condition'];
    return(
        <div className='Footre'>
            <ul className='About'>
                <h3>About</h3>
                {About.map((n)=>{return(
                    <li>{n}</li>
                )})}
            </ul>
            <ul className='Support'>
                <h3>Support</h3>
                {Support.map((n)=>{return(
                    <li>{n}</li>
                )})}
            </ul>
            <ul className='FAQ'>
                <h3>FAQ</h3>
                {FAQ.map((n)=>{return(
                    <li>{n}</li>
                )})}
            </ul>
            
        </div>
    )
}