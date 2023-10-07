import { useEffect, useRef } from 'react';

import audioFile from './wedding_bells_audio.wav';

export function Wedding_bells() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  return (
    <div>
      <audio ref={audioRef} src={audioFile} autoPlay />
    </div>
  );
}