import { ReactNode } from "react";

interface LinkProps {
  className?: string
  href?: string
  children?: ReactNode;
}

export default function Link(props: LinkProps) {
  return (
    <a
      className={` ${props.className}`}
      href={props.href}
    >
      {props.children}
    </a>
  );
}
