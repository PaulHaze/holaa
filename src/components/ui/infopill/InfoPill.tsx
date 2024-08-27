import { IoStar } from 'react-icons/io5';
import { GoClockFill } from 'react-icons/go';
import { Md4K } from 'react-icons/md';

type InfoPillProps = {
  text: string;
  type: 'score' | 'duration' | 'quality';
};

export function InfoPill({ text, type }: InfoPillProps) {
  const icon = {
    score: <IoStar />,
    duration: <GoClockFill />,
    quality: <Md4K />,
  };
  return (
    <div
      className={`inline-flex flex-1 rounded-lg bg-pillinfo px-2 py-1.5 flex-center sm:px-2.5 sm:py-2`}
    >
      <div className="mr-2 text-base-content">{icon[type]}</div>
      <p className="sm:text-md font-body text-sm font-semibold">{text}</p>
    </div>
  );
}
