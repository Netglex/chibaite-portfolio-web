interface PublicationCardProps {
  mediaSrc: string;
  title: JSX.Element;
  authors: JSX.Element;
  proceedings: JSX.Element;
  links: JSX.Element;
}

export default function PublicationCard(props: PublicationCardProps) {
  return (
    <div className="my-4 flex flex-col items-start gap-8 overflow-hidden rounded-lg bg-zinc-50 p-8 dark:bg-zinc-800 lg:flex-row lg:items-center">
      <img
        className="mx-auto w-48 rounded-lg lg:mx-0"
        src={props.mediaSrc}
        alt={props.mediaSrc}
      />
      <div>
        <h4 className="mb-4 text-lg font-semibold">{props.title}</h4>
        <div>{props.authors}</div>
        <div className="mb-4 italic">{props.proceedings}</div>
        <div className="mb-4 flex flex-wrap items-center gap-4">
          {props.links}
        </div>
      </div>
    </div>
  );
}
