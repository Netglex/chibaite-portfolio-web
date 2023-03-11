import Link from "common/Link";
import ActivityItem from "./ActivityItem";

export default function Activities() {
  return (
    <section className="mb-12">
      <h2 className="mb-6 text-2xl font-semibold">Activities</h2>
      <h3 className="mb-4 text-lg font-semibold">Reviewing</h3>
      <ActivityItem
        date="2023"
        info={<Link href="https://cvpr2023.thecvf.com/">CVPR</Link>}
      />
      <ActivityItem
        date="2023"
        info={<Link href="https://iccv2023.thecvf.com/">ICCV</Link>}
      />
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
