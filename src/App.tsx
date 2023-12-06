import "./App.css";
import { execTx } from "./actions/exec.actions";

function App() {
  return (
    <div className={`flex w-full p-[20px] items-center justify-center`}>
      <button
        className={`px-2 h-[30px] rounded-lg text-white bg-black font-serif text-[18px]`}
        onClick={execTx}
      >
        Execute
      </button>
    </div>
  );
}

export default App;
