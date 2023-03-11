import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectDark, setDark } from "app/slices/themeSlice";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
import Button from "../common/Button";

export default function Navbar() {
  const dark = useAppSelector(selectDark);
  const dispatch = useAppDispatch();

  return (
    <nav className="flex items-center justify-end bg-zinc-100 p-3 dark:bg-zinc-900 border-b-2 border-zinc-300 dark:border-zinc-700 sm:border-none">
      <Button onClick={() => dispatch(setDark(!dark))}>
        {dark ? <RiMoonClearLine /> : <RiSunLine />}
      </Button>
    </nav>
  );
}
