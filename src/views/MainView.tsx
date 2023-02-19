import Activities from "features/content/Activities/Activities";
import Biography from "features/content/Biography";
import Publications from "features/content/Publications/Publications";

export default function MainView() {
  return (
    <main className="min-h-screen bg-red-300 dark:bg-lime-600">
      <Biography />
      <Publications />
      <Activities />
    </main>
  );
}
