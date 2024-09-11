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
    <div className="mt-[500px] rounded-t-3xl bg-gradient-footer p-8">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {/* LOGO + ICONS */}
        <div className="mb-5">
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

        {/* USEFUL LINKS */}
        <div className="mb-5">
          <h5>USEFUL LINKS</h5>
          <div className="flex flex-col space-y-1 text-lg opacity-60">
            <Link href="/faq">FAQ</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/blog">Privacy</Link>
          </div>
        </div>
        <div className="mb-5 flex h-[55px] gap-4">
          <Link
            href="account/sign-in"
            className="hl-btn big-btn w-full items-stretch border border-stone-600 uppercase text-stone-400 transition-all duration-300 hover:border-stone-50 hover:text-stone-50 sm:w-auto"
          >
            <span className="font-body font-semibold uppercase">
              SIGN IN / SIGN UP
            </span>
          </Link>

          <Link
            className="hl-btn big-btn hover:text-stone-50m w-full border border-stone-600 uppercase text-stone-400 transition-all duration-300 hover:border-stone-50 sm:w-auto"
            href="/"
          >
            VIEW ON GITHUB
          </Link>
        </div>
      </div>
      <hr className="opacity-10" />
      <div className="privacy">
        <h5>privacy</h5>
      </div>
    </div>
  );
}
