import Link from "common/Link";
import PublicationCard from "./PublicationCard";

export default function Publications() {
  return (
    <section className="bg-teal-500">
      <h1>Publications</h1>
      <PublicationCard
        mediaSrc="IMAvatarTeaser.gif"
        title={
          <Link href="https://ait.ethz.ch/projects/2022/IMavatar/">
            I M Avatar: Implicit Morphable Head Avatars from Videos
          </Link>
        }
        authors={
          <>
            <Link href="https://ait.ethz.ch/people/zhengyuf">Y. Zheng</Link>, V.
            Abrevaya, M. Bühler,{" "}
            <Link href="https://ait.ethz.ch/people/xu">X. Chen</Link>,{" "}
            <Link href="https://ps.is.mpg.de/~black">M. Black</Link>,{" "}
            <Link href="https://ait.ethz.ch/people/hilliges">O. Hilliges</Link>
          </>
        }
        proceedings={
          <Link href="https://cvpr2022.thecvf.com/">
            Computer Vision and Pattern Recognition (CVPR), 2022
          </Link>
        }
        links={
          <>
            <Link href="https://ait.ethz.ch/projects/2022/IMavatar/IMavatar.bib">
              BibTex
            </Link>
            <Link href="https://youtu.be/915baJNX-IU">Youtube</Link>
            <Link href="https://arxiv.org/abs/2112.07471">arxiv</Link>
            <Link href="https://github.com/zhengyuf/IMavatar">GitHub</Link>
            <Link href="https://ait.ethz.ch/projects/2022/IMavatar/">
              Project Page
            </Link>
          </>
        }
      />
      <PublicationCard
        mediaSrc="SNARFTeaser.gif"
        title={
          <Link href="https://xuchen-ethz.github.io/snarf/">
            SNARF: Differentiable Forward Skinning for Animating Non-Rigid
            Neural Implicit Shapes
          </Link>
        }
        authors={
          <>
            <Link href="https://ait.ethz.ch/people/xu">X. Chen</Link>,{" "}
            <Link href="https://ait.ethz.ch/people/zhengyuf">Y. Zheng</Link>,{" "}
            <Link href="https://ps.is.mpg.de/~black">M. Black</Link>,{" "}
            <Link href="https://ps.is.mpg.de/~black">O. Hilliges</Link>,{" "}
            <Link href="http://www.cvlibs.net/">A. Geiger</Link>
          </>
        }
        proceedings={
          <Link href="https://cvpr2022.thecvf.com/">
            Computer Vision and Pattern Recognition (CVPR), 2022
          </Link>
        }
        links={
          <>
            <Link href="https://ait.ethz.ch/projects/2021/snarf/snarf.bib">
              BibTex
            </Link>
            <Link href="https://www.youtube.com/watch?v=rCEpFTKjFHE">
              Youtube
            </Link>
            <Link href="https://arxiv.org/abs/2104.03953">PDF</Link>
            <Link href="https://github.com/xuchen-ethz/snarf">GitHub</Link>
            <Link href="https://xuchen-ethz.github.io/snarf/">
              Project Page
            </Link>
          </>
        }
      />
      <PublicationCard
        mediaSrc="STEDGazeTeaser.gif"
        title={
          <Link href="https://ait.ethz.ch/projects/2020/STED-gaze/">
            Self-Learning Transformations for Improving Gaze and Head
            Redirection
          </Link>
        }
        authors={
          <>
            <Link href="https://ait.ethz.ch/people/zhengyuf">Y. Zheng</Link>,{" "}
            <Link href="https://ait.ethz.ch/people/spark">S. Park</Link>,{" "}
            <Link href="https://ait.ethz.ch/people/zhang">X. Zhang</Link>,{" "}
            <Link href="https://research.nvidia.com/person/shalini-gupta">
              S. De Mello
            </Link>
            ,{" "}
            <Link href="https://ait.ethz.ch/people/hilliges">O. Hilliges</Link>
          </>
        }
        proceedings={
          <Link href="https://cvpr2022.thecvf.com/">
            Computer Vision and Pattern Recognition (CVPR), 2022
          </Link>
        }
        links={
          <>
            <Link href="https://ait.ethz.ch/projects/2021/snarf/snarf.bib">
              BibTex
            </Link>
            <Link href="https://www.youtube.com/watch?v=rCEpFTKjFHE">
              Youtube
            </Link>
            <Link href="https://arxiv.org/abs/2104.03953">PDF</Link>
            <Link href="https://github.com/xuchen-ethz/snarf">GitHub</Link>
            <Link href="https://xuchen-ethz.github.io/snarf/">
              Project Page
            </Link>
          </>
        }
      />
    </section>
  );
}
