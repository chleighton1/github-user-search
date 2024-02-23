import Image from "next/image";
import Search from "./components/Search";
import ThemeSwitch from "./components/ThemeSwitch";
import Card from "./components/Card";

export default function Home() {
  return (
    <main className="p-6">
      <div className="flex justify-between mb-8">
        <h1 className="text-3xl text-card-dark dark:text-white font-medium">
          devfinder
        </h1>
        <ThemeSwitch />
      </div>
      <Search />
      <Card />
    </main>
  );
}
