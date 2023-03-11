import { useAppSelector } from "app/hooks";
import { selectDark } from "app/slices/themeSlice";
import MainView from "views/MainView";

export default function App() {
  const dark = useAppSelector(selectDark);

  return (
    <div
      className={`${
        dark ? "dark bg-zinc-800 text-white" : "bg-zinc-200 text-black"
      }`}
    >
      <MainView />
    </div>
  );
}
