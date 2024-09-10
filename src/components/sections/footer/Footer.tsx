import Link from 'next/link';
import Image from 'next/image';

import logo from '@/assets/images/logo.svg';

import {
  RiFacebookFill,
  RiTwitterXFill,
  RiInstagramFill,
  RiPinterestFill,
  RiYoutubeFill,
} from 'react-icons/ri';

export function Footer() {
  return (
    <div className="bg-gradient-footer mt-[500px] rounded-t-3xl p-8">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {/* LOGO + ICONS */}
        <div className="min-h-[200px] bb">
          <Link href="/">
            <Image src={logo} alt="logo" className="mb-4" />
          </Link>
          <p className="text-lg opacity-80">Connect with us!</p>
          <div className="mt-3 flex gap-2">
            <Link href="/" className="social-link">
              <RiTwitterXFill />
            </Link>
            <Link href="/" className="social-link">
              <RiFacebookFill />
            </Link>
            <Link href="/" className="social-link">
              <RiInstagramFill />
            </Link>
            <Link href="/" className="social-link">
              <RiPinterestFill />
            </Link>
            <Link href="/" className="social-link">
              <RiYoutubeFill />
            </Link>
          </div>
        </div>

        {/* CATEGORIES */}

        <div className="help min-h-[200px] bb">
          <h5>USEFUL LINKS</h5>
        </div>
        <div className="buttons min-h-[200px] bb2">
          <h5>buttons</h5>
        </div>
      </div>
      <div className="privacy">
        <h5>privacy</h5>
      </div>
    </div>
  );
}
