import { Folder, Move, SquareArrowOutUpRight, Variable } from "lucide-react";
import file_manager from "@/../public/file_manager.svg";
import folder_file from "@/../public/folder_file.svg";
import math from "@/../public/math.svg";
import personal_file from "@/../public/personal_file.svg";
import Image from "next/image";
const features = [
  {
    icon: Move,
    title: "Drag & Drop Couture",
    description:
      "Build documents with modular blocks that you can move, duplicate, or remove in seconds—perfect for flexible workflows.",
    img: file_manager,
  },
  {
    icon: Variable,
    title: "Metamorphic Variables",
    description:
      "Insert placeholders and replace them globally with a single click, making personalization fast and error-free.",
    img: math,
  },
  {
    icon: Folder,
    title: "Organized Folders & Templates",
    description:
      "Structure your documents in folders, save reusable templates, and never waste time recreating content.",
    img: folder_file,
  },
  {
    icon: SquareArrowOutUpRight,
    title: "Multi-Format Export & Preview",
    description:
      "Preview your work and export it in PDF, DOCX, or HTML formats—ready for any purpose.",
    img: personal_file,
  },
];
export const Features = () => {
  return (
    <section className="h-dvh w-full px-20 flex flex-col gap-10" id="features">
      <div className="text-center">
        <h2 className="font-italiana text-2xl lg:text-5xl ">
          Powerful Features to Supercharge Your Workflow
        </h2>
        <p className="mx-auto w-1/2 font-light pt-5">
          Discover how our smart editor makes document creation faster, simpler,
          and more flexible. From drag-and-drop blocks to dynamic variables and
          reusable templates, every feature is designed to save you time and
          boost productivity.
        </p>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-10 pb-20">
        {features.map(({ icon: Icon, title, description, img }, i) => (
          <div
            key={i}
            className="rounded-md w-full bg-stone-100 transition-all"
          >
            <div className="w-full h-20 flex items-center px-5 gap-5">
              <span className="bg-white rounded-md w-10 h-10 flex items-center justify-center">
                <Icon />
              </span>
              <h4 className="font-semibold text-lg">{title}</h4>
            </div>
            <div className="flex p-5 gap-5">
              <div className="bg-white rounded-md p-5 overflow-hidden w-1/2 grow">
                <Image
                  src={img}
                  alt={title}
                  className="rounded-md object-cover mx-auto"
                  height={150}
                />
              </div>
              <div className="w-1/2">
                <p>{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
