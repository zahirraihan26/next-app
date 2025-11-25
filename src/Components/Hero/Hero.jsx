import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full h-screen">
      <Image
        src="/hero-education.jpg" // <-- remove /public
        alt="Education Hero Section"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30">
        <h1 className=" text-3xl md:text-5xl font-bold mb-4">Welcome to EduPlatform</h1>
        <p className="text-xl mb-6">Learn anything, anywhere, anytime</p>
        <button className="px-6 py-3 bg-blue-600 rounded-md hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </div>
  );
}
