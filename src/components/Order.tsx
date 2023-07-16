import { useContext, useState } from "react";
import { OrderContext } from "../App";
import { Order } from "../types";
import Counter from "./Counter";
import emailjs from "@emailjs/browser";

export default function OrderSection() {
  const { order } = useContext(OrderContext);
  const [sending, setSending] = useState<boolean>(false);

  const sum = order
    .map((item: Order) => item.price * item.n)
    .reduce((a, b) => a + b, 0);

  function handleClick() {
    if (order.length === 0) {
      alert("You haven't selected any item");
      return;
    }

    setSending(true);

    const content: string[] = order.map(
      (item: Order) => `${item.name} x${item.n}`
    );

    content.push(
      "<hr>",
      `Subtotal: $${sum.toFixed(2)}`,
      `TPS: $${(sum * 0.05).toFixed(2)}`,
      `TVQ: $${(sum * 0.09975).toFixed(2)}`,
      `TOTAL: $${(sum * (0.09975 + 0.05) + sum).toFixed(2)}`
    );

    const msg: string = content.join("<br>");

    emailjs
      .send(
        "service_cm3a5fr",
        "template_kfwoorh",
        {
          from_name: "Online Order",
          to_name: "Ming",
          to_email: "vincentmingli@gmail.com",
          message: `New Order: <hr>${msg}`,
        },
        "QLw-2olFqTFzTBHug"
      )
      .then(
        () => {
          setSending(false);
          alert("Your Order has been placed");
        },
        (error) => {
          console.log(error);
          alert("Something went wrong");
        }
      );
  }

  return (
    <>
      <section className="w-[100dvw] min-h-[calc(100dvh-5dvh-3rem)] flex mt-[calc(5dvh+3rem)] bg-primary">
        {/* Left side */}
        <div className="basis-1/2 shrink-0 bg-c8">
          <p className="m-6 w-full text-center text-3xl">My Order</p>

          {order.map((item: Order) => {
            return (
              <div
                className="bg-c7 rounded-2xl h-20 m-5 flex items-center shadow-xl"
                key={item.name}
              >
                <img
                  src={`/sushi-chanceux-react/${item.img}`}
                  alt={item.name}
                  className="aspect-square object-cover h-full rounded-l-[inherit]"
                />
                <p className="text-xl ml-4 flex-shrink-0">{item.name}</p>
                <div className="flex justify-end basis-full mr-4">
                  <Counter {...item} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right side */}
        <div className="text-c8 box-border basis-1/2 p-8">
          <div className="border-c8 border-4 border-solid w-full h-full flex flex-col">
            {order.map((item: Order) => {
              return (
                <Line
                  key={item.name}
                  text={item.name}
                  num={(item.price * item.n).toFixed(2)}
                />
              );
            })}

            <div className="w-11/12 border-c5 border-solid border ml-auto mr-auto mt-5" />

            <Line text="Subtotal" num={sum.toFixed(2)} />

            <Line text="TPS" num={(sum * 0.05).toFixed(2)} />

            <Line text="TVQ" num={(sum * 0.09975).toFixed(2)} />

            <div className="w-11/12 border-c5 border-solid border ml-auto mr-auto mt-5" />

            <Line
              text="TOTAL"
              num={(sum * (0.09975 + 0.05) + sum).toFixed(2)}
              total
            />

            <div className="w-full flex justify-center basis-full items-end text-xl mb-5">
              <button
                className="p-5 rounded-xl text-primary bg-c6 hover:bg-c8 transition duration-300 hover:translate-x-1 hover:-translate-y-1 active:bg-c4"
                onClick={handleClick}
              >
                {sending ? "Placing..." : "Place Order"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Line({
  text,
  num,
  total,
}: {
  text: string;
  num: string;
  total?: boolean;
}) {
  return (
    <div
      className={`flex items-center box-border pt-5 pl-5 pr-5 w-full shrink-0 ${
        total ? "text-3xl" : "text-xl"
      }`}
    >
      <p className="italic shrink-0">{text}</p>
      <p className="font-semibold basis-full text-end">${num}</p>
    </div>
  );
}
