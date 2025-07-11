import Link from "next/link"
import BlurButton from "./BlurButton"
import { FiInstagram, FiLinkedin } from "react-icons/fi"

const Footer = () => {
  return (
    <footer className="py-10 h-[60vh] bg-[#42066a] rounded-t-3xl">
      <div className="gridContainer h-full flex text-white">
        <div className="footer-1 text-lg font-semibold roboto-condensed p-2">
          <p>We acknowledge the Wurundjeri Woi-wurrung people as the traditional custodians of the lands, waterways, and skies of the area now known as Merri-bek, and pay respect to their Elders past, present and emerging, as well as to all Aboriginal and Torres Strait Islanders peoples within our communities and beyond.
            We are committed to practices of anti-oppression, and transformative justice, always allying with those in the BIPOC, LGBTQIA+, and other minoritised communities.</p>
        </div>
        <div className="footer-2 flex flex-col gap-4 p-2">
          <p className="text-white/80">
            <strong className="text-white/100">Address</strong><br/>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, fugit.
          </p>
          <p className="text-white/80">
            <strong className="text-white/100">Contact</strong><br/>
            lauren@dbound.com<br/>
            +91 556 197 690
          </p>
          <div>
            <strong>Current</strong>
            <div className="flex gap-2 items-center">
              <Link href={''} className="relative inline-flex items-center justify-center p-2 rounded-full border border-gray-500 bg-white/80 backdrop-blur-sm transition-colors duration-300 text-gray-700 hover:bg-gray-600 hover:text-white no-underline">
                <FiInstagram size={18} />
              </Link>
              <Link href={''} className="relative inline-flex items-center justify-center p-2 rounded-full border border-gray-500 bg-white/80 backdrop-blur-sm transition-colors duration-300 text-gray-700 hover:bg-gray-600 hover:text-white no-underline">
                <FiLinkedin size={18} />
              </Link>
            </div>
          </div>

        </div>
        <div className="footer-3">
          <p className="text-white/80 w-[200px]"><strong>Keep in touch</strong> — Occasionally we send out insights & host wee events in our Brunswick studio.</p>
          <input type="email" placeholder="Enter your email" className="mt-4 p-2 rounded-md w-full bg-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500" />
        </div>
      </div>
      <div className="text-center text-white/60 mt-4  float-right px-6">
        <p>&copy; {new Date().getFullYear()} Dbound. All rights reserved. Website by <Link href="" className="text-white/80 hover:text-white">SparkCloud</Link></p>
      </div>
    </footer>
  )
}

export default Footer