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
    <div className="bg-pillinfo inline-flex flex-1 rounded-lg px-2.5 py-1.5">
      <div className="mr-2 pt-[2px] text-base-content">{icon[type]}</div>
      <p className="font-body text-sm font-semibold">{text}</p>
    </div>
  );
}
