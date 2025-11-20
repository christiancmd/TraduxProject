//Contexts and Providers
import useNetworkAccess from "../hooks/useNetworkAccess";
//Style and icons
import { Link } from "react-router";
import { FaWifi } from "react-icons/fa";
import { LuWifiOff } from "react-icons/lu";

export default function Header() {
  const networkAccess = useNetworkAccess();

  return (
    <header className="w-full px-4 py-8 bg-white shadow-md">
      <div className="flex justify-around items-center ">
        <div className="flex items-center ">
          <img className="w-14 h-10" src="/src/assets/tradux.png" alt="" />
          <h1 className="text-gray-800 font-black ">
            <Link to='/'>
              TRADUX
            </Link>
          </h1>
        </div>
        <nav className="flex items-center gap-3">
            <Link to='/about' className="ont-black rounded-lg border-2 py-2.5 px-6 text-white bg-teal-700 transition duration-300 hover:bg-teal-100 hover:border-teal-900 hover:text-teal-900">
              Sobre Tradux
            </Link>

            {!networkAccess ? (
              <div>
                <LuWifiOff className="text-red-600 size-8" />
              </div>
            ):(
              <div>
                <FaWifi className="text-green-600 size-8" />
              </div>
            )}
        </nav>
      </div>
    </header>
  );
}
