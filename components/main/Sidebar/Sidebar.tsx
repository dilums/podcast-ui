import menu from "@/data/menu.json";
import playlists from "@/data/playlists.json";

type SidebarProps = {};
export default function Sidebar({}: SidebarProps) {
  return (
    <div className="fixed left-0  top-0 bottom-0 w-64 z-20 bg-app-1000 pt-14 p-2">
      <h3 className="p-4 font-semibold text-lg">Menu</h3>
      <div className="">
        {menu.map((i) => (
          <div className="p-2" key={i.id}>
            <button
              className={`py-1 px-2 rounded-md w-full flex items-center text-left ${
                i.isSelected ? "text-primary font-semibold" : "text-app-200"
              }`}
              onClick={() => {}}
            >
              <span
                dangerouslySetInnerHTML={{ __html: i.icon }}
                className="w-6 h-6"
              ></span>

              <span className="ml-2">{i.title}</span>
            </button>
          </div>
        ))}
      </div>
      <h3 className="p-4 font-semibold text-lg mt-4">Playlists</h3>
      <div className="">
        {playlists.map((i) => (
          <div className="p-2" key={i.id}>
            <button
              className="py-1 px-2 rounded-md w-full text-left"
              onClick={() => {}}
            >
              {i.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
