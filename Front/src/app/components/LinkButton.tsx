import Link from "next/link";
import { IconType } from "react-icons/lib";

type LinkButtonProps = {
  href: string;
  text: string;
  Icon?: IconType;
};
function LinkButton({ href, text, Icon }: LinkButtonProps) {
  return (
    <Link
      className="hover:text-indigo-500 text-lg font-normal flex flex-row items-center gap-2"
      href={href}
    >
      {Icon && <Icon />}
      <p>{text}</p>
    </Link>
  );
}

export default LinkButton;
