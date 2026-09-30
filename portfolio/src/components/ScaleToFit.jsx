import { useState, useLayoutEffect, useRef } from 'react'

// Scales its children uniformly so their natural (pixel-designed) size
// fits inside the browser window, without changing any inner layout.
function ScaleToFit({ children, margin = 0.95 }) {
  const contentRef = useRef(null)
  const [scale, setScale] = useState(1)

  useLayoutEffect(() => {
    const content = contentRef.current

    const updateScale = () => {
      // offsetWidth/Height ignore transforms, so this is always the unscaled size
      const width = content.offsetWidth
      const height = content.offsetHeight
      if (!width || !height) return
      setScale(Math.min(
        (window.innerWidth * margin) / width,
        (window.innerHeight * margin) / height
      ))
    }

    updateScale()
    const observer = new ResizeObserver(updateScale)
    observer.observe(content)
    window.addEventListener('resize', updateScale)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateScale)
    }
  }, [margin])

  return (
    <div
      ref={contentRef}
      className="scale-to-fit"
      style={{ transform: `scale(${scale})` }}
    >
      {children}
    </div>
  )
}

export default ScaleToFit
