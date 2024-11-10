import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Contact = () => (
    <>
        <Navbar />
        <main className="text-center bg-orange-100 text-[#3C552D] p-10 rounded-lg max-w-3xl mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg mb-6">If you have any questions, feel free to reach out to us!</p>
            <div className="text-left max-w-md mx-auto">
                <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
                <p className="text-lg mb-1"><strong>Phone (Landline):</strong> +92 (000) 000-00000</p>
                <p className="text-lg mb-1"><strong>Phone (Mobile):</strong> +92 (000) 000-0000</p>
                <p className="text-lg"><strong>Email:</strong> <a href="mailto:contact@mycompany.com">info@company.com</a></p>
            </div>
        </main>
        <Footer />
    </>
);

export default Contact;