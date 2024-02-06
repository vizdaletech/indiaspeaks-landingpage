import Link from "next/link";
import { usePathname } from "next/navigation";

const DropDown = ({ isClicked, links }) => {
//   const pathname = usePathname();
  return (
    <ul
      className={`${
        isClicked ? `h-68` : `h-0`
      } transition-all overflow-hidden text-white`}
    >
      {links.map((link) => (
        <li className="center-section mb-5 block text-left" key={link.link}>
          <Link
            href={`/${link.link}`}
          >
            {link.content}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DropDown;
