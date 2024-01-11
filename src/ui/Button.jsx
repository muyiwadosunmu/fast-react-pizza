import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    "inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + "px-4 py-3 md:px-6 md:py-4 ",
    small: base + " px-4 py-2 md:px-6 md:py-2.5",
    secondary: "inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300  hover:bg-stone-400 focus:bg-stone-300 focus:outline-none hover:text-stone-800focus:ring focus:ring-stone-300 focus:ring-offset-2 active:bg-slate-400 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5"
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
