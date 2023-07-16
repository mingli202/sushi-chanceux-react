// TODO: Make this better styled skull emoji
import { animated, useSpring } from "react-spring";
import CarouselTxt from "./CarouselTxt";
import { useRef, useState } from "react";

export default function AboutUs() {
  const [index, setIndex] = useState<number>(0);

  const images = useRef(
    IMAGES.map((img, i) => {
      return (
        <Img
          url={img}
          key={`image-${i}`}
          state={i === index ? "active" : "inactive"}
        />
      );
    })
  );

  function handleImgChange(current: number, next: number) {
    images.current = IMAGES.map((img, i) => {
      let state: "active" | "inactive" | "out" | "in" = "inactive";

      if (i === current) {
        state = "out";
      } else if (i === next) {
        state = "in";
      }

      return <Img url={img} key={`image-${i}`} state={state} />;
    });
  }

  return (
    <section className="w-[100dvw] h-[calc(100dvh-5dvh-3rem)] mt-[calc(5dvh+3rem)] bg-primary text-c8 box-border gap-4 relative overflow-hidden">
      <div className="text-xl w-[50%] flex flex-col justify-center box-border pl-28 z-10 relative h-full bg-primary shrink-0">
        <h1 className="text-7xl font-extrabold">About Us</h1>
        <CarouselTxt
          index={index}
          setIndex={setIndex}
          onClick={handleImgChange}
        />
      </div>
      <div className="absolute top-[-25%] left-[50%] -ml-60 h-[150%] w-96 bg-primary z-[1] rounded-r-[100%_50%] blur-lg" />

      {images.current}
    </section>
  );
}

type ImgProps = {
  url: string;
  state: "active" | "inactive" | "out" | "in";
};

function Img({ url, state }: ImgProps) {
  const [spring, api] = useSpring(() => ({
    opacity: state === "inactive" ? 0 : 1,
  }));

  if (state === "out") {
    api.start({
      from: {
        opacity: 1,
      },
      to: {
        opacity: 0,
      },
    });
  } else if (state === "in") {
    api.start({
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    });
  }

  return (
    <div className="h-full absolute top-0 right-0">
      <animated.img
        src={`${url}`}
        className="object-cover h-full"
        style={{ ...spring }}
      />
    </div>
  );
}

const IMAGES = [
  "/sushi-chanceux-react/images/sushi-cook.jpg",
  "/sushi-chanceux-react/images/seefood.jpeg",
  "/sushi-chanceux-react/images/asian-culture.jpeg",
  "/sushi-chanceux-react/images/destination-gps.jpeg",
  "/sushi-chanceux-react/images/art-of-sushi.jpeg",
];
