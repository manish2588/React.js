import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm({
    mode: "onSubmit", // Only validate on submit
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("name", { required: "Please Enter Name" })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("email", {
              required: "Please Enter Email",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
          {/* Show error only after submit is clicked */}
          {isSubmitted && errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-1" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("password", {
              required: "Please enter password",
              minLength: { value: 8, message: "At least 8 letters" },
            })}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
      {/*
      other method 

        <div>
          <p>
            <label>
              <input
                type="checkbox"
                value="football"
                {...register("sports", {
                  validate: {
                    required: (value) =>
                      value.length > 0 || "Please select at least one sport",
                  },
                })}
              />
              Football
            </label>
          </p>
          <p>
            <label>
              <input
                type="checkbox"
                value="chess"
                {...register("sports", {
                  validate: {
                    required: (value) =>
                      value.length > 0 || "Please select at least one sport",
                  },
                })}
              />
              Chess
            </label>
          </p>
          <p>
            <label>
              <input
                type="checkbox"
                value="cricket"
                {...register("sports", {
                  validate: {
                    required: (value) =>
                      value.length > 0 || "Please select at least one sport",
                  },
                })}
              />
              Cricket
            </label>
          </p>
        </div>
       */}

        <div>
          <p>
            <label>
              <input
                type="checkbox"
                value="football"
                {...register("sports", {
                  required: "Please select at least one sport", // This applies to the entire array
                })}
              />
              Football
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" value="chess" {...register("sports")} />
              Chess
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" value="cricket" {...register("sports")} />
              Cricket
            </label>
          </p>
          {errors.sports && (
            <p className="text-red-500">{errors.sports.message}</p>
          )}
        </div>
        <div>
          <p>
            <label>
              <input
                type="radio"
                value="basic"
                {...register("plan", {
                  required: "Please select at least one plan",
                })}
              />
              Basic
            </label>
          </p>
          <p>
            <label>
              <input
                type="radio"
                value="premium"
                {...register("plan", {
                  required: "Please select at least one plan",
                })}
              />
              Premium
            </label>
          </p>
          <p>
            <label>
              <input
                type="radio"
                value="medium"
                {...register("plan", {
                  required: "Please select at least one plan",
                })}
              />
              Medium
            </label>
          </p>

          {/* Error Message */}
          {errors.plan && <p className="text-red-500">{errors.plan.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
