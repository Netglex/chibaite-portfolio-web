import { Fragment } from "react";
import ActivityItem from "./ActivityItem";

export default function Activities() {
  return (
    <section>
      <h1>Activities</h1>
      <h2>Reviewing</h2>
      <ActivityItem
        date="2022"
        info={<a href="https://cvpr2022.thecvf.com/">CVPR</a>}
      />
      <ActivityItem
        date="2020"
        info={
          <Fragment>
            <a href="https://openeyes-workshop.github.io/">OpenEyes</a> workshop
            at <a href="https://eccv2020.eu/">ECCV</a>
          </Fragment>
        }
      />
    </section>
  );
}
