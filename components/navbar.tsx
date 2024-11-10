import Link from 'next/link';

const Navbar = () => (
    <nav className="bg-[#FA812F] p-4">
        <ul className="flex justify-center gap-4 text-[#FEF3E2]">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
    </nav>
);

export default Navbar