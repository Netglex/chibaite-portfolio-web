import { useAppSelector } from "app/hooks";
import { selectDark } from "features/theme/themeSlice";
import MainView from "views/MainView";

export default function App() {
  const dark = useAppSelector(selectDark);

  return (
    <div className={`min-h-screen ${dark ? "dark" : ""}`}>
      <MainView />
    </div>
  );
}
