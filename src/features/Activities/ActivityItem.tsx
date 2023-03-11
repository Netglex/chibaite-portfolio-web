interface ActivityItemProps {
  date: string;
  info: JSX.Element;
}

export default function ActivityItem(props: ActivityItemProps) {
  return (
    <div className="flex gap-8 mb-1">
      <div>{props.date}</div>
      <div>{props.info}</div>
    </div>
  );
}
