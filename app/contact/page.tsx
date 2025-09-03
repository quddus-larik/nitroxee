"use client"
import React, { useState, useEffect } from "react";
import { Form, Input, Button, Textarea, Tooltip, addToast, Chip } from "@heroui/react";
import {
  FaGithubAlt,
  FaThreads,
} from "react-icons/fa6";
import {
  FaCircle,
  FaLinkedinIn,
  FaStackOverflow,
  FaTelegramPlane,
} from "react-icons/fa";

const Page: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const [action, setAction] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setAction("sending");

      const res = await fetch("/api/v1/smtp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setAction("success");
        setFormData({ name: "", email: "", description: "" });
      } else {
        setAction("error");
      }
    } catch {
      setAction("error");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      description: "",
    });
    setAction("reset");
  };

  console.log(action);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const socialLinks = [
    {
      name: "Github",
      icon: <FaGithubAlt className="text-xl text-slate-50" />,
      url: "https://github.com/quddus-larik", // Replace with your actual URL
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn className="text-xl text-sky-500" />,
      url: "https://www.linkedin.com/in/quddus-larik/", // Replace with your actual URL
    },
    {
      name: "Stack Overflow",
      icon: <FaStackOverflow className="text-xl text-orange-500" />,
      url: "https://stackoverflow.com/users/29026249/quddus-larik", // Replace with your actual URL
    },
    {
      name: "Threads",
      icon: <FaThreads className="text-xl text-white" />,
      url: "YOUR_THREADS_URL", // Replace with your actual URL
    },
    {
      name: "Telegram",
      icon: <FaTelegramPlane className="text-xl text-sky-300" />,
      url: "https://t.me/quddus", // Replace with your actual URL
    },
  ];

  if (action === "success") {
    addToast({ title: "Email", description: "Message sent successfully! Thanks for contacting Me", color: "success" });
  }

  return (
    <div className="text-white bg-slate-950">
      <div className="flex flex-col gap-2 pb-10 lg:flex-row lg:pb-0">
        <div className="flex flex-col w-full gap-6 px-8 pt-16 grow lg:pt-40 lg:px-14 bg-slate-950">
          <div>
            <h1 className="text-lg lg:text-xl text-slate-50 font-poppins-rg">
              Get In <span className="text-lime-300">Touch</span>
            </h1>
            <h1 className="text-2xl font-medium lg:text-6xl text-slate-50 font-clash">
              let's <span className="text-lime-300">Chat</span>, React out to Me
            </h1>
          </div>
          <Form
            className="flex flex-col w-full gap-4"
            onSubmit={handleSubmit}
            onReset={handleReset}
          >
            <Input
              isRequired
              name="name"
              type="text"
              label="Username"
              placeholder="Enter your username"
              labelPlacement="inside"
              value={formData.name}
              onChange={handleChange}
              size="md"
            />
            <Input
              isRequired
              name="email"
              type="email"
              label="Email"
              placeholder="Enter your email"
              labelPlacement="inside"
              value={formData.email}
              onChange={handleChange}
              size="md"
            />
            <Textarea
              isRequired
              name="description"
              label="Description"
              placeholder="Write your message..."
              labelPlacement="inside"
              value={formData.description}
              onChange={handleChange}
              size="md"
            />
            <div className="flex flex-wrap justify-between">
              <Button
                size="md"
                className="w-full bg-lime-300 text-slate-950 font-poppins-bd sm:w-auto"
                type="submit"
              >
                Send
              </Button>

            </div>
          </Form>
          {action === "sending" && (
            <Chip color="warning">Sending message...</Chip>
          )}
          {action === "success" && (
            <Chip color="success">Message sent successfully!</Chip>
          )
          }
          {action === "error" && (
            <Chip color="danger">Failed to send. Try again later.</Chip>
          )}
        </div>
        <div className="flex flex-col items-center w-full h-screen gap-6 px-8 pt-10 lg:pt-40 lg:px-14 bg-slate-950">
          <div className="flex flex-col w-full gap-4 p-4 rounded-2xl bg-slate-900">
            <p className="flex items-center gap-2">
              <FaCircle className="text-sm text-lime-400" />
              <span className="font-poppins-rg text-tiny">Avaliable about work</span>
            </p>
            <p className="font-poppins-rg text-small lg:text-md">
              Feel free to reach out, whether it's about a project or just to say hi! I'd love to hear from you and will get back to you promptly.
            </p>
            <p className="text-xl rounded-full font-clash text-lime-400">
              Community & Socials
            </p>
            <div className="flex items-center justify-center gap-2 md:justify-start">
              {socialLinks.map((link) => (
                <Tooltip
                  key={link.name}
                  className="text-tiny font-poppins-rg"
                  color="default"
                  content={link.name}
                >
                  <Button
                    radius="full"
                    isIconOnly
                    startContent={link.icon}
                    className="bg-slate-950"
                    onPress={() => window.open(link.url, '_blank')}
                  />
                </Tooltip>
              ))}
            </div>

          </div>
          <div className="flex flex-col w-full gap-4 p-4 rounded-2xl bg-slate-900">
            <div className="flex flex-row justify-start gap-4">
              <img src={"/images/quddus.jpg"} alt="Abdul Quddus" className="w-12 h-12 rounded-full lg:h-20 lg:w-20 ring ring-slate-200" />
              <div className="flex flex-col items-start w-full gap-0">
                <p className="text-lg lg:text-2xl font-clash text-slate-100">Abdul Quddus</p>
                <p className="text-tiny font-poppins-rg">MERN Stack Developer</p>
              </div>
            </div>
            <p className="text-small lg:text-md font-poppins-rg">
              I'm Abdul Quddus, a Junior MERN Stack Developer focused on clean, responsive full-stack apps. I've built real-world projects like EMS and eCommerce platforms with Stripe and Redux, and I'm exploring authentication, Web3, and ElectronJS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
