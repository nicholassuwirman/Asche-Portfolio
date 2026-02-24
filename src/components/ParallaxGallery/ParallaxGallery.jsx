import './ParallaxGallery.css'
import { useRef } from 'react'
import asche1 from '../../assets/gallery/asche-1.jpg'
import asche2 from '../../assets/gallery/asche-2.jpg'
import asche3 from '../../assets/gallery/asche-3.jpg'
import asche4 from '../../assets/gallery/asche-4.jpg'
import asche5 from '../../assets/gallery/asche-5.jpg'
import asche6 from '../../assets/gallery/asche-6.jpg'
import asche7 from '../../assets/gallery/asche-7.jpg'
import asche8 from '../../assets/gallery/asche-8.jpg'
import asche9 from '../../assets/gallery/asche-9.jpg'
import asche10 from '../../assets/gallery/asche-10.jpg'
import asche11 from '../../assets/gallery/asche-11.jpg'
import asche12 from '../../assets/gallery/asche-12.jpg'
import { useTransform, useScroll, motion } from 'framer-motion';

  const images = [asche1, asche2, asche3, asche4, asche5, asche6, asche7, asche8, asche9, asche10, asche11, asche12]


export default function ParallaxGallery() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })

    const y1 = useTransform(scrollYProgress, [0, 1], [0, window.innerHeight * 2])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, window.innerHeight * 2.5])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, window.innerHeight * 1.25])
    const y4 = useTransform(scrollYProgress, [0, 1], [0, window.innerHeight * 3])

  return (
    <main className="gallery-main">
      <div ref={container} className="gallery-gallery">
        <Column images={[images[0], images[1], images[2]]} y={y1} />
        <Column images={[ images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[11], images[10]]} y={y4} />
      </div>
    </main>
  )
}


const Column = ({ images, y=0 }) => {

  return (
    <motion.div style={{y}} className="gallery-column">
      {images.map((src, index) => (
        <div key={index} className="gallery-image-container">
          <img
            src={src}
            alt="image"
          />
        </div>
      ))}
    </motion.div>
  )
}
