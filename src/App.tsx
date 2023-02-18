import { Strings } from "assets/strings";
import SandboxView from "views/SandboxView";

export default function App() {
  const dark = false;

  return (
    <div className={`min-h-screen ${dark ? "dark" : ""}`}>
      <div className="bg-red-300 dark:bg-lime-600 text-lg">{Strings.TEST_STRING}</div>
      <SandboxView />
    </div>
  );
}
