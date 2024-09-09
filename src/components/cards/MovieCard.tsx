'use client';

import Link from 'next/link';
import Image from 'next/image';

// import dynamic from 'next/dynamic';

import { IoStar } from 'react-icons/io5';
import { GoClockFill } from 'react-icons/go';
import { Md4K, MdPlayArrow } from 'react-icons/md';

import { convertToSlug } from '@/utils';

// const VideoOne = dynamic(
//   async () => {
//     const mod = await import('@/components/video/VideoOne');
//     return mod.VideoOne;
//   },
//   {
//     ssr: false,
//   },
// );

type MovieCardProps = {
  movie: MovieCard;
};

export function MovieCard({ movie }: MovieCardProps) {
  const slug = convertToSlug(movie.title);

  return (
    <div className="movie-card-small relative w-[95%] max-w-[420px] overflow-hidden rounded-[40px]">
      <Image
        src={movie.image}
        alt="card-img"
        className="h-full w-full object-cover"
      />

      {/* <!-- Card Badge --> */}
      {movie.isRibbon && (
        <div className="movie-badge absolute">
          <span className="font-heading">{movie.count}</span>
        </div>
      )}

      {/* LINK BUTTON EVENTUALLY */}
      <div className="movie-link">
        <MdPlayArrow
          size={62}
          className="transition-all duration-500 ease-out hover:scale-125"
        />
      </div>

      {/* <!-- Play Button --> */}
      {/* <VideoOne src={movie.videoSrc} /> */}

      {/* <!-- Movie Details --> */}
      <div className="details">
        <h2 className="movie-name uppercase">
          <Link
            href={{
              pathname: `movie-details/${slug}`,
              query: { movie: movie.title },
            }}
            className="gradient-link font-heading"
          >
            {movie.title}
          </Link>
        </h2>
        <ul className="movie-info">
          <li className="flex items-center">
            <IoStar className="relative mb-[4px]" />
            <span>{movie.rating}</span>
          </li>
          <li>
            <GoClockFill className="relative mb-[3px]" />
            <span>{movie.duration}</span>
          </li>
          <li>
            <Md4K className="relative mb-[3px]" />
            <span>{movie.quality} Quality</span>
          </li>
        </ul>
        {movie.categories && movie.categories.length > 0 && (
          <ul className="movie-type">
            {movie.categories.map((category, index) => (
              <li key={index} className="whitespace-pre-wrap">
                {category}
                {index < movie.categories.length - 1 ? ', ' : ''}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
