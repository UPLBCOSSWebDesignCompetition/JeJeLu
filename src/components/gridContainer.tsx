import { cn } from "../utils/cn.tsx";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid.tsx";
import { IconBulb } from "@tabler/icons-react";

// import images locally
import image1 from "../assets/gridImages/1-World Economic Forum.jpg";
import image2 from "../assets/gridImages/2-JSTOR Daily.jpg";
import image3 from "../assets/gridImages/3-LoveToKnow.jpg";
import image4 from "../assets/gridImages/4-Monash University.jpg";
import image5 from "../assets/gridImages/5-The Guardian.jpg";

export function GridContainer() {
  return (
    <BentoGrid className="max-w-7xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = ({ imageUrl }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    {imageUrl && <img src={imageUrl} alt="Skeleton Image" className="w-full h-full object-cover rounded-xl" />}
  </div>
);

const items = [
  {
    title: "Energy Poverty",
    description: "Over 800 million people around the world lack access to electricity, hindering their ability to meet basic needs and limiting economic opportunities.",
    header: <Skeleton imageUrl={image1} />,
    icon: <IconBulb className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Health Impacts",
    description: "Traditional cooking methods, often involving solid fuels, contribute to indoor air pollution, causing respiratory diseases and negatively impacting the health of millions.",
    header: <Skeleton imageUrl={image2} />,
    icon: <IconBulb className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Environmental Degradation",
    description: "Reliance on non-renewable energy sources contributes to environmental degradation, including climate change, air pollution, and resource depletion.",
    header: <Skeleton imageUrl={image3} />,
    icon: <IconBulb className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Economic Disparities",
    description:
      "Lack of access to affordable and reliable energy hampers economic growth, perpetuating poverty cycles in many communities. The World Bank estimates that energy poverty can reduce GDP growth in some African countries by up to 2% per year.",
    header: <Skeleton imageUrl={image4} />,
    icon: <IconBulb className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Educational Barriers",
    description: "Limited access to electricity affects educational opportunities, hindering students' ability to study after dark and limiting access to digital resources.",
    header: <Skeleton imageUrl={image5} />,
    icon: <IconBulb className="h-4 w-4 text-neutral-500" />,
  }
];
