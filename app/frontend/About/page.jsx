import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f9fafb]">{/* Light background */}

      {/* HERO SECTION */}
      <section className="w-full bg-gradient-to-b from-green-100 to-white py-20 px-6 text-center rounded-b-3xl shadow-sm">
        <h1 className="text-5xl font-extrabold text-slate-800">
          About <span className="text-green-600">GoCart.</span>
        </h1>
        <p className="mt-4 text-lg text-slate-700 max-w-2xl mx-auto">
          Discover a smarter, simpler and more delightful shopping experience.
        </p>
      </section>

      {/* WHY CHOOSE US – Shopify style mini cards */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-slate-800">Why People Love Shopping With Us</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* CARD 1 */}
          <div className="bg-green-50 p-8 rounded-3xl shadow-md hover:shadow-xl transition border border-gray-100 text-center">
            <Image src="/download.jpg" alt="Fast Delivery" width={280} height={280} className="mx-auto" />
            <h3 className="text-xl font-semibold mt-4 text-slate-800">Lightning Fast Delivery</h3>
            <p className="text-slate-600 mt-2 text-sm">We bring your products to your doorstep quickly and safely.</p>
          </div>

          {/* CARD 2 */}
          <div className="bg-green-50 p-8 rounded-3xl shadow-md hover:shadow-xl transition border border-gray-100 text-center">
            <Image src="/quality2.jpg" alt="Quality" width={280} height={280} className="mx-auto" />
            <h3 className="text-xl font-semibold mt-4 text-slate-800">Premium Quality Guaranteed</h3>
            <p className="text-slate-600 mt-2 text-sm">Every product is hand‑checked for quality & reliability.</p>
          </div>

          {/* CARD 3 */}
          <div className="bg-green-50 p-8 rounded-3xl shadow-md hover:shadow-xl transition border border-gray-100 text-center">
            <Image src="/support.jpg" alt="Support" width={280} height={240} className="mx-auto" />
            <h3 className="text-xl font-semibold mt-4 text-slate-800">24×7 Dedicated Support</h3>
            <p className="text-slate-600 mt-2 text-sm">Have a question? Our support team is always here to help.</p>
          </div>
        </div>
      </section>

      {/* OUR MISSION – light section with illustration */}
      <section className="bg-green-50 py-20 px-6 rounded-t-3xl shadow-inner">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-slate-800">Our Mission</h2>
            <p className="text-slate-600 mt-4 leading-relaxed text-lg">
              We aim to create an effortless online shopping experience with curated
              collections, smooth checkout, fast delivery, and unmatched customer support.
            </p>
          </div>

          <Image src="/images.jpg" width={400} height={400} alt="Mission" className="mx-auto" />
        </div>
      </section>

      {/* BRAND VALUES – small premium icons like Shopify */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-slate-800">Our Core Values</h2>

        <div className="grid md:grid-cols-4 gap-8 mt-12 text-center">
          <div className="bg-green-50 p-6 rounded-2xl shadow border border-gray-100 hover:shadow-md transition">
            <h4 className="font-semibold text-slate-800">Trust</h4>
            <p className="text-slate-600 text-sm mt-1">We prioritize honesty and transparency.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-2xl shadow border border-gray-100 hover:shadow-md transition">
            <h4 className="font-semibold text-slate-800">Innovation</h4>
            <p className="text-slate-600 text-sm mt-1">We constantly improve for better experiences.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-2xl shadow border border-gray-100 hover:shadow-md transition">
            <h4 className="font-semibold text-slate-800">Quality</h4>
            <p className="text-slate-600 text-sm mt-1">We deliver only the best products.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-2xl shadow border border-gray-100 hover:shadow-md transition">
            <h4 className="font-semibold text-slate-800">Customer First</h4>
            <p className="text-slate-600 text-sm mt-1">You come first, always.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
