function Contact(props) {
    return (
      <div className="contact-wrapper">
        <img src="/contactSprites/background.png" className="contact-bg" />
        
        <img src="/contactSprites/contactWord.png" className="contact-title" />
        <img 
          src="/aboutPageSprites/escButton.png" 
          className="contact-esc"
          onClick={props.onClose}
        />
  
        <div className="contact-note note-email" onClick={() => window.open('mailto:jonathanserrano2734@gmail.com')}>
          <img src="/contactSprites/holderNote.png" className="note-bg" />
          <img src="/contactSprites/mail.png" className="note-icon" />
        </div>
  
        <div className="contact-note note-linkedin" onClick={() => window.open('https://www.linkedin.com/in/jonathan-serrano-33373a280/')}>
          <img src="/contactSprites/holderNote.png" className="note-bg" />
          <img src="/contactSprites/linkedin.png" className="note-icon" />
        </div>
  
        <div className="contact-note note-github" onClick={() => window.open('https://github.com/Jona1227')}>
          <img src="/contactSprites/holderNote.png" className="note-bg" />
          <img src="/projectsSprite/github.png" className="note-icon" />
        </div>
      </div>
    )
  }
  
  export default Contact