import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectDark, setDark } from "./themeSlice";
import { HiMoon, HiSun } from "react-icons/hi";

export default function ThemeSwitch() {
  const dark = useAppSelector(selectDark);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>There should be the button...</div>
      <button className="border" onClick={(_) => dispatch(setDark(!dark))}>
        {dark ? <HiSun /> : <HiMoon />}
      </button>
    </div>
  );
}
