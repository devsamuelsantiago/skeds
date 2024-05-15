type GridProps = {
  label: string;
  type: 'class' | 'subject';
  onClick?: () => void;
  asAdd?: boolean;
};

export const Grid = ({ label, type, onClick, asAdd }: GridProps) => {
  return type === 'class' ? (
    <div
      onClick={onClick}
      className={`${asAdd && 'border-dashed text-muted-foreground'} cursor-pointer w-full py-2 flex items-center justify-center border border-input bg-background shadow-md hover:bg-accent hover:text-accent-foreground rounded-md`}
    >
      {label}
    </div>
  ) : (
    <div
      onClick={onClick}
      className={`${asAdd && 'border-dashed text-muted-foreground'} cursor-pointer w-full py-2 flex items-center justify-center border border-input bg-background shadow-md hover:bg-accent hover:text-accent-foreground rounded-md`}
    >
      {label}
    </div>
  );
};
