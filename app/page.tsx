import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="text-center bg-[#FEF3E2] text-[#3C552D] p-5 rounded-lg max-w-3xl mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-4">Welcome to My Company</h1>
        <p className="text-lg">We provide top-notch services for our clients.</p>
      </main>
      <Footer />
    </>
  );
}