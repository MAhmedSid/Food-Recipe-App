import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const FooterSocialLinksComp = () => {
  return (
    <ul className="flex gap-4">
      <Link href="https://www.facebook.com/Food.com">
        <li>
          <FaFacebookF />
        </li>
      </Link>
      <Link href="https://www.instagram.com/fooddotcom/">
        <li>
          <FaInstagram />
        </li>
      </Link>
      <Link href="https://www.pinterest.com/fooddotcom/">
        <li>
          <FaPinterestP />
        </li>
      </Link>
      <Link href="https://twitter.com/fooddotcom">
        <li>
          <FaTwitter />
        </li>
      </Link>
      <Link href="https://www.youtube.com/fooddotcom">
        <li>
          <FaYoutube />
        </li>
      </Link>
      <Link href="https://help.food.com/hc/en-us">
        <li>
          <TfiEmail />
        </li>
      </Link>
    </ul>
  );
};

export default FooterSocialLinksComp;
