export default function Logo() {
  return (
    <img
      src="/sushi-chanceux-react/logo-transparent.png"
      alt="logo"
      className="h-[5dvh] cursor-pointer"
      onClick={() => {
        // TODO: Optimize scroll up behavior
        const wrapper = document.getElementById("wrapper");
        if (!wrapper) {
          return;
        }
        wrapper.scrollTo(0, 0);
      }}
    />
  );
}
