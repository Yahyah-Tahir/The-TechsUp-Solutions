import { Spotlight } from "./ui/spotlight";
import { cn } from "../lib/utils";
import { TextGenerateEffect } from "./ui/textgenerateeffect";


export const Hero = () => {
  return (
    <section className="">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"/>
        
        <Spotlight className="left-40 top-28 h-[80vh] w-[50vw]" 
          fill="blue"/>
      </div>
      {/* Dot Grid Background */}
      <div className="relative flex h-screen  w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="z-20 bg-gradient-to-b from-neutral-200 to-blue-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
            The TechsUp Solutions
          </h2>
          <TextGenerateEffect
          words="Transforming ideas into seamless digital experiences"
          className="text-ablue-500"
          duration={2}
          />

        </div>
      </div>
      </div>
    
    </section>
  );
};