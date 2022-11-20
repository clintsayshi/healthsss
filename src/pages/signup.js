import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

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
    case "update-password":
      state.password = action.payload;
      return state;
    default:
      return state;
  }
};

const SignUp = () => {
  const occupations = [
    "Chemical technician",
    "Toxicologist",
    "Chemistry teacher",
    "Water chemist",
    "Analytical chemist",
    "Synthetic chemist",
    "Quality control chemist",
    "Organic chemist",
    "Forensic scientist",
    "Hazardous waste chemist",
    "Geochemist",
    "Oceanographer",
    "Materials scientist",
    "Chemical engineer",
    "Pharmacologist",
    "None of the above",
  ];

  const asthmas = [
    "Exercise-induced asthma",
    "Occupational asthma",
    "Allergy-induced asthma",
  ];

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    age: Yup.string().email().required(),
    location: Yup.string().email().required(),
    ocupation: Yup.string().required(),
    password: Yup.string().required("Please enter a valid password"),
  });

  const [initialValues, updateState] = useReducer(updateStateReducer, {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  console.log(initialValues);

  const submitForm = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8000/api/users/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(initialValues),
        }
      );

      const result = response;
      console.log(result);

      navigate({
        pathname: "/login",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid min-h-screen place-items-center">
      <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
        <h1 className="text-xl font-semibold">
          Hello there ?,
          <span className="font-normal">
            please fill in your information to continue
          </span>
        </h1>
        <form className="mt-6" method="post">
          <div className="flex justify-between gap-3">
            <span className="w-1/2">
              <label
                htmlFor="firstname"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                Firstname
              </label>
              <input
                onChange={(event) =>
                  updateState({
                    type: "update-first-name",
                    payload: event.target.value,
                  })
                }
                id="firstname"
                type="text"
                name="firstname"
                placeholder="John"
                autoComplete="given-name"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
            </span>
            <span className="w-1/2">
              <label
                htmlFor="lastname"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                Lastname
              </label>
              <input
                onChange={(event) =>
                  updateState({
                    type: "update-last-name",
                    payload: event.target.value,
                  })
                }
                id="lastname"
                type="text"
                name="lastname"
                placeholder="Doe"
                autoComplete="family-name"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
            </span>
          </div>
          <label
            htmlFor="email"
            className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >
            E-mail
          </label>
          <input
            onChange={(event) =>
              updateState({ type: "update-email", payload: event.target.value })
            }
            id="email"
            type="email"
            name="email"
            placeholder="john.doe@company.com"
            autoComplete="email"
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            required
          />

          {/* <label
            htmlFor="age"
            className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >
            Age
          </label>
          <input
            id="age"
            type="number"
            name="age"
            maxLength="99"
            max="99"
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            required
          /> */}

          {/* 
          <label
            htmlFor="location"
            className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >
            Location
          </label>
          <input
            id="location"
            type="text"
            name="location"
            maxLength="50"
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            required
          />

          <label
            class="switch"
            className="flex items-center py-4 mt-2 text-xs font-semibold text-gray-600 uppercase"
          >
            <span class="slider">Do you smoke?</span>
            <input
              className="block p-3 mt-2 text-gray-700 bg-gray-200 "
              type="checkbox"
            />
          </label>

          <label
            htmlFor="canister"
            className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >
            Canister
          </label>
          <input
            id="canister"
            type="text"
            name="canister"
            maxLength="50"
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            required
          />

          <label
            htmlFor="occupation"
            className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >
            Occupation
          </label>
          <select
            id="occupation"
            name="occupation"
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            required
          >
            {occupations.map((item, id) => (
              <option key={id}>{item}</option>
            ))}
          </select> */}

          <label
            htmlFor="password"
            className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >
            Password
          </label>
          <input
            onChange={(event) =>
              updateState({ type: "password", payload: event.target.value })
            }
            id="password"
            type="password"
            name="password"
            placeholder="********"
            autoComplete="new-password"
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            required
          />

          <button
            onClick={submitForm}
            type="submit"
            className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
          >
            Sign up
          </button>
          <a href="/login">
            <p className="flex justify-between mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
              Already registered?
            </p>
          </a>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
