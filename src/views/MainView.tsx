import Navbar from "features/Navbar";
import Activities from "features/Activities/Activities";
import Biography from "features/Biography";
import Publications from "features/Publications/Publications";

export default function MainView() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="m-0 overflow-hidden rounded-none bg-zinc-100 p-12 dark:bg-zinc-900 sm:m-12 sm:rounded-lg">
        <Biography />
        <Publications />
        <Activities />
      </main>
    </div>
  );
}
