export default function HeroSection() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <p className="text-sm font-medium tracking-tight text-neutral-500">
          New — AI-powered alerts
        </p>
        <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">
          Realtime alerts for your cloud infrastructure
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-neutral-600">
          Nimbus watches every service you run and tells your team the moment
          something breaks — no dashboards to wire up, no agents to configure.
        </p>
        <div className="mt-10 flex w-full flex-col gap-4 md:w-auto md:flex-row">
          <button className="w-full rounded-full bg-neutral-900 px-8 py-4 text-sm font-medium text-white hover:bg-neutral-800 md:w-auto">
            Start free trial
          </button>
          <button className="w-full rounded-full border border-neutral-300 px-8 py-4 text-sm font-medium text-neutral-900 hover:bg-neutral-100 md:w-auto">
            View docs
          </button>
        </div>
        <p className="mt-6 text-sm text-neutral-500">
          No credit card required · 14-day trial
        </p>
      </div>
    </section>
  );
}
