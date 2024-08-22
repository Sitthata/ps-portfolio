import NavList from './nav-list'

export default function Navbar() {
    return (
        <nav className="flex justify-between py-6">
            <h1 className="text-3xl font-bold font-jetbrain hover:text-secondary cursor-pointer duration-150">
                PS
            </h1>
            <NavList />
        </nav>
    )
}
