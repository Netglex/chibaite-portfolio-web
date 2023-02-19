import { Fragment } from "react";
import Card from "./Card";

export default function Publications() {
  return (
    <section className="bg-teal-500">
      <h1>Publications</h1>
      <Card
        mediaSrc="IMAvatarTeaser.gif"
        title={
          <a href="https://ait.ethz.ch/projects/2022/IMavatar/">
            I M Avatar: Implicit Morphable Head Avatars from Videos
          </a>
        }
        authors={
          <Fragment>
            <a href="https://ait.ethz.ch/people/zhengyuf">Y. Zheng</a>, V.
            Abrevaya, M. Bühler,{" "}
            <a href="https://ait.ethz.ch/people/xu">X. Chen</a>,{" "}
            <a href="https://ps.is.mpg.de/~black">M. Black</a>,{" "}
            <a href="https://ait.ethz.ch/people/hilliges">O. Hilliges</a>
          </Fragment>
        }
        proceedings={
          <a href="https://cvpr2022.thecvf.com/">
            Computer Vision and Pattern Recognition (CVPR), 2022
          </a>
        }
        links={
          <Fragment>
            <a href="https://ait.ethz.ch/projects/2022/IMavatar/IMavatar.bib">
              BibTex
            </a>
            <a href="https://youtu.be/915baJNX-IU">Youtube</a>
            <a href="https://arxiv.org/abs/2112.07471">arxiv</a>
            <a href="https://github.com/zhengyuf/IMavatar">GitHub</a>
            <a href="https://ait.ethz.ch/projects/2022/IMavatar/">
              Project Page
            </a>
          </Fragment>
        }
      />
    </section>
  );
}
