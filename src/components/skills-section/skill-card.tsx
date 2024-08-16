import { CardData } from "@/types/type";
import { FaReact } from "react-icons/fa";

export default function SkillCard({ data }: { data: CardData }) {
  const { icon, title } = data;
  return (
    <div className="flex justify-center items-center p-5 gap-3 outline outline-1 rounded-md outline-accent hover:bg-primary hover:text-accent cursor-pointer transition-colors duration-200">
      <div className="text-2xl">{icon}</div>
      <h3>{title}</h3>
    </div>
  );
}
