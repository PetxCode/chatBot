import { useState } from "react";
import { FaRobot } from "react-icons/fa";
import Screen from "./Screen";
import BotScreen from "./BotScreen";

const HomeScreen = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="relative min-h-[calc(100vh-140px)] bg-stone-100  border rounded-md p-2">
      <Screen />

      <div className="fixed right-2 bottom-0 m-2 ">
        {toggle ? (
          <div className="rounded-full p-2 text-[35px] bg-stone-100 cursor-pointer">
            <div className=" mb-[2px] ml-[1px]">
              <FaRobot onClick={() => setToggle(!toggle)} />
            </div>
          </div>
        ) : (
          <BotScreen />
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
