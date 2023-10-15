import { useEffect, useRef } from 'react';
import audioFile from '../../assets/wedding_bells_audio.wav';

export function Wedding_bells() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    function play_wedding_bells() {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }
//  TO BE DELETED
    window.addEventListener('scroll', play_wedding_bells, { once: true });
    window.addEventListener('touchstart', play_wedding_bells, { once: true });

    return () => {
      window.removeEventListener('scroll', play_wedding_bells);
      window.removeEventListener('touchstart', play_wedding_bells);

    }
  }, []);

  return (
    <div>
      <audio ref={audioRef} src={audioFile} autoPlay />
    </div>
  );
}