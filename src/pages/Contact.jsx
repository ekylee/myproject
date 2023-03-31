import '../assets/css/contact.css'
import img1 from "../assets/image/Asset2.svg";
import { AiFillLinkedin,AiOutlineMail } from "react-icons/ai";
import { IconContext } from 'react-icons';
// Contact page
export default function Contact() {

    return (
      <main >
        <h1>Contact</h1>
        <div className="container-contact">
          <div className="contact">
            <div className='contactImg'>
              <img src={img1} alt="Logo"/>
            </div>
          </div>
          <section className='contact-content'>
          <article className='contactItem'>
            <IconContext.Provider value={{ className: "contactIcon", size: 50}}>
                <>
                <a href='http://www.linkedin.com/in/estherkylee'><AiFillLinkedin/></a>
                </>
            </IconContext.Provider>
            <p>Linkedin</p>
          </article>
          <article className='contactItem'>
            <IconContext.Provider value={{ className: "contactIcon", size: 50}}>
                <>
                <a href='#'><AiOutlineMail/></a>
                </>
            </IconContext.Provider>
            <p>Email</p>
          </article>
          </section>
        </div>
      </main>
    );
  }