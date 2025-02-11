import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async(data) => {
    const userInfo={
      name:data.name,
      email:data.email,
      message:data.message,
    }
    try {
      await axios.post("https://getform.io/f/bvrwedgb", userInfo)
      toast.success("Your message has been sent")
      reset()
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10"
      >
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <span>Please fill out the form below to conatct me.</span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/bvrwedgb"
            // method="POST"
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4">Send your message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                {...register("name", { required: true })}
                className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow"
                name="name"
                id="name"
                placeholder="Enter your full name"
                type="text"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                {...register("email", { required: true })}
                className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow"
                name="email"
                id="email"
                placeholder="Enter your email address"
                type="text"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow"
                name="message"
                id="message"
                placeholder="Enter your message here"
                type="text"
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <button
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
