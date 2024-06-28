import SideNav from "@/app/ui/navigation/sidenav";
import Footer from "@/app/ui/footer";
import ScrollButton from "@/app/ui/scroll_button";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <SideNav />
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
          <ScrollButton />
        </div>
      </div>
      <Footer />
    </div>
  );
}
