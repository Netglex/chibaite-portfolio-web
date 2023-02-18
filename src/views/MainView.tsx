import Biography from "features/content/Biography";
import Publications from "features/content/Publications";
import ThemeSwitch from "features/theme/ThemeSwitch";

export default function MainView() {
  return (
    <main className="bg-red-300 dark:bg-lime-600">
      <ThemeSwitch />
      <Biography />
      <Publications />
    </main>
  );
}
