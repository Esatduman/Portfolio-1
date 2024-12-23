import './Home.css';
import Quote from '../assets/Quote-Mark.png';
import Gear from '../assets/GearsB.png';



function Home() {


    return (
        <>
        <div className='Home-container'>
            <h1 className="underline about-header">ABOUT ME</h1>
            <h2>
            <img className="quote-mark" src={Quote} alt="quote"></img>

            I am Esat Duman, a software engineer leveraging my expertise to deliver impactful and innovative solutions. With experience developing complex systems and tackling challenging problems across diverse domains, I actively pursue engineering excellence and advance technology to address real-world needs.
                 I aim to contribute to forward-thinking pojects and collaborate with teams to drive meaningful progress
                 <img className="quote-mark2" src={Quote} alt="quote"></img>
  
                 </h2>
        </div>

        <div className='Gears'>
        <img className="half-out GearsB-left" src={Gear} alt="gear" />
        <img className="half-out GearsB-right" src={Gear} alt="gear" />

        </div>
        <div className="skills">
        
        <h1 className="underline skills-header">Skills</h1>
        <div class="skills-container">
  <div class="skill-category languages">
    <h3>LANGUAGES</h3>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>HTML/CSS</li>
      <li>React.Js</li>
      <li>SQL</li>
      <li>Java</li>
    </ul>
  </div>

  <div class="skill-category frameworks">
    <h3>FRAMEWORKS</h3>
    <ul>
      <li>Node.js</li>
      <li>Firebase</li>
      <li>Django</li>
    </ul>
  </div>
  <div class="skill-category development">
    <h3>DEVELOPMENT</h3>
    <ul>
      <li>Agile</li>
      <li>Git</li>
      <li>Scrum</li>
      <li>Jira</li>
      <li>Leadership</li>
      <li>Mentorship</li>
      <li>Lean Methodologies</li>
      <li>Kanban</li>
      <li>Extreme Programming</li>
    </ul>
  </div>
</div>

        </div>

        
        
       
        

        </>
    );
}



export default Home;