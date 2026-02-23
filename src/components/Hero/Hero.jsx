import useMousePosition from '../../utils/useMousePosition';
import './Hero.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Hero() {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 400 : 40;

  return (
    <div className="hero-container">
        <div className="hero-name-container">
          <p className="hero-name">Asche</p>
        </div>
        <motion.div 
        className="hero-mask"
        animate={{
            webkitMaskPosition: `${x - size/2 }px ${y - size/2}px`,
            webkitMaskSize: `${size}px`
        }}
        transition={{type: "tween", ease: "backOut"}}
        >
            <div className="hero-mask-content">
                <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => setIsHovered(false)}>
                    HE IS A FAT ASS CAT SINCE 2023
                </p>
            </div>
        </motion.div>
        <div className="hero-body">
            <p>
                BEING A<br/><span>CUTE CAT</span><br/>SINCE 2021
            </p>
        </div>
        </div>
  );
}
