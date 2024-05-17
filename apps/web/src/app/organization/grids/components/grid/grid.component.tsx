type GridProps = {
  label: string;
  onClick?: () => void;
  asAdd?: boolean;
  icon?: React.ReactNode;
  className?: string;
};

export const Grid = ({ label, onClick, asAdd, icon, className }: GridProps) => {
  return (
    <div
      onClick={onClick}
      className={`${asAdd && 'border border-dashed text-muted-foreground !justify-center'} flex items-center justify-between w-full py-4 px-6 text-md bg-card shadow-md transition-transform hover:translate-x-1 rounded-md ${className}`}
    >
      {label}
      {icon && icon}
    </div>
  );
};
