import { useEffect , useRef , useState } from 'react'
import WaveSurfer from 'wavesurfer.js'

export const Waveform = ({ audio }) => {
  const containerRef = useRef()
  const waveSurferRef = useRef({
    isPlaying: () => false,
  })
  const [isPlaying, toggleIsPlaying] = useState(false)

  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
      container: containerRef.current,
    })
    waveSurfer.load(audio)

    waveSurfer.on('ready', () => {
        waveSurferRef.current = waveSurfer
      })

    return () => {
      waveSurfer.destroy()
    }
  }, [audio])

  return (

    <>
         <button onClick={() => {
          waveSurferRef.current.playPause()
          toggleIsPlaying(waveSurferRef.current.isPlaying())
        }} type="button">
        {isPlaying ? 'pause' : 'play'}
      </button>
         <div ref={containerRef} />
    
    </>
  )
  
 
}