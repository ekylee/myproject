import '../assets/css/about.css'
import img1 from "../assets/image/profile-pic-better-2.png";
// About me page
export default function About() {
  return (
    <main >
      <h1>About Me</h1>
      <div className="container-about">
      <div className='about-img'><img src={img1} alt="Logo"/></div>
        <article className='aboutItem'>
          <h3>My name is Esther Lee – UX, Interaction, Product designer based in Toronto, Canada.</h3>
          <p className="body-about">I have a diverse background and
              ready to embrace new challenges
              as a designer. For the last 4 years,
              I have worked in a range of
              business environments utilizing my
              passion for problem solving, project
              management, and my interest in
              design. With my experience, I’m able
              to utilize my skills in different fields
              and integrate into my design work to bring a unique take on any project.</p>
          <p className="body-about">
            Outside of design, I'm a major foodie, love to exploring new restaurants around Toronto, cooking, and travelling around the world. I also love collaborating and chatting over a good cup of coffee, so get in touch or recommend a coffee shop.
          </p>
        </article>
      </div>
    </main>
  );
}