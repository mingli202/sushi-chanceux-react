// TODO: Make this better styled skull emoji
import { animated, useSpring } from "react-spring";
import CarouselTxt from "./CarouselTxt";
import { useEffect, useRef, useState } from "react";

export default function AboutUs() {
  const [index, setIndex] = useState<number>(0);
  const ref = useRef<HTMLImageElement>(null);

  const [spring, api] = useSpring(() => ({
    opacity: 1,
  }));

  function handleImgChange(index: number) {
    api.start({
      from: {
        opacity: 1,
      },
      to: {
        opacity: 0,
      },
      onResolve: () => {
        if (ref.current) {
          ref.current.src = IMAGES[index];
        }

        api.start({
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        });
      },
    });
  }

  return (
    <section className="w-[100dvw] h-[calc(100dvh-5dvh-3rem)] mt-[calc(5dvh+3rem)] bg-primary text-c8 box-border gap-4 relative">
      <div className="text-xl w-[50%] flex flex-col justify-center box-border pl-28 z-10 relative h-full bg-primary shrink-0">
        <h1 className="text-7xl font-extrabold">About Us</h1>
        <CarouselTxt
          index={index}
          setIndex={setIndex}
          onClick={handleImgChange}
        />
      </div>
      <div className="absolute top-[-25%] left-[50%] -ml-60 h-[150%] w-96 bg-primary z-[1] rounded-r-[100%_50%] blur-lg" />

      <div className="h-full absolute top-0 right-0">
        <animated.img
          src="../src/assets/images/sushi-cook.jpg"
          className="object-cover h-full"
          style={{ ...spring }}
          ref={ref}
        />
      </div>
    </section>
  );
}

const IMAGES = [
  "../src/assets/images/sushi-cook.jpg",
  "../src/assets/images/seefood.jpeg",
  "../src/assets/images/asian-culture.jpeg",
  "../src/assets/images/destination-gps.jpeg",
  "../src/assets/images/art-of-sushi.jpeg"
];
