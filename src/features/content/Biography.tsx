import ThemeSwitch from "features/theme/ThemeSwitch";

export default function Biography() {
  return (
    <section className="bg-blue-400 dark:bg-amber-500">
      <ThemeSwitch />
      <img className="w-48" src="YufengZheng.jpg" alt="Yufeng Zheng" />
      <h1>PhD Student</h1>
      <h2>
        <a href="http://ait.inf.ethz.ch/">
          Advanced Interactive Technologies Lab
        </a>
        , <a href="http://www.ethz.ch/">ETH Zürich</a>
      </h2>
      <div className="bg-yellow-300">
        <p className="mt-4 text-justify">
          I'm a doctoral candidate in the{" "}
          <a href="https://learning-systems.org/">
            Max Plank ETH Center for Learning Systems
          </a>
          , a joint program between <a href="http://www.ethz.ch/">ETH Zurich</a>{" "}
          and{" "}
          <a href="https://www.is.mpg.de/">
            Max Planck Institute for Intelligent Systems
          </a>
          . I am supervised by{" "}
          <a href="https://ait.ethz.ch/people/hilliges/">
            Prof. Otmar Hilliges
          </a>{" "}
          and <a href="https://ps.is.mpg.de/~black">Prof. Michael Black</a>. I
          currently work in{" "}
          <a href="https://ps.is.mpg.de/">Perceiving Systems</a> at Max Planck
          Institute in Tuebingen. Prior to joining the CLS doctoral program, I
          obtained my Master's degree in Computer Science from ETH Zurich in
          2020 and my Bachelor's degree in Electronic Engineering from{" "}
          <a href="https://www.tsinghua.edu.cn/en/">Tsinghua University</a> in
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
