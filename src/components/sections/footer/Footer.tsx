import Link from 'next/link';
import Image from 'next/image';

import logo from '@/assets/images/logo.svg';

export function Footer() {
  return (
    <div className="bg-gradient-footer mt-[500px] rounded-t-3xl p-8">
      <div className="grid grid-cols-1 gap-5">
        {/* LOGO + ICONS */}
        <div className="">
          <Link href="/">
            <Image src={logo} alt="logo" className="mb-4" />
          </Link>
          <p className="text-lg opacity-80">Connect with us!</p>
          <div className="flex">ICONS</div>
        </div>
        <div className="cats">
          <h5>CATS</h5>
        </div>
        <div className="help">
          <h5>help</h5>
        </div>
        <div className="buttons">
          <h5>buttons</h5>
        </div>
        <div className="privacy">
          <h5>privacy</h5>
        </div>
      </div>
    </div>
  );
}
