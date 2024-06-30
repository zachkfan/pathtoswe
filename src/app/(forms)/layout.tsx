import CornerLogo from '../ui/login_components/corner_logo';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black-gray">
      <CornerLogo></CornerLogo>
      {children}
    </div>
  );
}
