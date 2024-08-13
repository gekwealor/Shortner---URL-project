import React, { useState } from "react";

const Faq = () => {
  const [faqIndex, setFaqIndex] = useState<null | number>(null);

  const faqData = [
    {
      h1: "How does the URL shortener work?",
      p: "Our URL shortener takes your long, unwieldy URLs and transforms them into clean, concise links that are easy to share. Simply enter your URL, and we will generate a shortened version that you can use anywhere.",
    },
    {
      h1: "What are the pricing plans?",
      p: "We offer a range of pricing plans to suit your needs. Our free plan allows you to create up to 100 shortened links per month. For more advanced features and higher usage limits, check out our paid plans starting at $5 per month.",
    },
    {
      h1: "How do I manage my account?",
      p: "You can manage your account settings, including your profile information and billing details, by logging into your account dashboard. From there, you can also view your usage statistics and upgrade your plan if needed.",
    },
    {
      h1: "Can I customize my shortened links?",
      p: "Yes, you can customize the appearance of your shortened links. Our premium plans allow you to choose a custom domain and even create branded links that match your companys style.",
    },
    {
      h1: "How do I track the performance of my links?",
      p: "Our URL shortener provides detailed analytics on the performance of your links, including click-through rates, geographic data, and device information. You can access these insights from your account dashboard to better understand how your content is performing.",
    },
  ];

  return (
    <section className="mt-[100px]">
      <main>
        <div className="space-y-2 mt-10 text-center">
          <h1 className="text-2xl  font-bold text-[#f9a826] lg:pt-10 pt-10 tracking-tighter sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground text-[#9b9a9a] md:text-xl">
            Get answers to your questions about our URL shortener.
          </p>
        </div>
      </main>

      <section className="mt-10 lg:mx-[200px] mb-10 md:mx-[100px] sm:mx-[50px] mx-[1rem]">
        <main>
          {faqData.map((faq, index) => (
            <div
              className="border-2 bg-[#f9a826] transition-all px-5 ease-out mt-5"
              key={index}
            >
              <h1
                onClick={() => setFaqIndex(index)}
                className="w-full text-white font-bold py-4 cursor-pointer"
              >
                {faq.h1}
              </h1>
              {faqIndex === index ? (
                <p className="py-3 text-black leading-[2rem] text-md">
                  {faq.p}
                </p>
              ) : (
                ""
              )}
            </div>
          ))}
        </main>
      </section>
    </section>
  );
};

export default Faq;
