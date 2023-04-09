import topics from "./data/topics.json";
import podcastItems from "@/data/podcast-set-1.json";
import PodcastItem from "@/components/common/PodcastItem";

export default function ForYou() {
  return (
    <div className="">
      <h2 className="p-2 font-semibold text-xl">For You</h2>
      <div className="flex items-center">
        {topics.map((i) => (
          <div className="p-2" key={i.id}>
            <button
              className="py-1 px-6 rounded-md bg-app-800"
              onClick={() => {}}
            >
              {i.title}
            </button>
          </div>
        ))}
      </div>
      <div className="flex items-center">
        {podcastItems.map((i) => (
          <div className="p-2 w-1/4" key={i.id}>
            <PodcastItem item={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
