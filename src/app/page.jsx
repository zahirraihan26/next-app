import Hero from "@/Components/Hero/Hero";
import PopularCourses from "@/Components/PopularCourses/PopularCourses";
import WhyChoose from "@/Components/WhyChoose/WhyChoose";
<<<<<<< HEAD
import Ourstudent from "@/Components/Ourstudent/Ourstudent";
import Blog from "@/Components/Blog/Blog";
import FAQ from "@/Components/FAQ/FAQ";
import Newsletter from "@/Components/Newsletter/Newsletter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <WhyChoose />
      <PopularCourses />
      <Ourstudent />
      <Blog />
      <FAQ />
      <Newsletter />
=======
import Ourstudent from "@/Components/Ourstudent/Ourstudent"
import Blog from "@/Components/Blog/Blog";
import FAQ from "@/Components/FAQ/FAQ";
import Newsletter from "@/Components/Newsletter/Newsletter";


export default function Home() {
  return (
    <div className="flex  items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="">
          <Hero></Hero>
          <WhyChoose></WhyChoose>
          <PopularCourses></PopularCourses>
          <Ourstudent></Ourstudent>
          <Blog></Blog>
          <FAQ> </FAQ>
          <Newsletter></Newsletter>
          <div>
            
          </div>
      </div>
      <div>
        
      </div>
>>>>>>> c06684a7c8da1648314e8bf4dd156984f7a30f57
    </div>
  );
}
