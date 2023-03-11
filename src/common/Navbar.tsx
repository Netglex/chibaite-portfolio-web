import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectDark, setDark } from "app/slices/themeSlice";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
import Button from "./Button";

export default function Navbar() {
  const dark = useAppSelector(selectDark);
  const dispatch = useAppDispatch();

  return (
    <nav className="flex items-center justify-end border-b-2 border-zinc-300 bg-zinc-100 py-3 px-6 dark:border-zinc-700 dark:bg-zinc-900 sm:border-none">
      <Button onClick={() => dispatch(setDark(!dark))}>
        {dark ? <RiMoonClearLine /> : <RiSunLine />}
      </Button>
    </nav>
  );
}
