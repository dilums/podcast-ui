import {
  HeartIcon,
  PlayBack,
  PlayForward,
  PlayIcon,
  PlusCircleIcon,
  Repeat,
  Shuffle,
  VolumeIcon,
} from "@/components/icons";

type PlayerBarProps = {};
export default function PlayerBar({}: PlayerBarProps) {
  return (
    <div className="fixed right-0 bottom-0 left-0 z-30 bg-app-1000">
      <div className="w-full h-1 bg-app-700">
        <div className="w-3/4 rounded-r-md h-full bg-primary"></div>
      </div>

      <div className="flex items-center justify-between">
        <div className="inline-flex ">
          <img src="https://i.ibb.co/J2FJ7jD/10.jpg" className="w-16 h-16" />
          <div className="ml-3 pt-1">
            <h3 className="test-semibold">Episode 1 : How to feel yourself</h3>
            <p className="text-sm text-app-400">Love Kit</p>
          </div>
        </div>
        <div className="inline-flex items-center">
          <button
            className="w-10 h-10 grid place-items-center rounded-full text-app-400"
            onClick={() => {}}
          >
            <Repeat />
          </button>
          <button
            className="ml-4 w-10 h-10 grid place-items-center rounded-full text-app-400"
            onClick={() => {}}
          >
            <PlayBack />
          </button>
          <button
            className="ml-4  w-10 h-10 bg-primary grid place-items-center rounded-full"
            onClick={() => {}}
          >
            <PlayIcon />
          </button>
          <button
            className="ml-4 w-10 h-10 grid place-items-center rounded-full  text-app-400"
            onClick={() => {}}
          >
            <PlayForward />
          </button>
          <button
            className="ml-4 w-10 h-10 grid place-items-center rounded-full text-app-400"
            onClick={() => {}}
          >
            <Shuffle />
          </button>
        </div>
        <div className="inline-flex items-center pr-4">
          <button
            className="w-10 h-10 grid place-items-center rounded-full text-app-400"
            onClick={() => {}}
          >
            <HeartIcon />
          </button>
          <button
            className="ml-4 w-10 h-10 grid place-items-center rounded-full text-app-400"
            onClick={() => {}}
          >
            <PlusCircleIcon />
          </button>
          <button
            className="ml-6 w-10 h-10 grid place-items-center rounded-full text-app-400"
            onClick={() => {}}
          >
            <VolumeIcon />
          </button>
          <div className="h-1.5 w-52 rounded-md bg-app-700">
            <div className="h-1.5 rounded-md w-1/4 bg-primary"> </div>
          </div>
        </div>
      </div>
    </div>
  );
}
