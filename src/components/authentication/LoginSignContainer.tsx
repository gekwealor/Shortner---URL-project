import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import LoginSvg from "../../assets/undraw_secure_login_pdn4.svg";

const LoginSignModal = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <section className="w-full my-[100px] flex items-center justify-center">
      <main className="grid md:grid-cols-2 shadow-md grid-cols-1 space-y-10 md:space-y-0 border-2 rounded-md items-center px-3 py-10 lg:h-auto md:h-[450px] md:w-[85%] lg:w-[80%] w-[95%]">
        <div>
          <div>
            <h2 className="mt-6 text-center md:text-3xl text-2xl font-bold tracking-tight text-foreground">
              {isLogin ? "Sign in to your account" : "Create a new account"}
            </h2>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              Or
              <button
                type="button"
                className="font-bold pl-3 outline-none"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "sign up" : "sign in"}
              </button>
            </p>
          </div>
          <div>
            {isLogin && <Login />}
            {!isLogin && <Signup />}
          </div>
        </div>

        <img src={LoginSvg} alt="LoginSvg" />
      </main>
    </section>
  );
};

export default LoginSignModal;
