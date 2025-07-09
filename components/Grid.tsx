import { GridItem } from "../data/data";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

export const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-7xl py-20">
        {GridItem.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg} id={0}          />
        ))}
      </BentoGrid>
    </section>
  );
};
