import { Sidebar } from "../src/Sidebar";
import { Header } from "../src/Header";

export default function Home() {
  return (
    <main className="m-auto flex h-full max-w-4xl flex-col px-4">
      <Header />
      <Sidebar />
    </main>
  );
}
