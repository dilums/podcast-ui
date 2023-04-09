import { ChevronRight, MoreOptions, PlayIcon } from "@/components/icons";
import Image from "next/image";

type ContinueListningProps = {};
export default function ContinueListning({}: ContinueListningProps) {
  return (
    <div className="w-1/2 p-2">
      <div className="flex items-center w-full justify-between">
        <h2 className="font-semibold text-xl">Continue Listning</h2>
        <button className="w-6 h-6" onClick={() => {}}>
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      <div className="bg-app-800 rounded-md mt-2 h-32 flex items-center">
        <div className="h-32 relative rounded-l-md bg-placeholder">
          <svg
            className="h-full"
            viewBox="0 0 320 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
          <Image
            src="https://res.cloudinary.com/dfjmpbosw/image/upload/v1668934077/sample%20square/11_shq0x3.jpg"
            alt="continue listning"
            layout="fill"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 80vw"
            className="rounded-l-md"
          />
        </div>

        <div className="h-full flex flex-col w-full">
          <div className="grow flex">
            <div className="grow flex flex-col">
              <div className="grow p-2">
                <h3 className="font-semibold">
                  Episode 1 : How to feel yourself
                </h3>
                <p className="text-sm text-app-400">Love Kit</p>
              </div>
              <div className="shrink-0 text-sm font-semibold pb-1 px-2">
                12min out of 32
              </div>
            </div>
            <div className="shrink-0 p-2 flex flex-col items-center justify-between">
              <button className="w-6 h-6 text-app-400" onClick={() => {}}>
                <MoreOptions />
              </button>
              <button
                className="w-10 h-10 bg-primary grid place-items-center rounded-full"
                onClick={() => {}}
              >
                <PlayIcon />
              </button>
            </div>
          </div>
          <div className="h-1.5 shrink-0 rounded-br-md bg-app-700">
            <div className="h-full w-1/2 rounded-r-md bg-primary"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
