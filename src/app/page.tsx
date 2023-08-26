
import Feed from "@/app/components/Feed";
import NavBar from "./components/Navbar";
import MyBooks from "./components/Book";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <main className="container mx-auto mb-24 p-4 md:mb-0 md:w-screen md:pl-24">
        <div className="flex flex-col md:flex-row">
          <div className="md:basis-2/3">
            <Hero />
            <MyBooks />
          </div>
          <div className="md:basis-1/3">
            <Feed />
          </div>
        </div>
      </main>
      <NavBar />
    </>
  );
}