import { useEffect, useRef } from 'react';

import audioFile from './path-to-your-audio-file.mp3'; // Import your audio file

const App: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Play the audio once the component mounts
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  return (
    <div>
      <audio ref={audioRef} src={audioFile} autoPlay />
      {/* Your main app content */}
    </div>
  );
};