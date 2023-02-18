import { useAppSelector } from "app/hooks";
import { Strings } from "assets/strings";
import { selectDark } from "features/theme/themeSlice";
import ThemeSwitch from "features/theme/ThemeSwitch";
import SandboxView from "views/SandboxView";

export default function App() {
  const dark = useAppSelector(selectDark);

  return (
    <div className={`min-h-screen ${dark ? "dark" : ""}`}>
      <ThemeSwitch />
      <div className="bg-red-300 text-lg dark:bg-lime-600">
        {Strings.TEST_STRING}
      </div>
      <SandboxView />
    </div>
  );
}
