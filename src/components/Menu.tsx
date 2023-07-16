import { useEffect, useState } from "react";
import { Recipe } from "../types";
import Counter from "./Counter";

export default function Menu() {
  const [menu, setMenu] = useState();

  useEffect(() => {
    fetch("/sushi-chanceux-react/data.json")
      .then((res: Response) => {
        if (res.ok) {
          return res.json();
        } else {
          throw res;
        }
      })
      .then((res) => {
        setMenu(
          res.map((item: Recipe) => {
            return (
              <div
                key={`${item.name}`}
                className="rounded-xl bg-c7 flex shadow-2xl"
              >
                <div className="rounded-xl basis-1/2 h-auto">
                  <img
                    src={`/sushi-chanceux-react/${item.img}`}
                    alt={`${item.name}`}
                    className="rounded-l-[inherit] object-cover min-h-full"
                  />
                </div>

                <div className="m-4 basis-1/2 flex flex-col">
                  {/* Name */}
                  <p className="text-3xl text-c1 font-bold flex items-center mt-4 mb-4">{`${item.name}`}</p>

                  {/* Description */}
                  {item.desc.map((i) => (
                    <p key={i} className="text-c4 text-xl">
                      {i}
                    </p>
                  ))}

                  {/* Price and counter */}
                  <div className="flex justify-between items-end text-xl h-full mt-4">
                    <p className="text-c2">{`$${item.price}`}</p>
                    <Counter key={item.name} {...item} />
                  </div>
                </div>
              </div>
            );
          })
        );
      })
      .catch((err) => console.log(`Error fetch, ${err}`));
  }, []);

  return (
    <section className="bg-c8 w-full grid grid-cols-2 gap-10 p-10 box-border relative z-10">
      <p className="col-span-2 text-center font-medium text-7xl">Menu</p>
      {menu}
    </section>
  );
}
