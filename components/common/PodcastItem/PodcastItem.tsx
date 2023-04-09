import Image from "next/image";

type PodcastItemProps = {
  item: {
    title: string;
    episodes: string;
    id: string;
    image: string;
    author: string;
    isFavourite: string;
  };
};
export default function PodcastItem({ item }: PodcastItemProps) {
  return (
    <button className="text-left w-full" onClick={() => {}}>
      <div className="w-full relative rounded-lg bg-placeholder">
        <svg
          className="w-full"
          viewBox="0 0 320 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        ></svg>
        <Image
          src={item.image}
          alt={item.title}
          layout="fill"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 80vw"
          className="rounded-lg"
        />
      </div>
      <div className="mt-2 font-semibold"> {item.title} </div>
      <div className="text-app-400 text-sm">by {item.author} </div>
    </button>
  );
}
