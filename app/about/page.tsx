import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const About = () => (
    <>
        <Navbar />
        <main className="text-center bg-orange-100 text-[#3C552D] p-10 rounded-lg max-w-3xl mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <p className="text-lg">We are a company dedicated to delivering quality and excellence.</p>
        </main>
        <Footer />
    </>
);

export default About;