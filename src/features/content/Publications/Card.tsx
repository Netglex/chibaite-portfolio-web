export interface CardProps {
  mediaSrc: string;
  title: JSX.Element;
  authors: JSX.Element;
  proceedings: JSX.Element;
  links: JSX.Element;
}

export default function Card(props: CardProps) {
  return (
    <div className="bg-cyan-500 dark:bg-purple-300">
      <img className="w-48" src={props.mediaSrc} alt={props.mediaSrc} />
      <h2>{props.title}</h2>
      <div className="flex">
        <div>Authors</div>
        <div>{props.authors}</div>
      </div>
      <div className="flex">
        <div>In proceedings</div>
        <div>{props.proceedings}</div>
      </div>
      <div>{props.links}</div>
    </div>
  );
}
