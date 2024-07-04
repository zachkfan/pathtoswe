import SideNav from "@/app/ui/navigation/sidenav";
import Footer from "@/app/ui/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <SideNav />
        <div className="flex-grow px-6 md:overflow-y-auto md:px-12 md:pt-12">
          {children}
          <div className="mx-[-24px] md:mx-[-48px] md:mt-12">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
