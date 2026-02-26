import useMousePosition from '../../utils/useMousePosition';
import './Description.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Hero() {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 400 : 40;

  return (
    <div>
        <div className="description-container">
            <div className="description-name-container">
            <p className="description-name">ABOUT ME</p>
            </div>
            <motion.div 
            className="description-mask"
            animate={{
                webkitMaskPosition: `${x - size/2 }px ${y - size/2}px`,
                webkitMaskSize: `${size}px`
            }}
            transition={{type: "tween", ease: "backOut"}}
            >
                <div className="description-mask-content">
                    <p class="description-text" onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => setIsHovered(false)}>
                        He sleeps for 17 hours a day, has anger issues, 
                        isn't cuddly, constantly hungry,
                        wakes up at 1 am to ask for food.
                    </p>
                </div>
            </motion.div>
            <div className="description-body">
                <p class="description-text">
                    I'm a Siberian cat with a strong focus 
                    on producing high quality cuteness, impactful 
                    meows, & readiness to cuddle. 
                </p>
            </div>

            
        </div>
        
    </div>
    
  );
}
