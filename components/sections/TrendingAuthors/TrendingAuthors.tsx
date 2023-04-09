import { ChevronRight } from "@/components/icons";
import authors from "@/data/authors.json";
import Image from "next/image";

type TrendingAuthorsProps = {};
export default function TrendingAuthors({}: TrendingAuthorsProps) {
  return (
    <div className="w-1/2 p-2">
      <div className="flex items-center w-full justify-between">
        <h2 className="font-semibold text-xl">Trending Authors</h2>
        <button className="w-6 h-6" onClick={() => {}}>
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      <div className="mt-2 h-32">
        <div className="flex items-center h-full">
          {authors.map((i) => (
            <div className="w-1/4 h-full" key={i.id}>
              <button className="w-full h-full" onClick={() => {}}>
                <div className="flex justify-center">
                  <div className="w-20 h-20 relative rounded-full bg-placeholder">
                    <Image
                      src={i.image}
                      alt={i.title}
                      layout="fill"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 80vw"
                      className="rounded-full"
                    />
                  </div>
                </div>
                <p className="mt-2 text-app-400 text-sm font-semibold">
                  {i.title}
                </p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
