import Image from "next/image"
import BlurButton from "./BlurButton"
import Link from "next/link"
import { FiInstagram, FiLinkedin } from "react-icons/fi"

const Header = () => {
  return (
    <header className="px-6 py-4 w-[100%] fixed flex justify-between z-100">
      <div>
        <Image
          width={120}
          height={120}
          src={'/logo-1.png'}
          alt="logo"
          unoptimized
          quality={100}
        />
      </div>
      <div className="flex gap-2 items-center">
        <BlurButton href="/contact" label="Contact" />
        <Link href={''} className="relative inline-flex items-center justify-center p-2 rounded-full border border-gray-500 bg-white/20 backdrop-blur-sm transition-colors duration-300 text-gray-700 hover:bg-gray-600 hover:text-white no-underline">
          <FiInstagram size={18}/>
        </Link>
        <Link href={''} className="relative inline-flex items-center justify-center p-2 rounded-full border border-gray-500 bg-white/20 backdrop-blur-sm transition-colors duration-300 text-gray-700 hover:bg-gray-600 hover:text-white no-underline">
          <FiLinkedin size={18}/>
        </Link>
      </div>
    </header>
  )
}

export default Header