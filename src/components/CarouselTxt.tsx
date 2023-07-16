import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Dispatch } from "react";
import { animated, useSpring } from "react-spring";

type Props = {
  index: number;
  setIndex: Dispatch<React.SetStateAction<number>>;
  onClick: (current: number, next: number) => void;
};
export default function CarouselTxt({ index, setIndex, onClick }: Props) {
  const [spring, controller] = useSpring(() => ({
    x: "0%",
  }));

  function handleClick(n: number) {
    let nextIndex: number;

    if (index + n >= TEXTS.length) {
      nextIndex = 0;
    } else if (index + n < 0) {
      nextIndex = TEXTS.length - 1;
    } else {
      nextIndex = index + n;
    }

    onClick(index, nextIndex);

    controller.start({
      from: {
        x: `-${index * 100}%`,
      },
      to: {
        x: `-${nextIndex * 100}%`,
      },
    });

    setIndex(nextIndex);
  }

  return (
    <>
      <div className={`mt-8 relative overflow-hidden w-full`}>
        <animated.div className={`flex relative`} style={{ ...spring }}>
          {TEXTS.map((item) => {
            return (
              <p
                key={item.id}
                className={`w-full shrink-0 relative left-[${
                  item.id * 100
                }%] box-border pr-4`}
              >
                {item.txt}
              </p>
            );
          })}
        </animated.div>
      </div>
      <div className="mt-8 flex">
        <button
          className="rounded-full bg-c1 p-7 flex items-center justify-center ml-4 hover:bg-c8 hover:text-c1 transition active:bg-c5"
          onClick={() => handleClick(-1)}
        >
          <FontAwesomeIcon icon={faArrowLeft} fontSize={40} />
        </button>
        <button
          className="rounded-full bg-c1 p-7 flex items-center justify-center ml-4 hover:bg-c8 hover:text-c1 transition active:bg-c5"
          onClick={() => handleClick(1)}
        >
          <FontAwesomeIcon icon={faArrowRight} fontSize={40} />
        </button>
      </div>
    </>
  );
}

type AboutTexts = {
  id: number;
  txt: string;
};

const TEXTS: AboutTexts[] = [
  {
    id: 0,
    txt: "At Sushi Chanceux, our mission is to make fresh and high-quality sushi accessible to everyone. Led by our experienced chef with over 10 years of expertise, we create delectable sushi dishes that combine traditional Asian flavors with a modern twist.",
  },
  {
    id: 1,
    txt: "We believe that everyone deserves to savor the delicate tastes and textures of authentic sushi. By using only the finest locally and internationally sourced ingredients, we ensure that each bite is a symphony of flavors that will transport your taste buds to new heights.",
  },
  {
    id: 2,
    txt: "We're more than just a sushi restaurant. We're passionate about sharing the beauty of Asian culture. Through our carefully crafted menu and warm atmosphere, we invite you to celebrate the rich heritage of Asian cuisine and create lasting memories with friends and family.",
  },
  {
    id: 3,
    txt: "Convenience is important to us. That's why we offer takeout and delivery services, ensuring that you can enjoy our culinary creations wherever you are. Whether you're a seasoned sushi enthusiast or new to the world of Japanese delicacies, we welcome you to join us on this culinary journey.",
  },
  {
    id: 4,
    txt: "Experience the extraordinary at Sushi Chanceux, where every bite is a chance to savor the art of sushi and celebrate the flavors that unite us all.",
  },
];
