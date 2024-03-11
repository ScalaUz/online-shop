import { FaCaretRight, FaHome, FaMinus } from "react-icons/fa";

const Faq: React.FC = () => {
  return (
    <div className="py-12 bg-sky-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="text-2xl font-bold text-gray-700">My card</div>
          <ul className="flex items-center space-x-3">
            <li className="flex items-center space-x-1 text-gray-500">
              <FaHome className="w-4 h-4" />
              <span className="text-sm">Home</span>
            </li>
            <li className="flex items-center space-x-1 text-gray-500">
              <FaCaretRight className="w-4 h-4" />
              <span className="text-sm">My cart</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center mb-10">
          <h3 className="relative mb-6 pb-4 text-3xl font-extrabold text-gray-900 text-center before:w-14 before:bg-[#0167F3] before:left-1/2 before:-translate-x-1/2 before:absolute before:bottom-0 before:h-[2px] before:rounded-sm">
            Haven't Found The Answer?
            <br />
            Ask Us Your Question.
          </h3>
          <p className="w-5/12 text-sm text-center text-gray-500">
            We normally respond within 2 business days. Most popular questions
            will appear on this page.
          </p>
        </div>

        <ul className="flex flex-col justify-center px-6 mx-48 bg-white divide-y rounded">
          <li className="py-5">
            <button className="flex items-center focus:outline-none">
              <FaMinus className="w-5 h-5 text-[#0167F3]" />
              <span className="mx-4 text-xl text-gray-700">
                How i can play for my appoinment ?
              </span>
            </button>
            <div className="p-2 my-5 ml-10 border-l-2 border-[#0167F3]">
              <p className="px-2 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                eum quae. Harum officiis reprehenderit ex quia ducimus minima id
                provident molestias optio nam vel, quidem iure voluptatem,
                repellat et ipsa. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Magni, eum quae. Harum officiis reprehenderit
                ex quia ducimus minima id provident molestias optio nam quidem.
              </p>
            </div>
          </li>
          {/* Add more list items as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Faq;
