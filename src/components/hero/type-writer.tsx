import Typewriter from "typewriter-effect";

export default function TypeWriterComponent() {
  return (
    <Typewriter
      options={{
        strings: ["Pattaradanai", "FullStack Developer", "Mentor"],
        autoStart: true,
        loop: true,
        // wrapperClassName: "text-secondary",
        delay: 150
      }}
    />
  );
}
