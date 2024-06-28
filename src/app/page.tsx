import Banner from "./ui/home/banner";
import HomeBody from "./ui/home/home_body";
import Card from "./ui/home/profile_cards";
import Footer from './ui/footer';
import ScrollButton from './ui/scroll_button';

export default function Home() {
  return (
    <div>
      <main className="font-sans">
      <Banner/>
      <HomeBody/>
      <div className="bg-white px-[10%] grid grid-cols-12 py-24 gap-20">
        <h1 className="mx-auto col-span-full text-black-gray font-bold text-4xl">About Us</h1>
        <div className="col-span-7 lg:col-span-4">
        <Card image={"/zach_photo.png"} imageAlt={"Photo of Zachary Fan"} name={"Zachary Fan"} description={"Hello, My name is Zachary Fan and I am a second year studying Information Systems and Computer Science at Carnegie Mellon University."} linkedin={"https://www.linkedin.com/in/zachary-fan/"} email={"zacharyf@andrew.cmu.edu"}></Card>
        </div>
        <div className="col-span-7 lg:col-span-4">
        <Card image={"/kevin_photo.jpg"} imageAlt={"Photo of Kevin Zheng"} name={"Kevin Zheng"} description={"Hello, My name is Kevin Zheng and I am a second year studying Information Systems and Computer Science at Carnegie Mellon University."} linkedin={"https://www.linkedin.com/in/kevin-zheng-h7/"} email={"hzheng4@andrew.cmu.edu"}></Card>
        </div>
        <div className="col-span-7 lg:col-span-4">
        <Card image={"/cole_photo.png"} imageAlt={"Photo of Cole Drake"} name={"Cole Drake"} description={"Hello, My name is Cole Drake and I am a second year studying Electrical Computer Engineering at Carnegie Mellon University."} linkedin={"https://www.linkedin.com"} email={"coled@andrew.cmu.edu"}></Card>
        </div>
      </div>
      <ScrollButton />
      </main>
      <Footer />
    </div>
  );
}
