export function MaxWidthLayoutComponent({
  children,
  className,
}: {
  children: JSX.Element | JSX.Element[];
  className?: string;
}) {
  return (
    <div className={`w-full max-w-[1800px] flex items-center ${className}`}>
      {children}
    </div>
  );
}
