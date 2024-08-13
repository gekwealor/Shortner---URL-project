import React from "react";

const Features = () => {
  return (
    <section>
      <main>
        <h1 className="text-4xl font-bold mb-4 text-center mt-[60px] text-indigo-950">
          Features that make your links shine
        </h1>
        <p className="text-muted-foreground text-center text-[#9b9a9a] mb-4">
          Our URL shortener offers a suite of tools to help you create, manage,
          and analyze your shortened links.
        </p>

        <section className="py-10 md:px-6 px-[1rem]">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-indigo-950">
                Custom Domains
              </h2>
              <p className="text-muted-foreground text-[#9b9a9a] mb-4">
                Brand your links with your own custom domain for a professional
                look.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-indigo-950">
                Link Analytics
              </h2>
              <p className="text-muted-foreground mb-4 text-[#9b9a9a]">
                Track clicks, referrers, and other insights to optimize your
                campaigns.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-indigo-950">
                Link Management
              </h2>
              <p className="text-muted-foreground mb-4 text-[#9b9a9a]">
                Easily manage and update your links, even after they've been
                shared.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-indigo-950">
                Branded Links
              </h2>
              <p className="text-muted-foreground mb-4 text-[#9b9a9a]">
                Create custom, branded links that reflect your business or
                campaign.
              </p>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default Features;
