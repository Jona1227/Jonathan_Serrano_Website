import { useState, useEffect } from 'react'


function About(){
    const [visibleChars, setVisibleChars] = useState(0)
    const [currParagraph, setParagraph] = useState(0)

    const paragraphs = [
        "Jonathan Serrano",
        "Aspiring Software engineer and current Computer Science student at Florida International University, Graduating August 2027",
        "I like to build and design things, from web apps to desktop tools",
        "Currently interning as a AI Agent Developer for NeuralSeek this Fall"
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
        <div className="about-content">
          {paragraphs.map((paragraph, index) => {
            if(index < currParagraph){
              return <p className="about-text" key={index}>{paragraph}</p>
            } else if(index === currParagraph){
              return <p className="about-text" key={index}>{paragraph.slice(0, visibleChars)}</p>
            } else {
              return <p className="about-text" key={index}></p>
            }
          })}
        </div>
      )
    }

export default About