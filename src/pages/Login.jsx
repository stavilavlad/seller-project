import React from "react";
import { Form, Link, redirect } from "react-router-dom";
import { customFetch } from "../utils";
import { loginUser } from "../features/user/userSlice";
import { toast } from "react-toastify";

export const action =
  (store) =>
  async ({ request }) => {
    try {
      const formData = await request.formData();
      const data = Object.fromEntries(formData);
      const response = await customFetch.post("/login", data);

      store.dispatch(loginUser(response.data));
      toast.success("Logged in successfully");
      return redirect("/");
    } catch (error) {
      toast.error("Incorrect email or password");
      return null;
    }
  };

const Login = () => {
  const handleGoogleAuth = () => {
    window.open("http://localhost:3000/auth/google", "_self");
  };

  return (
    <div className="bg-base-100 h-screen grid place-items-center">
      <div className=" w-screen h-screen sm:w-[26rem] sm:h-[33rem]  bg-base-200 px-4 py-6  sm:rounded-lg flex flex-col ">
        <h1 className="text-center text-3xl font-bold pb-6">Login</h1>
        <div className="flex flex-col w-full ">
          <div className="grid card rounded-box place-items-center py-4">
            <button type="button" onClick={handleGoogleAuth} className="flex justify-center bg-base-100 w-[22rem] rounded-lg  px-6 py-2 text-sm font-medium text-base-content hover:bg-base-300">
              <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-0.5 0 48 48" version="1.1">
                <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Color-" transform="translate(-401.000000, -860.000000)">
                    <g id="Google" transform="translate(401.000000, 860.000000)">
                      <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05">
                        {" "}
                      </path>
                      <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335">
                        {" "}
                      </path>
                      <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853">
                        {" "}
                      </path>
                      <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4">
                        {" "}
                      </path>
                    </g>
                  </g>
                </g>
              </svg>
              <span>Continue with Google</span>
            </button>
          </div>
          <div className="divider">OR</div>
          <div className="grid rounded-box place-items-center">
            <div className="grid grid-cols-2 w-full border-b-2 border-base-300">
              <Link to={"/login"} className="btn btn-ghost rounded-none hover:bg-base-200 hover:border-b-4 hover:border-b-base-300 pb-5">
                Login
              </Link>
              <Link to={"/register"} className="btn btn-ghost rounded-none hover:bg-base-200 hover:border-b-4 hover:border-b-base-300 pb-5">
                Register
              </Link>
            </div>
            {/* LOGIN FORM */}
            <Form method="POST" className="card w-96 p-4  flex flex-col gap-y-4">
              <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="email" className="grow" name="username" placeholder="E-mail" />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                  <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
                </svg>
                <input type="password" name="password" className="grow" placeholder="Password" />
              </label>
              <button type="submit" className="btn btn-primary font-bold">
                Login
              </button>
              <p className="text-center">
                Back to
                <Link to="/" className="ml-2 link link-hover link-primary capitalize">
                  Home Page
                </Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
