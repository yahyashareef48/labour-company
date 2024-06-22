export default function MagicButton({
  title,
  icon,
  position,
  className,
  onClick,
  btnClassName,
}: {
  title: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  className?: string;
  btnClassName?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1.5px] focus:outline-none md:w-60 mt-6 ${btnClassName}`}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#fde47c_0%,#fce98c_50%,#fca03c_100%)]"></span>
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-gray-800 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl ${className}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
}
