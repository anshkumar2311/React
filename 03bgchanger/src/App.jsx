import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-150"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap fixed bottom-10 inset-x-0 px-3 justify-center">
        <div className="flex flex-wrap bg-white px-3 py-2 gap-3 justify-center rounded-3xl">
          <button
            onClick={() => setColor("red")} // () onClick pe hmko function chahiye uski value nhi ()=> aaise kiya agar direct setColor("red") likhenge toh wo function ki value call hogi
            className="outline-none text-white shadow-lg rounded-full px-3 cursor-pointer py-1"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none text-white shadow-lg rounded-full px-3 cursor-pointer py-1"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none text-white shadow-lg rounded-full px-3 cursor-pointer py-1"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none text-white shadow-lg rounded-full px-3 cursor-pointer py-1"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("olive")}
            className="outline-none text-white shadow-lg rounded-full px-3 cursor-pointer py-1"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none text-white shadow-lg rounded-full px-3 cursor-pointer py-1"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("gray")}
            className="outline-none text-white shadow-lg rounded-full px-3 cursor-pointer py-1"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
