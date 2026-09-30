import { useState, useEffect } from 'react'


function About(props){
    const [visibleChars, setVisibleChars] = useState(0)
    const [currParagraph, setParagraph] = useState(0)

    const paragraphs = [
        "Aspiring software engineer with experience across Python, JavaScript, and Java, ",
        "working within React, Vue.js, Flask, and Django. Comfortable working end to end,",
        "from backend architecture to interface design, which is where a lot of the enjoyment comes from.",
        "",
        "Approaches problems with equal attention to functionality and visual design, ",
        "reflected in this site's pixel art and interface, all created independently."
    ]

    useEffect(() => {
        const interval = setInterval(() => {
          if (visibleChars < paragraphs[currParagraph].length) {
            setVisibleChars(prev => prev + 1)
          } else if(visibleChars >= paragraphs[currParagraph].length && currParagraph < paragraphs.length -1) {
            setParagraph(prev => prev +1)
            setVisibleChars(0)
          }
        }, 20)
      
        return () => clearInterval(interval)
      }, [visibleChars, currParagraph])

      return (
        <div className="about-wrapper">
            <img src="/aboutPageSprites/mainNote.png" className="about-main" />
            <img src="/aboutPageSprites/name.png" className="about-name-note" />
            <img src="/aboutPageSprites/internNote.png" className="about-intern-note" />
            <img src="/aboutPageSprites/neuralSeekLogo.png" className="about-neuralSeek-logo" />
            <img src="/aboutPageSprites/escButton.png" className="about-esc" onClick={props.onClose} />

            <div className="about-bio">
            {paragraphs.map((paragraph, index) => {
              if(index < currParagraph){
                return <p key={index}>{paragraph}</p>
              } else if(index === currParagraph){
                return <p key={index}>{paragraph.slice(0, visibleChars)}</p>
              } else {
                return <p key={index}></p>
              }
            })}
          </div>
          <div className="about-education">
            <h3>Education</h3>
            <div className="edu-entry">
              <span>Florida International University</span>
              <span>Aug 2024 - Present</span>
            </div>
            <p>Bachelor of Arts in Computer Science</p>
            <div className="edu-entry">
              <span>Miami-Dade College</span>
              <span>Aug 2022 - July 2024</span>
            </div>
            <p>Associate of Arts in Computer Science</p>
          </div>
          <div className="about-experience">
            <h3>Experience</h3>
            <div className="exp-entry">
              <span>Code Instructor - INIT Ignite</span>
              <span>Sep 2025 - Dec 2025</span>
            </div>
            <p>Taught Python fundamentals to 20+ high school students over a 9-week outreach program.</p>
          </div>
        </div>
      )
    }

export default About