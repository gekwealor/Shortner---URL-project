import React from "react";
import { IoCheckmark } from "react-icons/io5";
const Price = () => {
  return (
    <section className="mt-[100px]">
      <main>
        <div className="flex flex-col justify-center space-y-4">
          <div>
            <div className="space-y-2 mb-20">
              <h1 className="text-3xl text-[#f9a826] text-center mt-8 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Pricing for Your Needs
              </h1>
              <p className="max-w-[600px] text-[#9b9a9a] text-center pt-1 m-auto text-muted-foreground md:text-xl">
                Find the perfect plan to shorten your URLs and track your links.
              </p>
            </div>

            <main className="grid mb-20 md:grid-cols-2 grid-cols-1 px-5 py-10 md:w-[80%] bg-[#f4f4f5] w-[90%] space-y-10 md:space-y-0 m-auto">
              <div className="border-2 md:mr-3 cursor-pointer bg-white hover:bg-indigo-950 ease-out transition-all rounded-md md:px-10 px-3 py-10">
                <header>
                  <h1 className="font-medium text-3xl text-[#6e6e77]">Free</h1>
                  <div>
                    <div className="flex text-[#6e6e77] mb-3 items-baseline space-x-2">
                      <span className="text-4xl font-bold tracking-tighter">
                        $0
                      </span>
                      <span className="text-muted-foreground text-black font-bold">
                        / month
                      </span>
                    </div>
                  </div>
                </header>

                <div className="grid text-[#9b9a9a] md:gap-4">
                  <div className="flex items-center md:gap-2">
                    {/* <CheckIcon className="h-4 w-4 text-green-500" /> */}
                    <IoCheckmark />
                    <span>100 shortened links</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* <CheckIcon className="h-4 w-4 text-green-500" /> */}
                    <IoCheckmark />
                    <span>Basic link analytics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* <CheckIcon className="h-4 w-4 text-green-500" /> */}
                    <IoCheckmark />
                    <span>Custom domain support</span>
                  </div>
                </div>
                <div className="w-full flex mt-8 rounded-md justify-center">
                  <button className="border ease-out bg-black text-white hover:bg-indigo-950 font-medium flex rounded-md px-10 py-2 mt-5">
                    Get Started
                  </button>
                </div>
              </div>

              <div className="border-2 md:ml-3 cursor-pointer bg-white hover:bg-indigo-950 ease-out transition-all rounded-md md:px-10 px-2 py-10">
                <header>
                  <h1 className="font-medium text-3xl text-[#6e6e77]">Pro</h1>
                  <div>
                    <div className="flex text-[#6e6e77] mb-3 items-baseline space-x-2">
                      <span className="text-4xl font-bold tracking-tighter">
                        $9
                      </span>
                      <span className="text-muted-foreground text-black font-bold">
                        / month
                      </span>
                    </div>
                  </div>
                </header>

                <div className="grid text-[#9b9a9a] md:gap-4">
                  <div className="flex items-center md:gap-2">
                    {/* <CheckIcon className="h-4 w-4 text-green-500" /> */}
                    <IoCheckmark />
                    <span>Unlimited shortened links</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* <CheckIcon className="h-4 w-4 text-green-500" /> */}
                    <IoCheckmark />
                    <span>Advanced link analytics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* <CheckIcon className="h-4 w-4 text-green-500" /> */}
                    <IoCheckmark />
                    <span>Custom domain support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* <CheckIcon className="h-4 w-4 text-green-500" /> */}
                    <IoCheckmark />
                    <span>Branded short links</span>
                  </div>
                </div>
                <div className="w-full flex rounded-md justify-center">
                  <button className="border bg-black ease-out text-white hover:bg-indigo-950 font-medium flex rounded-md px-10 py-2 mt-5">
                    Get Started
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Price;
