

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="root-layout">
        SIDEBAR
        {children}
    </main>
        
  );
}