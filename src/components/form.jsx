import React from "react";
import { useForm } from "react-hook-form";

const form = () => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  console.log("errors->", errors);
  return (
    <div className="text-white text-lg border-2 rounded-2xl w-100 ">
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          reset();
        })}
        className="flex flex-col gap-3 p-5 font-semibold"
      >
        <div className="flex flex-col gap-1">
          <label>Username:</label>
          <input
            {...register("username", {
              required: "UserName is required.",
            })}
            type="text"
            id="username"
            placeholder="Enter Your UserName"
            className="border rounded px-2 py-3"
          ></input>
          {errors.username && (
            <p className="text-sm text-red-600">{errors.username.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label>Email:</label>
          <input
            {...register("email", {
              required: "Email is required.",
              pattern:{
                value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message:"Please enter a valid email."
              }
            })}
            type="email"
            id="email"
            placeholder="Enter Your Email"
            className="border rounded px-2 py-3"
          ></input>
          {errors.email && (
            <p className="text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label>Contact:</label>
          <input
            {...register("contact", {
              required: "Contact is required.",
              minLength: {
                value: 10,
                message: "Minimum 10 digits are required.",
              },
              maxLength: {
                value: 10,
                message: "Maximum 10 digits are allowed.",
              },
            })}
            type="tel"
            id="contact"
            placeholder="Enter Your Contact"
            className="border rounded px-2 py-3"
          ></input>
          {errors.contact && (
            <p className="text-sm text-red-600">{errors.contact.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label>Profile Image:</label>
          <input
            {...register("image", {
              required: "Image is required",
            })}
            type="text"
            id="image"
            placeholder="Image URL"
            className="border rounded px-2 py-3"
          ></input>
          {errors.image && (
            <p className="text-sm text-red-600">{errors.image.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-700 border-0 rounded px-6 py-3 cursor-pointer"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default form;
