import DiminishedLink from "common/DiminishedLink";
import Link from "common/Link";
import {
  RiBookMarkLine,
  RiFileTextLine,
  RiGithubFill,
  RiPagesLine,
  RiYoutubeFill,
} from "react-icons/ri";
import PublicationCard from "./PublicationCard";
import PublicationLink from "./PublicationLink";

export default function Publications() {
  return (
    <section className="mb-12">
      <h2 className="mb-6 text-2xl font-semibold">Publications</h2>
      <PublicationCard
        mediaSrc="PointAvatarTeaser.gif"
        title={
          <DiminishedLink href="https://zhengyuf.github.io/PointAvatar/">
            PointAvatar: Deformable Point-based Head Avatars from Videos
          </DiminishedLink>
        }
        authors={
          <>
            <Link
              className="font-semibold"
              href="https://ait.ethz.ch/people/zhengyuf"
            >
              Y. Zheng
            </Link>
            , W. Yifan, G. Wetzstein, M. Black,{" "}
            <Link href="https://ait.ethz.ch/people/hilliges">O. Hilliges</Link>
          </>
        }
        proceedings={
          <DiminishedLink href="https://cvpr2023.thecvf.com/">
            Computer Vision and Pattern Recognition (CVPR), 2023
          </DiminishedLink>
        }
        links={
          <>
            <PublicationLink href="https://ait.ethz.ch/projects/2023/pointavatar/pointavatar.bib">
              <RiBookMarkLine /> BibTex
            </PublicationLink>
            <PublicationLink href="https://youtu.be/wll_XtgpU7U">
              <RiYoutubeFill /> Video
            </PublicationLink>
            <PublicationLink href="https://arxiv.org/pdf/2212.08377.pdf">
              <RiFileTextLine /> PDF
            </PublicationLink>
            <PublicationLink href="https://github.com/zhengyuf/pointavatar">
              <RiGithubFill /> GitHub
            </PublicationLink>
            <PublicationLink href="https://zhengyuf.github.io/PointAvatar/">
              <RiPagesLine /> Project
            </PublicationLink>
          </>
        }
      />
      <PublicationCard
        mediaSrc="IMAvatarTeaser.gif"
        title={
          <DiminishedLink href="https://ait.ethz.ch/projects/2022/IMavatar/">
            I M Avatar: Implicit Morphable Head Avatars from Videos
          </DiminishedLink>
        }
        authors={
          <>
            <Link
              className="font-semibold"
              href="https://ait.ethz.ch/people/zhengyuf"
            >
              Y. Zheng
            </Link>
            , V. Abrevaya, M. Bühler,{" "}
            <Link href="https://ait.ethz.ch/people/xu">X. Chen</Link>,{" "}
            <Link href="https://ps.is.mpg.de/~black">M. Black</Link>,{" "}
            <Link href="https://ait.ethz.ch/people/hilliges">O. Hilliges</Link>
          </>
        }
        proceedings={
          <DiminishedLink href="https://cvpr2022.thecvf.com/">
            Computer Vision and Pattern Recognition (CVPR), 2022
          </DiminishedLink>
        }
        links={
          <>
            <PublicationLink href="https://ait.ethz.ch/projects/2022/IMavatar/IMavatar.bib">
              <RiBookMarkLine /> BibTex
            </PublicationLink>
            <PublicationLink href="https://youtu.be/915baJNX-IU">
              <RiYoutubeFill /> Video
            </PublicationLink>
            <PublicationLink href="https://arxiv.org/abs/2112.07471">
              <RiFileTextLine /> PDF
            </PublicationLink>
            <PublicationLink href="https://github.com/zhengyuf/IMavatar">
              <RiGithubFill /> GitHub
            </PublicationLink>
            <PublicationLink href="https://ait.ethz.ch/projects/2022/IMavatar/">
              <RiPagesLine /> Project
            </PublicationLink>
          </>
        }
      />
      <PublicationCard
        mediaSrc="SNARFTeaser.gif"
        title={
          <DiminishedLink href="https://xuchen-ethz.github.io/snarf/">
            SNARF: Differentiable Forward Skinning for Animating Non-Rigid
            Neural Implicit Shapes
          </DiminishedLink>
        }
        authors={
          <>
            <Link href="https://ait.ethz.ch/people/xu">X. Chen</Link>,{" "}
            <Link
              className="font-semibold"
              href="https://ait.ethz.ch/people/zhengyuf"
            >
              Y. Zheng
            </Link>
            , <Link href="https://ps.is.mpg.de/~black">M. Black</Link>,{" "}
            <Link href="https://ps.is.mpg.de/~black">O. Hilliges</Link>,{" "}
            <Link href="http://www.cvlibs.net/">A. Geiger</Link>
          </>
        }
        proceedings={
          <DiminishedLink href="http://iccv2021.thecvf.com/">
            International Conference on Computer Vision (ICCV), 2021
          </DiminishedLink>
        }
        links={
          <>
            <PublicationLink href="https://ait.ethz.ch/projects/2021/snarf/snarf.bib">
              <RiBookMarkLine /> BibTex
            </PublicationLink>
            <PublicationLink href="https://www.youtube.com/watch?v=rCEpFTKjFHE">
              <RiYoutubeFill /> Video
            </PublicationLink>
            <PublicationLink href="https://arxiv.org/abs/2104.03953">
              <RiFileTextLine /> PDF
            </PublicationLink>
            <PublicationLink href="https://github.com/xuchen-ethz/snarf">
              <RiGithubFill /> GitHub
            </PublicationLink>
            <PublicationLink href="https://xuchen-ethz.github.io/snarf/">
              <RiPagesLine /> Project
            </PublicationLink>
          </>
        }
      />
      <PublicationCard
        mediaSrc="STEDGazeTeaser.gif"
        title={
          <DiminishedLink href="https://ait.ethz.ch/projects/2020/STED-gaze/">
            Self-Learning Transformations for Improving Gaze and Head
            Redirection
          </DiminishedLink>
        }
        authors={
          <>
            <Link
              className="font-semibold"
              href="https://ait.ethz.ch/people/zhengyuf"
            >
              Y. Zheng
            </Link>
            , <Link href="https://ait.ethz.ch/people/spark">S. Park</Link>,{" "}
            <Link href="https://ait.ethz.ch/people/zhang">X. Zhang</Link>,{" "}
            <Link href="https://research.nvidia.com/person/shalini-gupta">
              S. De Mello
            </Link>
            ,{" "}
            <Link href="https://ait.ethz.ch/people/hilliges">O. Hilliges</Link>
          </>
        }
        proceedings={
          <DiminishedLink href="https://nips.cc/">
            Neural Information Processing Systems (NeurIPS), 2020
          </DiminishedLink>
        }
        links={
          <>
            <PublicationLink href="https://ait.ethz.ch/projects/2020/STED-gaze/yufengzheng2020nips.bib">
              <RiBookMarkLine /> BibTex
            </PublicationLink>
            <PublicationLink href="https://arxiv.org/abs/2010.12307">
              <RiFileTextLine /> PDF
            </PublicationLink>
            <PublicationLink href="https://github.com/zhengyuf/STED-gaze">
              <RiGithubFill /> GitHub
            </PublicationLink>
            <PublicationLink href="https://ait.ethz.ch/projects/2020/STED-gaze/">
              <RiPagesLine /> Project
            </PublicationLink>
          </>
        }
      />
    </section>
  );
}
