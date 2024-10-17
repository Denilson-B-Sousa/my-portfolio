import { TypeAnimation } from "react-type-animation";

export function TypeAnimationWriter() {
  return (
    <TypeAnimation
      sequence={[
        "Desenvolvedor Web Frontend",
        1000,
        "Desenvolvedor Web Backend",
        1000,
        "Desenvolvedor Web Fullstack!",
        1000,
      ]}
      wrapper="span"
      speed={60}
      style={{
        display: "inline-block",
        cursor: "text",
      }}
      cursor={true}
      className="font-MontSerrat font-light text-sm laptop:text-lg uppercase text-purple-500"
    />
  );
}
