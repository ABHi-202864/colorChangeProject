import { useState } from "react"


function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div
        className="w-full h-screen duration-300"
        style={{ backgroundColor: color }}
      >
        <div className="fixed bottom-12 inset-x-0 px-2 flex flex-wrap justify-center">
          <div
            className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"
          >
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full font-semibold text-lg text-gray-200 shadow-lg cursor-pointer"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>

            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full font-semibold text-lg text-gray-200 shadow-lg cursor-pointer"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>

            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full font-semibold text-lg text-gray-200 shadow-lg cursor-pointer"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>

            <button
              onClick={() => setColor("maroon")}
              className="outline-none px-4 py-1 rounded-full font-semibold text-lg text-gray-200 shadow-lg cursor-pointer"
              style={{ backgroundColor: "maroon" }}
            >
              Maroon
            </button>

            <button
              onClick={() => setColor("gray")}
              className="outline-none px-4 py-1 rounded-full font-semibold text-lg text-gray-200 shadow-lg cursor-pointer"
              style={{ backgroundColor: "gray" }}
            >
              Gray
            </button>

            <button
              onClick={() => setColor("olive")}
              className="outline-none px-4 py-1 rounded-full font-semibold text-lg text-gray-200 shadow-lg cursor-pointer"
              style={{ backgroundColor: "olive" }}
            >
              Olive
            </button>

            <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 py-1 rounded-full font-semibold text-lg text-gray-200 shadow-lg cursor-pointer"
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>

            <button
              onClick={() => setColor("orange")}
              className="outline-none px-4 py-1 rounded-full font-semibold text-lg text-gray-200 shadow-lg cursor-pointer"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>

            <button
              onClick={() => setColor("lime")}
              className="outline-none px-4 py-1 rounded-full font-semibold text-lg text-gray-200 shadow-lg cursor-pointer"
              style={{ backgroundColor: "lime" }}
            >
              Lime
            </button>

            <button
              onClick={() => setColor("black")}
              className="outline-none px-4 py-1 rounded-full font-semibold text-lg text-gray-200 shadow-lg cursor-pointer"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
