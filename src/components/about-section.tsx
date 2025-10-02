import { Segment } from "./ui";

export const AboutSection = () => {
  return (
    <>
      <Segment sepBottom>
        <span className="pt-2 pb-2 pl-4 pr-4 text-2xl font-semibold">
          About
        </span>
      </Segment>
      <Segment innerStyle="flex-col p-4 gap-3">
        <p className="font-mono text-sm/6">
          Hi! I'm Rohan Biswas — a full-stack developer who thrives at the
          intersection of mobile and web, with a focus on building systems that
          users actually enjoy interacting with.
        </p>
        <p className="font-mono text-sm/6">
          I specialize in crafting scalable applications using React, React
          Native, Node.js, and TypeScript. Over the past two years, I've
          architected real-time systems, revamped mobile apps, and built
          critical features across platforms at Great Learning and Medbikri.
        </p>
        <p className="font-mono text-sm/6">
          Whether it's solving "unfixable" bugs, optimizing performance, or
          building something from scratch, I enjoy turning technical challenges
          into solutions that make a real impact. When I'm not working, you'll
          find me building side projects—like an offline comic reader or a
          download manager UI—just for the love of solving problems.
        </p>
        <p className="font-mono text-sm/6">
          Let's build something great together.
        </p>
      </Segment>
    </>
  );
};
