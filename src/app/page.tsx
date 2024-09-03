import Banner from "./ui/home/banner";
import HomeBody from "./ui/home/home_body";
import Card from "./ui/home/profile_cards";
import HomeContainer from "./ui/home/home_container";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <>
      <HomeContainer>
        <Banner />
        <HomeBody />
        <div className="bg-white px-[10%] flex flex-col items-center py-24 gap-5">
          <h1 className="text-black-gray font-bold text-4xl mb-8">About Us</h1>
          <div className="flex flex-wrap justify-center gap-40">
            <div className="lg:w-[30%] w-2/5">
              <Card
                image={"/zach_photo.png"}
                imageAlt={"Photo of Zachary Fan"}
                name={"Zachary Fan"}
                description={
                  "Hello, My name is Zachary Fan and I am a second year studying Information Systems and Computer Science at Carnegie Mellon University."
                }
                linkedin={"https://www.linkedin.com/in/zachary-fan/"}
                email={"zacharyf@andrew.cmu.edu"}
              />
            </div>
            <div className="lg:w-[30%] w-2/5">
              <Card
                image={"/kevin_photo.jpg"}
                imageAlt={"Photo of Kevin Zheng"}
                name={"Kevin Zheng"}
                description={
                  "Hello, My name is Kevin Zheng and I am a second year studying Information Systems and Computer Science at Carnegie Mellon University."
                }
                linkedin={"https://www.linkedin.com/in/kevin-zheng-h7/"}
                email={"hzheng4@andrew.cmu.edu"}
              />
            </div>
          </div>
        </div>
      </HomeContainer>
      <Analytics />
    </>
  );
}
