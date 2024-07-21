import { Sidebar } from "../src/Sidebar";
import { Header } from "../src/Header";
import { REACT_CARDS } from "@/src/reactCards";
import { ReactCard } from "../src/ReactCard";

export default function Home({ searchParams }) {
  const currentFilter = searchParams.filter;
  const filters = [...new Set(REACT_CARDS.map((card) => card.category))];
  const names = REACT_CARDS.map((card) => card.name);
  console.log({ currentFilter });
  return (
    <main className="m-auto flex h-full max-w-4xl flex-col px-4">
      <Header />
      <div className="mb-4 mt-8 flex py-2 flex-1 gap-4 overflow-auto max-lg:flex-col"></div>
      <Sidebar currentFilter={currentFilter} filters={filters} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {REACT_CARDS.filter((card) => {
          if (!currentFilter) return true;
          return card.category === currentFilter;
        }).map((card) => (
          <ReactCard hideCategory={currentFilter} key={card.name} card={card} />
        ))}
      </div>
    </main>
  );
}
