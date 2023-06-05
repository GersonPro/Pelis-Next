import Link from 'next/link';
import '../globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const links = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'About',
    route: '/about',
  },
];

export function Navigation () {
    return(
        <header>
              <nav className=" top-0 left-0 right-0 bg-gray-800 text-white p-4">
          <ul className="flex">
            {links.map(({ label, route }) => (
              <li key={route} className="mr-4">
                <Link href={route}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        </header>
    )
}