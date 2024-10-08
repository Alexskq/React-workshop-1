import Link from "next/link";
import clsx from "clsx";

export const Sidebar = ({ filters, currentFilter }) => {
  return (
    <aside className="flex w-full flex-wrap gap-4 lg:max-w-[200px] lg:flex-col">
      <MenuItem isActive={!currentFilter} filter="" key="filter">
        All
      </MenuItem>
      {filters.map((filter) => (
        <MenuItem
          key={filter}
          filter={filter}
          isActive={filter === currentFilter}
        >
          {filter}
        </MenuItem>
      ))}
    </aside>
  );
};

const MenuItem = ({ filter, children, isActive }) => {
  return (
    <Link
      href={`/?filter=${filter}`}
      className={clsx(
        " rounded-md px-2 py-1 capitalize transition-colors hover:bg-gray-200 ",
        {
          "font-bold": isActive,
        }
      )}
    >
      {children}
    </Link>
  );
};
