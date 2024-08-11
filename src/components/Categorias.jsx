import Filters from "./Filters";
function Categorias() {
  return (
    <>
      <div className="flex">
        <Filters />
        <main className="w-3/4 p-4 space-y-8 bg-[#424242]">
          <section>
            <h2 className="text-2xl font-bold mb-4">Popular</h2>
            <div className="grid grid-cols-5 gap-4">
              <div className="bg-gray-800 p-2 rounded">
                <img
                  src="shrek-5.jpg"
                  alt="Shrek 5"
                  className="rounded mb-2"
                ></img>
                <h3 className="text-lg">Shrek 5</h3>
                <p className="text-gray-400">August 1, 2024</p>
                <div className="flex items-center justify-between mt-2">
                  <span>75%</span>
                  <div className="flex space-x-2">
                    <button className="bg-gray-700 p-1 rounded">❤️</button>
                    <button className="bg-gray-700 p-1 rounded">💾</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Now Playing</h2>
            <div className="grid grid-cols-5 gap-4">
              <div className="bg-gray-800 p-2 rounded">
                <img
                  src="lord-of-war.jpg"
                  alt="Lord of War"
                  className="rounded mb-2"
                ></img>
                <h3 className="text-lg">Lord of War</h3>
                <p className="text-gray-400">March 10, 2022</p>
                <div className="flex items-center justify-between mt-2">
                  <span>82%</span>
                  <div className="flex space-x-2">
                    <button className="bg-gray-700 p-1 rounded">❤️</button>
                    <button className="bg-gray-700 p-1 rounded">💾</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Upcoming</h2>
            <div className="grid grid-cols-5 gap-4">
              <div className="bg-gray-800 p-2 rounded">
                <img
                  src="oppenheimer.jpg"
                  alt="Oppenheimer"
                  className="rounded mb-2"
                ></img>
                <h3 className="text-lg">Oppenheimer</h3>
                <p className="text-gray-400">August 2, 2024</p>
                <div className="flex items-center justify-between mt-2">
                  <span>94%</span>
                  <div className="flex space-x-2">
                    <button className="bg-gray-700 p-1 rounded">❤️</button>
                    <button className="bg-gray-700 p-1 rounded">💾</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Categorias;
