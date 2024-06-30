export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black-gray">
      <img
        src="../black_gray_logo.png"
        className="absolute top-0 left-0 w-32 h-32 p-2"
      />
      {children}
    </div>
  );
}
