import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-black text-white p-4 flex justify-center space-x-4">
            <Link href="/">🏠 Home</Link>
            <Link href="/characters">🧙 Characters</Link>
            <Link href="/favorites">✨ Favorites</Link>
        </nav>
    );
}
