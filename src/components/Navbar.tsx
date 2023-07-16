import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="flex w-full items-center p-6 box-border text-c4 justify-between fixed top-0 left-0 z-10 bg-primary">
      <Link to="/sushi-chanceux-react/">
        <Logo />
      </Link>

      <Link
        to="/sushi-chanceux-react/contact"
        className="ml-[25%] mr-[-10%] hover:text-c7 hover:font-semibold active:text-c4 transition"
      >
        <button>Contact Us</button>
      </Link>

      <Link
        to="/sushi-chanceux-react/about"
        className="hover:text-c7 hover:font-semibold active:text-c4 transition"
      >
        <button>About</button>
      </Link>

      <Link to="/sushi-chanceux-react/order">
        <button>
          <img
            src="/sushi-chanceux-react/Basket_alt_3@3x.png"
            alt="Order"
            className="h-[5dvh] cursor-pointer hover:outline-c7 hover:outline-2 hover:outline active:outline-c5"
          />
        </button>
      </Link>
    </nav>
  );
}
