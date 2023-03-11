import DiminishedLink from "common/DiminishedLink";
import Link from "common/Link";
import {
  RiGithubFill,
  RiGoogleFill,
  RiLinkedinBoxFill,
  RiMailLine,
} from "react-icons/ri";

export default function Biography() {
  return (
    <section className="mt-4 mb-12 flex flex-col items-center gap-12 lg:flex-row">
      <div className="flex min-w-[20rem] grow flex-col items-center gap-4">
        <img
          className="mb-6 aspect-square w-48 rounded-full object-cover"
          src="YufengZheng.jpg"
          alt="Yufeng Zheng"
        />
        <h1 className="text-center text-3xl font-semibold">Yufeng Zheng</h1>
        <h3 className="text-center text-2xl">
          <DiminishedLink href="http://ait.inf.ethz.ch/">
            Advanced Interactive Technologies Lab
          </DiminishedLink>
          ,{" "}
          <DiminishedLink href="http://www.ethz.ch/">ETH Zürich</DiminishedLink>
        </h3>
        <div className="flex gap-2 text-3xl">
          <DiminishedLink href="mailto:yufeng.zheng@inf.ethz.ch">
            <RiMailLine />
          </DiminishedLink>
          <DiminishedLink href="https://github.com/zhengyuf">
            <RiGithubFill />
          </DiminishedLink>
          <DiminishedLink href="https://scholar.google.com/citations?user=n0mmd78AAAAJ&hl">
            <RiGoogleFill />
          </DiminishedLink>
          <DiminishedLink href="https://www.linkedin.com/in/zheng-yufeng/">
            <RiLinkedinBoxFill />
          </DiminishedLink>
        </div>
      </div>
      <div>
        <p className="mt-4 text-justify">
          I'm a doctoral candidate in the{" "}
          <Link href="https://learning-systems.org/">
            Max Plank ETH Center for Learning Systems
          </Link>
          , a joint program between{" "}
          <Link href="http://www.ethz.ch/">ETH Zurich</Link> and{" "}
          <Link href="https://www.is.mpg.de/">
            Max Planck Institute for Intelligent Systems
          </Link>
          . I am supervised by{" "}
          <Link href="https://ait.ethz.ch/people/hilliges/">
            Prof. Otmar Hilliges
          </Link>{" "}
          and{" "}
          <Link href="https://ps.is.mpg.de/~black">Prof. Michael Black</Link>. I
          currently work in{" "}
          <Link href="https://ps.is.mpg.de/">Perceiving Systems</Link> at Max
          Planck Institute in Tuebingen. Prior to joining the CLS doctoral
          program, I obtained my Master's degree in Computer Science from ETH
          Zurich in 2020 and my Bachelor's degree in Electronic Engineering from{" "}
          <Link href="https://www.tsinghua.edu.cn/en/">
            Tsinghua University
          </Link>{" "}
          in 2018.
        </p>
        <p className="mt-4 text-justify">
          My research focuses on learning controllable and photorealistic models
          for human faces and bodies. In particular, I'm currently interested in
          exploring geometry-aware representations by integrating morphable mesh
          models or by leveraging 3D neural radiance fields. Please feel free to
          drop me an e-mail if you'd like to discuss possible research projects
          for your thesis!
        </p>
      </div>
    </section>
  );
}
