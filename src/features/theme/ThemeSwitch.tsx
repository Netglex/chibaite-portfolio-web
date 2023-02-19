import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectDark, setDark } from "./themeSlice";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";

export default function ThemeSwitch() {
  const dark = useAppSelector(selectDark);
  const dispatch = useAppDispatch();

  return (
    <div>
      <button className="border" onClick={(_) => dispatch(setDark(!dark))}>
        {dark ? <RiMoonClearLine /> : <RiSunLine />}
      </button>
    </div>
  );
}
