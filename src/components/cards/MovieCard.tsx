import Link from 'next/link';
import Image from 'next/image';
// import dynamic from 'next/dynamic';

import { IoStar } from 'react-icons/io5';
import { GoClockFill } from 'react-icons/go';
import { Md4K, MdPlayArrow } from 'react-icons/md';

import { trendingOneMoviesData as data } from '@/data/movie';

// const VideoOne = dynamic(
//   async () => {
//     const mod = await import('@/components/video/VideoOne');
//     return mod.VideoOne;
//   },
//   {
//     ssr: false,
//   },
// );

const movie = data[0];

export function MovieCard() {
  return (
    <div className="movie-card-small group relative mb-20 w-full">
      <Image
        src={movie.image}
        alt="card-img"
        className="h-full w-full object-cover"
      />

      {/* <!-- Card Badge --> */}
      {movie.isRibbon && (
        <div className="movie-badge absolute">
          <span>{movie.count}</span>
        </div>
      )}

      {/* LINK BUTTON EVENTUALLY */}
      <div className="absolute left-1/2 top-[33%] h-24 w-24 -translate-x-1/2 rounded-full bg-stone-200/20 opacity-0 backdrop-blur-sm transition-all delay-100 duration-700 ease-in-out flex-center group-hover:top-[27%] group-hover:opacity-100">
        <MdPlayArrow size={62} />
      </div>

      {/* <!-- Play Button --> */}
      {/* <VideoOne src={movie.videoSrc} /> */}

      {/* <!-- Movie Details --> */}
      <div className="details absolute text-center">
        <h3 className="movie-name uppercase">
          <Link
            href={movie.href}
            className="gradient-link fw-normal font-heading hover:bg-gradient-color hover:bg-clip-text hover:text-transparent"
          >
            {movie.title}
          </Link>
        </h3>
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
