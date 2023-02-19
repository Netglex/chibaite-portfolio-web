import { Fragment } from "react";
import PublicationCard from "./PublicationCard";

export default function Publications() {
  return (
    <section className="bg-teal-500">
      <h1>Publications</h1>
      <PublicationCard
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
      <PublicationCard
        mediaSrc="SNARFTeaser.gif"
        title={
          <a href="https://xuchen-ethz.github.io/snarf/">
            SNARF: Differentiable Forward Skinning for Animating Non-Rigid
            Neural Implicit Shapes
          </a>
        }
        authors={
          <Fragment>
            <a href="https://ait.ethz.ch/people/xu">X. Chen</a>,{" "}
            <a href="https://ait.ethz.ch/people/zhengyuf">Y. Zheng</a>,{" "}
            <a href="https://ps.is.mpg.de/~black">M. Black</a>,{" "}
            <a href="https://ps.is.mpg.de/~black">O. Hilliges</a>,{" "}
            <a href="http://www.cvlibs.net/">A. Geiger</a>
          </Fragment>
        }
        proceedings={
          <a href="https://cvpr2022.thecvf.com/">
            Computer Vision and Pattern Recognition (CVPR), 2022
          </a>
        }
        links={
          <Fragment>
            <a href="https://ait.ethz.ch/projects/2021/snarf/snarf.bib">
              BibTex
            </a>
            <a href="https://www.youtube.com/watch?v=rCEpFTKjFHE">Youtube</a>
            <a href="https://arxiv.org/abs/2104.03953">PDF</a>
            <a href="https://github.com/xuchen-ethz/snarf">GitHub</a>
            <a href="https://xuchen-ethz.github.io/snarf/">Project Page</a>
          </Fragment>
        }
      />
      <PublicationCard
        mediaSrc="STEDGazeTeaser.gif"
        title={
          <a href="https://ait.ethz.ch/projects/2020/STED-gaze/">
            Self-Learning Transformations for Improving Gaze and Head
            Redirection
          </a>
        }
        authors={
          <Fragment>
            <a href="https://ait.ethz.ch/people/zhengyuf">Y. Zheng</a>,{" "}
            <a href="https://ait.ethz.ch/people/spark">S. Park</a>,{" "}
            <a href="https://ait.ethz.ch/people/zhang">X. Zhang</a>,{" "}
            <a href="https://research.nvidia.com/person/shalini-gupta">
              S. De Mello
            </a>
            , <a href="https://ait.ethz.ch/people/hilliges">O. Hilliges</a>
          </Fragment>
        }
        proceedings={
          <a href="https://cvpr2022.thecvf.com/">
            Computer Vision and Pattern Recognition (CVPR), 2022
          </a>
        }
        links={
          <Fragment>
            <a href="https://ait.ethz.ch/projects/2021/snarf/snarf.bib">
              BibTex
            </a>
            <a href="https://www.youtube.com/watch?v=rCEpFTKjFHE">Youtube</a>
            <a href="https://arxiv.org/abs/2104.03953">PDF</a>
            <a href="https://github.com/xuchen-ethz/snarf">GitHub</a>
            <a href="https://xuchen-ethz.github.io/snarf/">Project Page</a>
          </Fragment>
        }
      />
    </section>
  );
}
