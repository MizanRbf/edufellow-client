import { RiMenuFoldLine } from "react-icons/ri";
const DashBar = ({ handleClick }) => {
  return (
    <div className="bg-white shadow-lg py-3 flex ">
      <button onClick={handleClick} className="cursor-pointer">
        <RiMenuFoldLine size={30} className="text-secondary ml-4" />
      </button>
    </div>
  );
};

export default DashBar;
