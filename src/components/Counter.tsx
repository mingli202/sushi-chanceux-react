import { useContext } from "react";
import { Order } from "../types";
import { OrderContext } from "../App";

type CounterProps = {
  name: string;
  price: number;
  img: string;
};
export default function Counter({ name, price, img }: CounterProps) {
  const { order, setOrder } = useContext(OrderContext);

  const item = order.find((item) => item.name === name);
  const count: number = item ? item.n : 0;

  return (
    <div className="flex gap-4 items-center">
      <button
        onClick={() => {
          if (count > 0) {
            setOrder(() => {
              const newOrder: Order[] = order.map((_i: Order) => {
                if (_i.name === name) {
                  return {
                    ..._i,
                    n: _i.n - 1,
                  };
                } else {
                  return _i;
                }
              });
              return newOrder.filter((i) => i.n !== 0);
            });
          }
        }}
        className="fa fa-minus rounded-full text-c8 bg-c1 p-2 active:bg-c4 active:text-c2 transition hover:text-c1 hover:bg-c8"
      />

      <span>{count}</span>

      <button
        onClick={() => {
          const isThere = order.find((i) => i.name === name);

          setOrder(
            isThere
              ? order.map((_i: Order) => {
                  if (_i.name === name) {
                    return {
                      ..._i,
                      n: _i.n + 1,
                    };
                  } else {
                    return _i;
                  }
                })
              : [
                  ...order,
                  {
                    name: name,
                    price: price,
                    n: 1,
                    img: `../src/assets/${img}`,
                  },
                ]
          );
        }}
        className="fa fa-plus rounded-full text-c8 bg-c1 p-2 active:bg-c4 active:text-c2 transition hover:text-c1 hover:bg-c8"
      />
    </div>
  );
}
