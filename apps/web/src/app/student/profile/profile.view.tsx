import { Header } from "@/common/components/header";
import { Sidebar } from "../components/sidebar";

export default function ProfileView() {
  return (
    <main className="flex flex-1 flex-row p-3 gap-3 h-screen">
      <div className="bg-background rounded-md h-full">
        <Sidebar />
      </div>
      <div className="flex flex-1 flex-col bg-background rounded-md overflow-auto overflow-x-hidden">
        <Header />
        
      </div>
    </main>
  );
}
