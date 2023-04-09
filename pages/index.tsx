import CustomHead from "@/components/common/CustomHead";
import Content from "@/components/main/Content";
import Navbar from "@/components/main/Navbar";
import PlayerBar from "@/components/main/PlayerBar";
import Sidebar from "@/components/main/Sidebar";
export default function Home() {
  return (
    <>
      <CustomHead title="Podcast UI" />
      <Navbar />
      <Content />
      <Sidebar />
      <PlayerBar />
    </>
  );
}
