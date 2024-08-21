import HeroSlideImageOne from '@/assets/images/hero/hero-slide-1.webp';
import HeroSlideImageTwo from '@/assets/images/hero/hero-slide-2.webp';

import HeroCardSlideImageOne from '@/assets/images/hero/1.webp';
import HeroCardSlideImageTwo from '@/assets/images/hero/2.webp';
import HeroCardSlideImageThree from '@/assets/images/hero/3.webp';

import HeroTwoSlideBgImage from '@/assets/images/hero/home_two-hero-bg.webp';
import HeroTwoSlideImageOne from '@/assets/images/hero/ht-banner-img-1.webp';

const heroOneData = {
  slides: [
    {
      videoSrc: 'assets/video/video.mp4',
      image: HeroSlideImageTwo,
      rating: '4.9',
      duration: '02h 30m',
      quality: '4k',
      title: 'THE ARK MANS',
      description:
        'Enjoy your favorite moves, tv show, sports, news, Live event and entertainment streaming now!',
      btnOneText: 'Watch Now',
      btnTwoText: 'Play Trailer',
    },
    {
      videoSrc: 'assets/video/video.mp4',
      image: HeroSlideImageOne,
      rating: '4.9',
      duration: '02h 30m',
      quality: '4k',
      title: 'ENIGMA OF SHADOWS',
      description:
        'Enjoy your favorite moves, tv show, sports, news, Live event and entertainment streaming now!',
      btnOneText: 'Watch Now',
      btnTwoText: 'Play Trailer',
    },
    {
      videoSrc: 'assets/video/video.mp4',
      image: HeroSlideImageTwo,
      rating: '4.9',
      duration: '02h 30m',
      quality: '4k',
      title: 'THE ARK MANS',
      description:
        'Enjoy your favorite moves, tv show, sports, news, Live event and entertainment streaming now!',
      btnOneText: 'Watch Now',
      btnTwoText: 'Play Trailer',
    },
    {
      videoSrc: 'assets/video/video.mp4',
      image: HeroSlideImageOne,
      rating: '4.9',
      duration: '02h 30m',
      quality: '4k',
      title: 'The Dark Beauty',
      description:
        'Enjoy your favorite moves, tv show, sports, news, Live event and entertainment streaming now!',
      btnOneText: 'Watch Now',
      btnTwoText: 'Play Trailer',
    },
  ],
  cardSlides: [
    {
      image: HeroCardSlideImageOne,
      title: 'Dune II',
      description: 'Action Movies',
    },
    {
      image: HeroCardSlideImageTwo,
      title: 'God Of War',
      description: 'Action Movies',
    },
    {
      image: HeroCardSlideImageThree,
      title: 'The Dancing Butterfly',
      description: 'Action Movies',
    },
  ],
};

const heroTwoData = {
  slides: [
    {
      videoSrc: 'assets/video/video.mp4',
      bgImage: HeroTwoSlideBgImage,
      image: HeroTwoSlideImageOne,
      title: 'THE LORD OF THE RING',
      description: 'The Lord of the rings is a trilogy of epic fantasy',
      rating: '4.9',
      duration: '02h 30m',
      quality: '4k',
      btnOneText: 'Watch Now',
      btnTwoText: 'PLAY TRAILER',
    },
    {
      videoSrc: 'assets/video/video.mp4',
      bgImage: HeroTwoSlideBgImage,
      image: HeroTwoSlideImageOne,
      title: 'Ark man of earth',
      description: 'The Lord of the rings is a trilogy of epic fantasy',
      rating: '4.9',
      duration: '02h 30m',
      quality: '4k',
      btnOneText: 'Watch Now',
      btnTwoText: 'PLAY TRAILER',
    },
    {
      videoSrc: 'assets/video/video.mp4',
      bgImage: HeroTwoSlideBgImage,
      image: HeroTwoSlideImageOne,
      title: 'Guardians of Galaxy',
      description: 'The Lord of the rings is a trilogy of epic fantasy',
      rating: '4.9',
      duration: '02h 30m',
      quality: '4k',
      btnOneText: 'Watch Now',
      btnTwoText: 'PLAY TRAILER',
    },
  ],
};

const heroThreeData = {
  title: 'The monkey king',
  review: '4.9',
  duration: '02h 30m',
  quality: '4k',
  downloadBtnText: 'Download Now',
  addToListBtnText: 'Add to List',
};

export { heroOneData, heroTwoData, heroThreeData };
