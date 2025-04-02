export default function WorkExperienceSection() {
  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-16 overflow-hidden">
      {/* Corner gradients */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-black to-transparent opacity-10 -translate-y-1/4 translate-x-1/4 rotate-45"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-black to-transparent opacity-10 translate-y-1/4 -translate-x-1/4 rotate-45"></div>

      <div className="flex flex-col md:flex-row">
        {/* Section number */}
        <div className="w-full md:w-1/6 mb-4 md:mb-0">
          <span className="text-7xl font-medium text-gray-400">03</span>
        </div>

        {/* Content */}
        <div className="w-full md:w-5/6">
          {/* Section title */}
          <div className="mb-12">
            <h2 className="text-6xl font-bold leading-tight">
              Work
              <br />
              <span className="font-serif italic font-normal">Experience</span>
            </h2>
          </div>

          {/* Experience items */}
          <div className="space-y-12 border-t border-gray-200 pt-8">
            {/* Experience 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <div className="inline-block px-4 py-1 rounded-full bg-gray-100 text-sm">
                  2021 - Current
                </div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold mb-1">
                  Senior UI/UX Designer at
                </h3>
                <h4 className="text-xl font-bold mb-3">Vektora Studio</h4>
                <p className="text-gray-600 text-sm">
                  Work on various UI/UX related projects across various business
                  sectors.
                </p>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <div className="inline-block px-4 py-1 rounded-full bg-gray-100 text-sm">
                  2020 - 2021
                </div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold mb-1">Webflow Developer at</h3>
                <h4 className="text-xl font-bold mb-3">Hvolen Studio</h4>
                <p className="text-gray-600 text-sm">
                  Take part in various web development related projects in
                  various business sectors.
                </p>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <div className="inline-block px-4 py-1 rounded-full bg-gray-100 text-sm">
                  2019 - 2020
                </div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold mb-1">Graphic Designer at</h3>
                <h4 className="text-xl font-bold mb-3">
                  Future Fast Indonesia
                </h4>
                <p className="text-gray-600 text-sm">
                  Work on various graphic design projects across various
                  business sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
