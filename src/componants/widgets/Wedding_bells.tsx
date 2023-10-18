import audioFile from '../../assets/wedding_bells_audio.wav';

export function Wedding_bells() {

  return (
    <div>
      <audio src={audioFile} autoPlay />
    </div>
  );
}