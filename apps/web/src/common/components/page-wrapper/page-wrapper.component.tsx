type PageWrapperProps = {
  children: React.ReactNode;
};

export function PageWrapper({ children }: PageWrapperProps) {
  return <div className="w-[100vw] h-[100vh] p-5">{children}</div>;
}
