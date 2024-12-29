import { Facebook, LinkIcon } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

import { TiSocialTwitter } from "react-icons/ti";

export default function Footer(){
    return(
        <footer className="bg-gray-900 text-white py-12 px-4 font-sans tracking-wide">
      <div className="text-center">
        <h6 className="text-lg text-gray-300">Stay connected with us:</h6>

        <ul className="flex flex-wrap justify-center gap-x-8 gap-4 mt-8 mb-12 hover:scale-105 duration-200">
         <FaTiktok/>
         <Facebook/>
         <TiSocialTwitter/>
         <LinkIcon/>
        </ul>

        <p className="text-base text-gray-300">KAMRAN TASLEEM AHMED</p>
      </div>
    </footer>
    )
}