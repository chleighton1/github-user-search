import Image from "next/image";
import Search from "./components/Search";
import ThemeSwitch from "./components/ThemeSwitch";

export default function Home() {
  return (
    <>
      <h1>HELLO WORLD</h1>
      <Search title="Test 1" />
      <ThemeSwitch />
    </>
  );
}
