import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import ParallaxGallery from './components/ParallaxGallery/ParallaxGallery'
import Description from './components/Description/Description'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div>
      <Navbar />
      <Hero />
      <ParallaxGallery />
      <Description />
    </div>
  )
}

export default App
