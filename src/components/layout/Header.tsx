import { useRef } from "react";
import {
  FiBell,
  FiArrowDown,
  FiPhone as PhoneIcon,
  FiSend as TelegramIcon,
  FiUser as UserIcon,
  FiMail as EnvelopeIcon,
  FiHeart as HeartIcon,
  FiShoppingCart as ShoppingCartIcon,
  FiRefreshCw as ArrowsLeftRightIcon,
  FiList as ListIcon,
  FiSearch as SearchIcon,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={`sticky top-0 z-50 w-full p-0 bg-white`}>
      <div className="w-full py-2 bg-gray-900">
        <div className="container flex items-center justify-between mx-auto">
          <ul className="flex items-center text-sm text-white">
            <li className="px-3 border-r border-gray-700">
              <div className="flex items-center w-full text-white cursor-pointer">
                <span className="uppercase">UZS</span>
                <FiArrowDown className="w-3 h-3 ml-1" />
              </div>
            </li>
            <li className="relative w-20 mx-3">
              <div className="flex items-center w-full text-white cursor-pointer">
                <span className="uppercase">English</span>
                <FiArrowDown className="w-3 h-3 ml-1" />
              </div>
              <ul className="absolute z-10 w-full bg-gray-900 rounded-b shadow right-2 top-8">
                <li className="px-2 py-1 text-white cursor-pointer hover:bg-gray-800">
                  Russian
                </li>
                <li className="px-2 py-1 text-white cursor-pointer hover:bg-gray-800">
                  English
                </li>
                <li className="px-2 py-1 text-white cursor-pointer hover:bg-gray-800">
                  O'zbek
                </li>
              </ul>
            </li>
          </ul>
          <ul className="flex items-center text-sm text-white">
            <li className="px-3 border-r border-gray-700">
              <div className="flex items-center text-white cursor-pointer">
                <PhoneIcon className="w-5 h-5 mr-1" />
                <span>(93) 747-59-95</span>
              </div>
            </li>
            <li className="px-3 border-r border-gray-700">
              <div className="flex items-center text-white cursor-pointer">
                <PhoneIcon className="w-5 h-5 mr-1" />
                <span>(93) 747-59-95</span>
              </div>
            </li>
            <li className="px-3 border-r border-gray-700">
              <div className="flex items-center text-white cursor-pointer">
                <TelegramIcon className="w-5 h-5 mr-1" />
                <span>@ultrastore_uz</span>
              </div>
            </li>
            <li className="px-3">
              <div className="flex items-center w-full text-white cursor-pointer">
                <UserIcon className="w-5 h-5 mr-1.5" />
                <span>Support 7/24</span>
              </div>
            </li>
          </ul>
          <ul className="flex items-center text-white">
            <li className="px-3 border-r border-gray-700">
              <div className="relative text-white cursor-pointer">
                <EnvelopeIcon className="w-5 h-5" />
              </div>
            </li>
            <li className="px-3 border-r border-gray-700">
              <div className="relative text-white cursor-pointer">
                <FiBell className="w-5 h-5" />
              </div>
            </li>
            <li className="px-3">
              <div className="flex items-center w-full text-white cursor-pointer">
                <UserIcon className="w-5 h-5 mr-1.5" />
                <span>Admin</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full py-6">
        <div className="container grid items-center grid-cols-4 gap-3 mx-auto">
          <div className="col-span-1">
            <img
              src="/logo.svg"
              alt="logo"
              className="w-[200px] h-[42px]"
            ></img>
          </div>
          <div className="flex justify-center col-span-2">
            <div className="relative w-10/12">
              <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                <SearchIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="text"
                className="bg-white border border-gray-300 text-gray-900 text-md rounded focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              ></input>
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 bg-[#0167F3] text-white rounded-r"
              >
                Search
              </button>
            </div>
          </div>
          <div className="flex items-center justify-end col-span-1">
            <ul className="flex items-center space-x-3">
              <li>
                <Link to="/compare">
                  <div className="flex items-center justify-center w-10 h-10 text-gray-900 border border-gray-300 rounded-full transition-all duration-500 hover:bg-[#0167F3] hover:text-white">
                    <ArrowsLeftRightIcon className="w-5 h-5" />
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/wishlist">
                  <div className="flex items-center justify-center w-10 text-gray-900 h-10 border border-gray-300 rounded-full transition-all duration-500 hover:bg-[#0167F3] hover:text-white">
                    <HeartIcon className="w-5 h-5" />
                  </div>
                </Link>
              </li>
              <li className="relative">
                <Link to="/cart">
                  <div className="flex items-center justify-center w-10 text-gray-900 h-10 border border-gray-300 rounded-full transition-all duration-500 hover:bg-[#0167F3] hover:text-white">
                    <ShoppingCartIcon className="w-5 h-5" />
                  </div>
                  <div className="absolute -top-1 -right-1.5 px-1.5 py-0.5 text-xs text-white bg-gray-900 rounded-full">
                    7
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full border-y">
        <div className="container grid items-center grid-cols-4 gap-3 mx-auto">
          <div className="relative col-span-1 py-3 border-r cursor-pointer group">
            <div className="flex items-center space-x-3">
              <ListIcon className="w-6 h-6" />
              <div className="text-lg font-semibold">All Categories</div>
            </div>
            <div className="absolute left-0 hidden w-full p-6 bg-white border border-t-0 border-gray-100 rounded-b cursor-default group top-12 group-hover:block animate-menu-hover">
              <ul className="space-y-3">
                <li className="cursor-pointer hover:text-[#0167F3] font-medium text-gray-700 text-base">
                  Electronics
                </li>
                <li className="cursor-pointer hover:text-[#0167F3] font-medium text-gray-700 text-base">
                  Accessories
                </li>
                <li className="cursor-pointer hover:text-[#0167F3] font-medium text-gray-700 text-base">
                  Televisions
                </li>
                <li className="cursor-pointer hover:text-[#0167F3] font-medium text-gray-700 text-base">
                  Sunglass
                </li>
                <li className="cursor-pointer hover:text-[#0167F3] font-medium text-gray-700 text-base">
                  Watch
                </li>
                <li className="cursor-pointer hover:text-[#0167F3] font-medium text-gray-700 text-base">
                  Man’s Product
                </li>
              </ul>
            </div>
          </div>
          <ul className="flex items-center col-span-3 px-5 py-3 space-x-8">
            <li className="flex items-center text-base font-semibold cursor-pointer hover:text-[#0167F3]">
              <Link to="/">Home</Link>
            </li>
            <li className="flex items-center text-base font-semibold cursor-pointer hover:text-[#0167F3]">
              <Link to="/products">Products</Link>
            </li>
            <li className="flex items-center text-base font-semibold cursor-pointer hover:text-[#0167F3]">
              <span>Shop</span>
              <FiArrowDown className="w-3 h-3 ml-1" />
            </li>
            <li className="flex items-center text-base font-semibold cursor-pointer hover:text-[#0167F3]">
              <span>Blog</span>
              <FiArrowDown className="w-3 h-3 ml-1" />
            </li>
            <li className="flex items-center text-base font-semibold cursor-pointer hover:text-[#0167F3]">
              <span>Contacts us</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
