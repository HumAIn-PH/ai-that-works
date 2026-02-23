import { useState } from "react";

const AboutHumAInSection = () => {
  // use public/assets/<name>.jpg so missing files won't break the build — just fallback to initials
  const [eusebioImgLoaded, setEusebioImgLoaded] = useState(true);
  const [gracierImgLoaded, setGracierImgLoaded] = useState(true);

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">About HumAIn</h2>
          <h3 className="text-lg md:text-xl text-muted-foreground font-medium mb-4">
            HumAIn: Human-Led, AI-Powered Innovation
          </h3>
          <p className="text-foreground leading-relaxed">
            Founded in August 2025, HumAIn was established with a singular vision: to harness the
            transformative power of artificial intelligence while keeping human insight at its core.
            Our mission is to create advanced AI solutions that enhance, rather than replace,
            human capabilities, fostering a future where technology amplifies our potential.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <h4 className="text-2xl font-semibold mb-6 text-center">Meet Our Visionary Founders</h4>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border rounded-xl p-6 bg-gradient-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                  {eusebioImgLoaded ? (
                    // Place the provided photo at public/assets/eusebio.jpg to display here
                    <img
                      src="/assets/eusebio.jpg"
                      alt="Eusebio Yu"
                      className="w-12 h-12 object-cover"
                      onError={() => setEusebioImgLoaded(false)}
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                      EY
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-lg font-bold">Eusebio Yu</p>
                  <p className="text-muted-foreground mt-2">
                    With 24 years of experience, Eusebio is a recognized expert in building
                    sophisticated enterprise systems. His extensive background spans HRIS,
                    cutting-edge IoT integrations, and smart city deployments, providing a robust
                    technical foundation for HumAIn's innovative solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-border rounded-xl p-6 bg-gradient-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                  {gracierImgLoaded ? (
                    <img
                      src="/assets/gracier.jpg"
                      alt="Gracier Yu"
                      className="w-12 h-12 object-cover"
                      onError={() => setGracierImgLoaded(false)}
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                      GY
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-lg font-bold">Gracier Yu</p>
                  <p className="text-muted-foreground mt-2">
                    Gracier brings 24 years of expertise in large-scale ERP implementations and
                    custom software development. Her deep understanding of business processes and
                    agile development ensures that HumAIn's offerings are not only powerful but
                    also practical and seamlessly integrated into existing workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHumAInSection;
