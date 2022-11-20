import React, { useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
/*-------------------------------------------------------------*/
import { useData } from "../context/main";

const updateStateReducer = (state, action) => {
  switch (action.type) {
    case "update-first-name":
      state.first_name = action.payload;
      return state;
    case "update-last-name":
      state.last_name = action.payload;
      return state;
    case "update-email":
      state.email = action.payload;
      return state;
    case "update-username":
      state.username = action.payload;
      return state;
    case "update-password":
      state.password = action.payload;
      return state;
    default:
      return state;
  }
};

function Login() {
  const [initialValues, updateState] = useReducer(updateStateReducer, {
    username: "",
    password: "",
  });

  let navigate = useNavigate();
  console.log(initialValues);

  const submitForm = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/users/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(initialValues),
      });

      const result = response;
      console.log(result);

      navigate({
        pathname: "/",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-auto px-4 sm:px-0 sm:w-[60vw] lg:w-[40vw]">
      <header className="pt-4 pb-2 flex items-center justify-between space-x-2"></header>

      <section>
        <form
          method="post"
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
        >
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Username
            </label>
            <input
              onChange={(event) =>
                updateState({
                  type: "update-username",
                  payload: event.target.value,
                })
              }
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="username"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Password
            </label>
            <input
              onChange={(event) =>
                updateState({
                  type: "update-password",
                  payload: event.target.value,
                })
              }
              id="password"
              type="password"
              name="password"
              placeholder="********"
              autoComplete="new-password"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={submitForm}
              type="submit"
              className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
            >
              Login
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;
