import '../styles/projects2.css';
import { useEffect, useRef } from 'react';

const Projects2 = () => {
    const containerRef: any = useRef(null);

    useEffect(() => {
      const handleMouseMove = (e: any) => {
        const cards = containerRef.current.getElementsByClassName("card");
        Array.from(cards).forEach((card: any) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
  
          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        });
      };
  
      containerRef.current.addEventListener("mousemove", handleMouseMove);
  
      return () => {
        containerRef.current.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);
    return (
        <div className='Projects2' id = "Projects2">
            <div id="cards" ref = {containerRef}>
                <div className="card">
                    <div className="card-content">
                        <div className="card-image">
                            <i className="fa-duotone fa-apartment"></i>
                        </div>
                        <div className="card-info-wrapper">
                            <div className="card-info">
                                <i className="fa-duotone fa-apartment"></i>
                                <div className="card-info-title">
                                    <h3>Apartments</h3>
                                    <h4>Places to be apart. Wait, what?</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <div className="card-image">
                            <i className="fa-duotone fa-unicorn"></i>
                        </div>
                        <div className="card-info-wrapper">
                            <div className="card-info">
                                <i className="fa-duotone fa-unicorn"></i>
                                <div className="card-info-title">
                                    <h3>Unicorns</h3>
                                    <h4>A single corn. Er, I mean horn.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <div className="card-image">
                            <i className="fa-duotone fa-blender-phone"></i>
                        </div>
                        <div className="card-info-wrapper">
                            <div className="card-info">
                                <i className="fa-duotone fa-blender-phone"></i>
                                <div className="card-info-title">
                                    <h3>Blender Phones</h3>
                                    <h4>These absolutely deserve to exist.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <div className="card-image">
                            <i className="fa-duotone fa-person-to-portal"></i>
                        </div>
                        <div className="card-info-wrapper">
                            <div className="card-info">
                                <i className="fa-duotone fa-person-to-portal"></i>
                                <div className="card-info-title">
                                    <h3>Adios</h3>
                                    <h4>See you...</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <div className="card-image">
                            <i className="fa-duotone fa-person-from-portal"></i>
                        </div>
                        <div className="card-info-wrapper">
                            <div className="card-info">
                                <i className="fa-duotone fa-person-from-portal"></i>
                                <div className="card-info-title">
                                    <h3>I mean hello</h3>
                                    <h4>...over here.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <div className="card-image">
                            <i className="fa-duotone fa-otter"></i>
                        </div>
                        <div className="card-info-wrapper">
                            <div className="card-info">
                                <i className="fa-duotone fa-otter"></i>
                                <div className="card-info-title">
                                    <h3>Otters</h3>
                                    <h4>Look at me, imma cute lil fella.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects2;