import Image from "next/image";
import React from "react";
import Reveal from "../Reveal";

type Props = {
  id: number;
  image: string;
  company: string;
  role: string;
  description: string[];
  dates: string;
};

const Experience = ({
  id,
  image,
  company,
  role,
  description,
  dates,
}: Props) => {
  return (
    <Reveal initialX={id % 2 === 0 ? -60 : 60} delay={0.5 * id}>
      <div className="card flex flex-col items-stretch w-full max-w-screen-lg px-6 py-[27px] md:px-[33px] gap-3">
        <div className="flex flex-col items-start md:flex-row gap-1 md:gap-0 md:justify-between">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <Image src={image} alt={`image${company}`} width={18} height={18} />
            <h3 className="text-xl font-medium">{company}</h3>
          </div>
          <p className="text-base md:text-xl font-medium">{role}</p>
        </div>
        <ul className="list-disc ml-6 text-sm md:text-base space-y-1">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <p className="text-sm/l md:text-base">{dates}</p>
      </div>
    </Reveal>
  );
};

export default Experience;
