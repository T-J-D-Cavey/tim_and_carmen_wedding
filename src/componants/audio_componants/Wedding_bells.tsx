import { useEffect, useRef } from 'react';

import audioFile from './wedding_bells_audio.wav';

export function Wedding_bells() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
// Getting an error message, need to consider a catch
  useEffect(() => {
    if (audioRef.current) {
      if (typeof audioRef.current.play === 'function') {
        audioRef.current.play();
        console.log('what the faaaaack')
      }
      else {
      }
    }
  }, []);

  return (
    <div>
      <audio ref={audioRef} src={audioFile} autoPlay />
    </div>
  );
}