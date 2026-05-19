"use client";

export const Hero = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
          The collaborative interface design tool.
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Figma Clone is a web-based design tool that helps you create, collaborate, and prototype.
        </p>
        <div className="mt-8">
          <a
            href="/signup"
            className="px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Get started for free
          </a>
        </div>
      </div>
    </section>
  );
};
