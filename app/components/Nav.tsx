'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../images/Logo.png';

const Nav = () => {
    const pathname = usePathname();
  return (
    <nav className='h-[92px] flex items-center justify-between'>
    <Image
      className='logo_img'
      src={Logo}
      alt="Picture of the author"
    />
      <ul>
        <li>
          <Link className={`link ${pathname === '/laptops' ? 'active' : ''}`} href="/laptops">
          Laptops
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/desktops' ? 'active' : ''}`}
            href="/desktops"
          >
            Desktop PCs
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/networking_devices' ? 'active' : ''}`}
            href="/networking_devices"
          >
            Networking Devices
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/printers_&_scanners' ? 'active' : ''}`}
            href="/printers_&_scanners"
          >
            Printers & Scanners
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/pc_parts' ? 'active' : ''}`}
            href="/pc_parts"
          >
           PC Parts
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/other' ? 'active' : ''}`}
            href="/other"
          >
            All Other Products
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/repairs' ? 'active' : ''}`}
            href="/repairs"
          >
            Repairs
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/our_deals' ? 'active' : ''}`}
            href="/our_deals"
          >
            Our Deals
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav