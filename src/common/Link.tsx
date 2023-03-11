import { ReactNode } from "react";

interface LinkProps {
  className?: string;
  href?: string;
  children?: ReactNode;
}

export default function Link(props: LinkProps) {
  return (
    <a
      className={`rounded text-sky-500 hover:text-sky-700 focus:outline focus:outline-2 focus:outline-sky-300 dark:text-sky-300 dark:hover:text-sky-600 dark:focus:outline-sky-600 ${props.className}`}
      href={props.href}
    >
      {props.children}
    </a>
  );
}
