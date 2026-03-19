import Hero from "@/Components/Hero/Hero";
import PopularCourses from "@/Components/PopularCourses/PopularCourses";
import WhyChoose from "@/Components/WhyChoose/WhyChoose";
import Ourstudent from "@/Components/Ourstudent/Ourstudent";
import Blog from "@/Components/Blog/Blog";
import FAQ from "@/Components/FAQ/FAQ";
import Newsletter from "@/Components/Newsletter/Newsletter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-violet-500/30">
      <Hero />
      <WhyChoose />
      <PopularCourses />
      <Ourstudent />
      <Blog />
      <FAQ />
      <Newsletter />
    </div>
  );
}
