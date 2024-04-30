export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="bg-zinc-300 h-screen">{children}</main>;
}
