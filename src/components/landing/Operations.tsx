export const Operations = () => {
  const steps = [
    {
      label: "01",
      title: "Vendor Onboarding",
      body: "Verified physical tech stores create their dedicated digital sub-stores.",
    },
    {
      label: "02",
      title: "Stock Synchronization",
      body: "Real-time inventory syncing ensures accuracy and availability.",
    },
    {
      label: "03",
      title: "Neural Delivery",
      body: "Secure dispatch, tracking, and doorstep delivery.",
    },
  ];

  return (
    <section className="relative py-32 px-6 max-w-7xl mx-auto">
      <h2 className="text-5xl font-black uppercase mb-24 text-center">
        How It{" "}
        <span className="bg-[linear-gradient(90deg,#9D00FF,#00F0FF)] bg-clip-text text-transparent">
          Operates
        </span>
      </h2>

      <div className="relative grid md:grid-cols-3 gap-20">
        {steps.map((step, i) => (
          <div key={i} className="relative">
            <span className="text-8xl font-black text-white/50">
              {step.label}
            </span>

            <div className="relative z-10 space-y-4">
              <h4 className="text-xl font-black uppercase tracking-tight">
                {step.title}
              </h4>

              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                {step.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
