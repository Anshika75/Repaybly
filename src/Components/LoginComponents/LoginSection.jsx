import React from "react";
import { useState } from "react";
import { useGetValue } from "../../Store";
import instance from "../../axios.js";
import getError from "../../errorReport";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../Loader";
export default function LoginSection() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [state, dispatch] = useGetValue();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const submitHandler = async () => {
    setLoading(true);
    try {
      const { data } = await instance.post("user/signin/", {
        email: email,
        pass: password,
      });
      dispatch({ type: "LOG_IN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      console.log(state);
      navigate("/");
    } catch (e) {
      setLoading(false);
      console.log(getError(e));
    }
  };
  return (
    <>
      {/* <ToastContainer position="bottom-center" limit={1} /> */}
      {/* baad me bnaunga ye abhi kuch samajh nhi aa rha */}
      {loading ? <Loader /> : null}
      <section
        className={` ${
          loading ? " pointer-events-none " : " "
        } h-full gradient-form bg-gray-200 font-Raleway`}
      ></section>
      <section className="h-full gradient-form bg-gray-200 font-Raleway">
        <div className="container mx-auto py-5 px-5 h-full">
          <div className="flex justify-center items-center flex-wrap text-gray-800">
            <div className="xl:w-[75%]">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-6/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center">
                        <img
                          className="mx-auto w-48"
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          alt="logo"
                        />
                      </div>
                      <form>
                        <div className="mb-4">
                          <input
                            type="text"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-maroonDark hover:border-maroonDark focus:outline-none"
                            placeholder="Username"
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => {
                              setPass(e.target.value);
                            }}
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-maroonDark hover:border-maroonDark focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Password"
                          />
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                          <button
                            onClick={submitHandler}
                            className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-maroonDark hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                            type="button"
                            style={{
                              background:
                                "linear-gradient(to right, #ff254d, #a91340)",
                            }}
                          >
                            Log in
                          </button>
                          <a className="text-gray-500" href="#!">
                            Forgot password?
                          </a>
                        </div>
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">Don't have an account?</p>
                          <button
                            type="button"
                            className="inline-block px-6 py-2 border-2 hover:border-maroonDark text-maroon border-maroon hover:text-maroonDark font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                          >
                            <Link to="/signup">Sign up</Link>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div
                    className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                    style={{
                      background: "linear-gradient(to right, #ff254d, #a91340)",
                    }}
                  >
                    <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                      <h4 className="text-xl font-semibold mb-6">
                        We are more than just a company
                      </h4>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
