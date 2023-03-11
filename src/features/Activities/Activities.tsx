import Link from "common/Link";
import ActivityItem from "./ActivityItem";

export default function Activities() {
  return (
    <section>
      <h1>Activities</h1>
      <h2>Reviewing</h2>
      <ActivityItem
        date="2022"
        info={<Link href="https://cvpr2022.thecvf.com/">CVPR</Link>}
      />
      <ActivityItem
        date="2020"
        info={
          <>
            <Link href="https://openeyes-workshop.github.io/">OpenEyes</Link>{" "}
            workshop at <Link href="https://eccv2020.eu/">ECCV</Link>
          </>
        }
      />
    </section>
  );
}
