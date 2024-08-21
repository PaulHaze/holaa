import { IoStar } from 'react-icons/io5';
import { GoClockFill } from 'react-icons/go';
import { Md4K } from 'react-icons/md';

type InfoPillProps = {
  text: string;
  type: 'review' | 'duration' | 'quality';
};

export function InfoPill({ text, type }: InfoPillProps) {
  const icon = {
    review: <IoStar />,
    duration: <GoClockFill />,
    quality: <Md4K />,
  };
  return (
    <div>
      <p>
        <span className="mr-1">{icon.review}</span>
        {text}
      </p>
    </div>
  );
}
