import Link from "next/link";
import { REACT_CARDS } from "./reactCards";

export const Sidebar = () => {
  const params = new URL({REACT_CARDS[url]}).searchParams;
  const category = params.get("name");
  console.log(category);

  return <Link href="/">Dashboard</Link>;
};
