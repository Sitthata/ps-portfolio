"use client";

import Typewriter from "typewriter-effect";

export default function TypeWriterComponent({
  displayText,
}: {
  displayText: string[];
}) {
  return (
    <Typewriter
      options={{
        strings: displayText,
        autoStart: true,
        loop: true,
        delay: 150,
      }}
    />
  );
}
