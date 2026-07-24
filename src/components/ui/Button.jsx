function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
  darkMode = true,
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium transition-all duration-300";

  const variants = {
    primary:
  "bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300",

    outline: darkMode
      ? "border border-slate-500 bg-transparent text-white hover:bg-purple-600 hover:border-purple-600"
      : "border border-slate-300 bg-white text-slate-900 hover:bg-purple-100 hover:border-purple-500",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;