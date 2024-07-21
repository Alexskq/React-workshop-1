import { Sidebar } from "../src/Sidebar";
import { Header } from "../src/Header";
import { REACT_CARDS } from "@/src/reactCards";

export default function Home({ searchParams }) {
  const currentFilter = searchParams.filter;
  const filters = [...new Set(REACT_CARDS.map((card) => card.category))];
  console.log({ currentFilter }, { filters });
  return (
    <main className="m-auto flex h-full max-w-4xl flex-col px-4">
      <Header />
      <Sidebar currentFilter={currentFilter} filters={filters} />
    </main>
  );
}
