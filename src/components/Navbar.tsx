import Link from "next/link";

const Navbar = () => {
    return <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <div>
            <Link href='/' className="text-xl font-bold text-blue-600">
                QuickTicket
            </Link>
        </div>
    </nav>
}
 
export default Navbar;