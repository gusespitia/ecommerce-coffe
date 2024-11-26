import { cn } from "@/lib/utils";
interface IconButtonProps {
  onlClick: () => void;
  icon: React.ReactElement;
  className?: string;
}
const IconButton = (props: IconButtonProps) => {
  const { onlClick, icon, className } = props;
  return (
    <button
      onClick={onlClick}
      className={cn(
        "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
        className
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
