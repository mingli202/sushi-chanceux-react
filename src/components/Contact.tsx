import { ChangeEvent, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value }: { name: string; value: string } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        "service_cm3a5fr",
        "template_kfwoorh",
        {
          from_name: form.name,
          from_email: form.email,
          to_name: "Ming",
          to_email: "vincentmingli@gmail.com",
          message: form.message,
        },
        "QLw-2olFqTFzTBHug",
      )
      .then(
        () => {
          setSending(false);
          setForm({
            name: "",
            email: "",
            message: "",
          });
          alert("Message Sent!");
        },
        (error) => {
          console.log(error);
          alert("Something went wrong");
        },
      );
  }

  return (
    <section className="w-[100dvw] flex h-[calc(100dvh-5dvh-3rem)] mt-[calc(5dvh+3rem)] bg-primary justify-center">
      {/* Email form */}
      <div className="m-4 basis-3/5 h-[calc(100%-2rem)] bg-c8 shrink-0 flex flex-col">
        <p className="w-full text-center mt-4 text-3xl shrink-0">
          Send Us An Email
        </p>
        <div className="basis-full m-4">
          <form
            className="flex flex-col h-full w-full text-xl"
            onSubmit={handleSubmit}
          >
            <label className="shrink-0">
              <p>Name</p>
              <input
                type="text"
                className="w-full p-1 outline-none placeholder:text-c6"
                required
                autoFocus
                name="name"
                placeholder="What's your name?"
                onChange={handleChange}
                value={form.name}
              />
            </label>

            <label className="shrink-0 mt-4">
              <p>Email</p>
              <input
                type="email"
                className="w-full p-1 outline-none placeholder:text-c6"
                required
                name="email"
                placeholder="What's your email?"
                onChange={handleChange}
                value={form.email}
              />
            </label>

            <label className="basis-full mt-4 flex flex-col">
              <p className="shrink-0">Message</p>
              <textarea
                className="w-full resize-none basis-full p-1 outline-none placeholder:text-c6"
                required
                name="message"
                placeholder="Ask us anything"
                onChange={handleChange}
                value={form.message}
              />
            </label>

            <button
              type="submit"
              className="shrink-0 mt-4 w-fit ml-auto mr-auto p-4 rounded-2xl hover:text-c8 hover:bg-primary transition active:bg-c2"
            >
              {sending ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>

      {/* Some other queries */}
      <div className="basis-full text-c8 m-4 flex flex-col items-center text-xl justify-center relative">
        <i className="fa fa-phone text-9xl" />
        <p className="text-center mt-6 text-3xl">Call Us</p>
        <p className="text-center mt-6">
          Having trouble putting your thoughts into words? Don't want to wait
          for a response? Pick up the phone and call our costumer service
          workers.
        </p>
        <p className="mt-6 font-bold mb-6">(514) 586-1268</p>
        <p className="absolute text-xs bottom-0">
          Source code: https://github.com/mingli202/sushi-chanceux-react
        </p>
      </div>
    </section>
  );
}
