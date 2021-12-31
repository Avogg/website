
import Link from 'next/link'

export default function Navbar() {
    return(
        <div className="fixed flex w-full items-center md:h-16 bg-avogg text-white md:space-x-7 md:px-10">
          <Link href="/">
            <img src="/logo-white.svg" className="md:w-10 cursor-pointer"/>
          </Link>
          <Link href="/">
            <p className="cursor-pointer hover:text-gray-100 transition duration-250 ease-in-out">Home</p>
          </Link>
          <Link href="/about">
            <p className="cursor-pointer hover:text-gray-100 transition duration-250 ease-in-out">About</p>
          </Link>
          <Link href="/">
            <p className="cursor-pointer hover:text-gray-100 transition duration-250 ease-in-out">Projetos</p>
          </Link>
          <Link href="/">
            <p className="cursor-pointer hover:text-gray-100 transition duration-250 ease-in-out">Contactos</p>
          </Link>
        </div>
    )
}