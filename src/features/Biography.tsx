import Link from "common/Link";

export default function Biography() {
  return (
    <section>
      <div>
        <img
          className="aspect-square w-48 rounded-full object-cover"
          src="YufengZheng.jpg"
          alt="Yufeng Zheng"
        />
        <h1>PhD Student</h1>
        <h2>
          <Link href="http://ait.inf.ethz.ch/">
            Advanced Interactive Technologies Lab
          </Link>
          , <Link href="http://www.ethz.ch/">ETH Zürich</Link>
        </h2>
      </div>
      <div>
        <p className="mt-4 text-justify">
          I'm a doctoral candidate in the{" "}
          <Link href="https://learning-systems.org/">
            Max Plank ETH Center for Learning Systems
          </Link>
          , a joint program between <Link href="http://www.ethz.ch/">ETH Zurich</Link>{" "}
          and{" "}
          <Link href="https://www.is.mpg.de/">
            Max Planck Institute for Intelligent Systems
          </Link>
          . I am supervised by{" "}
          <Link href="https://ait.ethz.ch/people/hilliges/">
            Prof. Otmar Hilliges
          </Link>{" "}
          and <Link href="https://ps.is.mpg.de/~black">Prof. Michael Black</Link>. I
          currently work in{" "}
          <Link href="https://ps.is.mpg.de/">Perceiving Systems</Link> at Max Planck
          Institute in Tuebingen. Prior to joining the CLS doctoral program, I
          obtained my Master's degree in Computer Science from ETH Zurich in
          2020 and my Bachelor's degree in Electronic Engineering from{" "}
          <Link href="https://www.tsinghua.edu.cn/en/">Tsinghua University</Link> in
          2018.
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
