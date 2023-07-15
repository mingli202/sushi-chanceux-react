import { createContext, useState } from "react";
import { NavBar } from "./components";
import { Order } from "./types";
import { Outlet } from "react-router-dom";

export const OrderContext = createContext<{
  order: Order[];
  setOrder: React.Dispatch<React.SetStateAction<Order[]>>;
}>({
  order: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setOrder: () => {},
});

function App() {
  const [order, setOrder] = useState<Order[]>([]);

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      <NavBar />
      <div id="wrapper">
        <Outlet />
      </div>
    </OrderContext.Provider>
  );
}

export default App;
