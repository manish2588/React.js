import React from "react";
import { useForm } from "react-hook-form";

function ComprehensiveForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 max-w-md mx-auto">
      {/* Name Input */}
      <div className="mb-4">
        <label>Name:</label>
        <input
          {...register("name", { required: "Name is required" })}
          placeholder="Enter your name"
          className="border p-2 w-full rounded"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      {/* Password Input */}
      <div className="mb-4">
        <label>Password:</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          placeholder="Enter your password"
          className="border p-2 w-full rounded"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>

      {/* Gender Radio Input */}
      <div className="mb-4">
        <label>Gender:</label>
        <div className="flex gap-4">
          <label>
            <input
              type="radio"
              value="Male"
              {...register("gender", { required: "Please select a gender" })}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              value="Female"
              {...register("gender", { required: "Please select a gender" })}
            />
            Female
          </label>
        </div>
        {errors.gender && (
          <p className="text-red-500">{errors.gender.message}</p>
        )}
      </div>

      {/* Country Select Input */}
      <div className="mb-4">
        <label>Country:</label>
        <select
          {...register("country", { required: "Please select a country" })}
          className="border p-2 w-full rounded"
        >
          <option value="">Select a country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="India">India</option>
        </select>
        {errors.country && (
          <p className="text-red-500">{errors.country.message}</p>
        )}
      </div>

      {/* Agree to Terms Checkbox */}
      <div className="mb-4">
        <label>
          <input
            type="checkbox"
            {...register("terms", {
              required: "You must agree to the terms and conditions",
            })}
          />
          I agree to the terms and conditions
        </label>
        {errors.terms && (
          <p className="text-red-500">{errors.terms.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
}

export default ComprehensiveForm;
