import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  SearchIcon,
} from "@/components/icons";

type NavbarProps = {};
export default function Navbar({}: NavbarProps) {
  return (
    <div className="fixed right-0 top-0 left-0 z-10 h-14 bg-app-1000 pl-64 flex items-center">
      <div className="inline-flex items-center shrink-0">
        <button
          className="w-10 h-10 grid place-items-center rounded-full text-app-200"
          onClick={() => {}}
        >
          <ChevronLeft />
        </button>
        <button
          className="ml-4 w-10 h-10 grid place-items-center rounded-full text-app-500"
          onClick={() => {}}
        >
          <ChevronRight />
        </button>
      </div>
      <div className="inline-flex items-center grow pl-4 pr-20 relative">
        <input className="w-full py-1 pr-4 pl-12 bg-app-900 rounded-full" />
        <div className="absolute top-0 bottom-0 left-4 w-12 grid place-items-center text-app-400">
          <SearchIcon className="w-5 h-5" />
        </div>
      </div>
      <div className="inline-flex items-center pr-4 shrink-0">
        <h3 className="font-semibold text-sm">Julia</h3>

        <img
          src="https://i.ibb.co/SJLrP9x/a3.jpg"
          alt="julia"
          className="w-9 h-9 ml-4 rounded-full"
        />
        <button
          className="ml-2 w-10 h-10 grid place-items-center rounded-full text-app-200"
          onClick={() => {}}
        >
          <ChevronDown />
        </button>
      </div>
    </div>
  );
}
