import podcastItems from "@/data/podcast-set-1.json";
import PodcastItem from "@/components/common/PodcastItem";

export default function TrendingPodcasts() {
  return (
    <div className="">
      <h2 className="p-2 font-semibold text-xl">Trending Podcasts</h2>
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
