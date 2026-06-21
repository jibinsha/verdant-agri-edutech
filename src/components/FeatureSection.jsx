const features = [
  "Top Quality Content",
  "Experienced Faculty",
  "Mock Tests",
  "Performance Analytics",
  "Certification",
];

export default function FeatureSection() {
  return (
    <section className="max-w-7xl mx-auto px-6">

      <div className="bg-white border rounded-xl grid md:grid-cols-5">

        {features.map((feature) => (
          <div
            key={feature}
            className="p-6 text-center border-r last:border-r-0"
          >
            <h3 className="font-semibold">
              {feature}
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Learn from the best
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}