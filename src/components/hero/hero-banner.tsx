import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import TypeWriterComponent from "./type-writer";

export default function HeroBanner() {
  return (
    <div className="space-y-5">
      <h1 className={cn("text-2xl font-jetbrain space-y-5")}>
        <span className="font-semibold opacity-100 text-3xl">Hi, I&#39;m</span>
        <span className="text-4xl font-bold text-secondary">
          <TypeWriterComponent
            displayText={[
              "Pattaradanai Srichon",
              "Fullstack Developer",
              "Aspiring Mentor",
              "IT Student with a Passion",
            ]}
          />
        </span>
        <p className="opacity-85 text-lg">
          I am a highly passionated for creating web and mobile applications.
          Let&#39;s work together to bring your ideas to life and create an
          exceptional product.
        </p>
      </h1>
      <Button>About Me</Button>
      <Button variant="link">Download my CV</Button>
    </div>
  );
}
