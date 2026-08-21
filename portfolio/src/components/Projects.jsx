import { useState} from 'react'

function Projects(props){

    const [currentFile, setFile] = useState(null)
    const[currProject, setProject] = useState('file')
    const [currMedia, setMedia] = useState(0)

    const projects = [
        { name: '/projectsSprite/refocusWord.png', file: '/projectsSprite/fileOne.png', image: '/projectsSprite/reFocus/Pet_Lover.png',  
            description: 'ReFocus is a desktop focus coach that uses your webcam to catch distractions in real time and brings you back on track through a friendly virtual pet companion. Everything runs completely locally, so your data never leaves your computer. Stay focused, level up, unlock new pets, and track your progress through a built-in analytics dashboard.',
            role: 'Developed and implemented core gamification features including a scrollable achievements system, dynamic level-up progression, and XP/coin reward displays. Designed and applied the full app stylesheet to establish a consistent visual identity across all components. Created the virtual pet sprite and app icon assets from scratch. Collaborated with a 13-person team using Git and pull requests to ship a polished final product.',
            github: 'https://github.com/AlexWS12/ReFocus',
            tech: [
                '/projectsSprite/Python.png',
                '/projectsSprite/Pyside6.png',
              ],
            media: [
            '/projectsSprite/reFocus/Refocus1.png',
            '/projectsSprite/reFocus/Refocus2.png',
            '/projectsSprite/reFocus/Refocus3.png',
            '/projectsSprite/reFocus/Refocus4.png',
            '/projectsSprite/reFocus/Refocus5.png',
          ] },


        { name: '/projectsSprite/HermesWord.png', file: '/projectsSprite/fileTwo.png', image: '/projectsSprite/hermes/HermesLogo.png', 
            description: 'HERMES is a web-based AI-powered news agent that generates and presents multimedia news stories directly through an interactive Flask web interface.The platform integrates AI news generation, video playback, and navigation through past news content.',
            role: 'Led a 3-person frontend team in designing and building the full UI for an AI-driven news platform. Developed the home, news, and team pages with dynamic content loading to surface the latest generated video recaps. Integrated the frontend with Supabase to fetch and display videos, sources, tags, and metadata. Built routing with Flask and communicated team progress in twice-weekly Agile standups to keep the project on track.',
            github: 'https://github.com/daniel-rawana/ai-news-agent',
            tech: [
                '/projectsSprite/Python.png',
                '/projectsSprite/CSS.png',
                '/projectsSprite/HTML.png',
                '/projectsSprite/Flask.png',
                '/projectsSprite/JavaScript.png'
              ],
            media: [
            '/projectsSprite/hermes/Hermes1.png',
            '/projectsSprite/hermes/Hermes2.png',
            '/projectsSprite/hermes/Hermes3.png',
          ] },



        { name: '/projectsSprite/duelDotWord.png', file: '/projectsSprite/fileThree.png', image: '/projectsSprite/duelDot/Powerup.png',
            description: 'A fast-paced 2D shooter where you control a circle and battle against other players using precision shooting and strategic movement. Dodge bullets, take down enemies, and climb the leaderboard in this minimalist but intense multiplayer arena!',
            role: 'Collaborated within a large cross-functional team to build a competitive multiplayer IO game. As part of a 3-person Powerups team, designed and created all powerup sprites from scratch, then developed the mechanics to drive strategic player engagement. Refactored the powerup system from a switch statement to a scalable class-based architecture, improving maintainability across the codebase. Implemented powerup spawning and collision detection to ensure accurate and responsive player interactions.',
            github: 'https://github.com/CarlosMelicandia/DuelDot',
            tech: [
                '/projectsSprite/HTML.png',
                '/projectsSprite/JavaScript.png'
              ],
            media: [
            '/projectsSprite/duelDot/DuelDot1.png',
            '/projectsSprite/duelDot/DuelDot2.png',
            '/projectsSprite/duelDot/DuelDot3.png',
            '/projectsSprite/duelDot/DuelDot4.png'
          ] 
        },
      ]

    return (
        <div>
        {currProject === 'file' ? (
            <div className="projects-picker">
                <img 
                src="/aboutPageSprites/escButton.png" 
                className="projects-esc"
                onClick={props.onClose}
            />
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="file-card"
                        onClick={() => {
                            setFile(project)
                            setProject('detail')
                        }}
                    >
                        <img src="/projectsSprite/fileCard.png" className="file-card-bg" />
                        <img src={project.file} className="file-label" />
                        <img src={project.name} className="file-name" />
                        <img src={project.image} className="file-mascot" />
                    </div>
                ))}
            </div>
        ) : (
            <div className="project-detail">
                                    <img 
                    src="/projectsSprite/back.png" 
                    className="project-back"
                    onClick={() => {
                        setProject('file')
                        setMedia(0)
                    }}
                    />
                <img src="/projectsSprite/Projects_Main.png" className="project-detail-bg" />
                <div className="project-media">
                    <button className="media-arrow" onClick={() => setMedia(prev => Math.max(0, prev - 1))}>◀</button>
                        <img src={currentFile.media[currMedia]} className="media-image" />
                    <button className="media-arrow" onClick={() => setMedia(prev => Math.min(currentFile.media.length - 1, prev + 1))}>▶</button>
                </div>
                <div className="project-info">
                    <p className="project-description">{currentFile.description}</p>
                    <p className="project-role"><strong>Role:</strong> {currentFile.role}</p>    
                </div>
                <div className="project-tech-stack">
                        <img src="/projectsSprite/Tech Stack.png" className="tech-label" />
                        <div className="tech-icons">
                            {currentFile.tech.map((icon, index) => (
                            <img key={index} src={icon} className="tech-icon" />
                            ))}
                    </div>
                    </div>
                <a href={currentFile.github} target="_blank">
                <img src="/projectsSprite/github.png" className="project-github" />
                </a>
                <img src={currentFile.image} className="project-mascot" />
                <img src={currentFile.name} className="project-name" />
            </div>
        )}
    </div>
    )
}

export default Projects