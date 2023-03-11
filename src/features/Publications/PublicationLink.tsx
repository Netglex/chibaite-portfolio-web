import DiminishedLink from "common/DiminishedLink";
import { ReactNode } from "react";

interface PublicationLinkProps {
  href?: string;
  children?: ReactNode;
}

export default function PublicationLink(props: PublicationLinkProps) {
  return (
    <DiminishedLink
      className="flex items-center gap-1"
      href={props.href}
    >
      {props.children}
    </DiminishedLink>
  );
}
