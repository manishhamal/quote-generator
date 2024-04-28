import Quotebox from "./components/Quotebox";
import Button from "./components/Button";

const App = () => {
  return (
    <div className="flex justify-center items-center align-middle h-screen bg-slate-200 ">
      <div className=" p-8 shadow drop-shadow-lg border w-[986px] border-slate-100 bg-white mx-28 ">
        <Quotebox />
      </div>
    </div>
  );
};

export default App;
