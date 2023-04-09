import ContinueListning from "@/components/sections/ContinueListning";
import ForYou from "@/components/sections/ForYou";
import TrendingAuthors from "@/components/sections/TrendingAuthors";
import TrendingPodcasts from "@/components/sections/TrendingPodcasts";

type ContentProps = {};
export default function Content({}: ContentProps) {
  return (
    <div className="pl-64 pt-14 pb-20">
      <div className="p-2  max-w-7xl mx-auto">
        <ForYou />
        <div className="flex items-center">
          <ContinueListning />
          <TrendingAuthors />
        </div>

        <TrendingPodcasts />
      </div>
    </div>
  );
}
