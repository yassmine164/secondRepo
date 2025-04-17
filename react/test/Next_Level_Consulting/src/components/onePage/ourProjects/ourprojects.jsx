import { useState } from 'react';
import './ourprojects.css'; 


const ProjectsSwipe = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Handle touch start
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  // Handle touch move
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // Handle touch end
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setTouchStart(e.clientX);
  };

  const handleMouseUp = (e) => {
    setTouchEnd(e.clientX);
    if (touchStart - e.clientX > 50) {
      setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }
    if (touchStart - e.clientX < -50) {
      setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    }
  };

  return (
    <div className="swipe-container">
      <div className="sectionTitle">Some Of Our Work</div>
      <div 
        className="projects-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {projects.map((project, index) => (
          <div 
          key={project.id} 
          className="project-card">
          <div class="description">
            <h2>{project.service}</h2>
            <p><strong>Price:</strong>{project.price}</p>
            <p><strong>Time:</strong>{project.time}</p>
            <p><strong>Client Feedback:</strong>{project.clientFeedback}</p>
          </div>
          <div class="image-container">
            <img src={project.image} alt={project.title}/>
          </div>
        </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="navigation-dots">
        {projects.map((_, index) => (
          <span 
            key={index}
            className={index === currentIndex ? 'dot active' : 'dot'}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Arrows */}
      <button 
        className="arrow left" 
        onClick={() => setCurrentIndex(prev => prev === 0 ? projects.length - 1 : prev - 1)}
      >
        &lt;
      </button>
      <button 
        className="arrow right" 
        onClick={() => setCurrentIndex(prev => (prev + 1) % projects.length)}
      >
        &gt;
      </button>
    </div>
  );
};

export default ProjectsSwipe;