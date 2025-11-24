import Hero from "@/Components/Hero/Hero";
import PopularCourses from "@/Components/PopularCourses/PopularCourses";
import WhyChoose from "@/Components/WhyChoose/WhyChoose";


export default function Home() {
  return (
    <div className="flex  items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="">
          <Hero></Hero>
          <WhyChoose></WhyChoose>
          <PopularCourses></PopularCourses>
          
          <div>
            
          </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}
