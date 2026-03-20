export default function ContactPage() {
  return (
    <div className="w-full">
      
      {/* Whole Contact Box Section — light pastel BG added */}
      <div className="max-w-4xl mx-auto px-4 mt-10 mb-16 
                      bg-green-50 /* 👈 light soft blue background */
                      p-10 rounded-3xl shadow-inner">

        <h1 className="text-4xl font-bold text-gray-800 text-center">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center mt-2 mb-8">
          Feel free to reach out — our team will respond shortly.
        </p>

        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200">

          <div className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded-xl bg-gray-50 
                         focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-3 rounded-xl bg-gray-50 
                         focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <textarea
              placeholder="Your Message"
              className="w-full h-32 border border-gray-300 p-3 rounded-xl bg-gray-50
                         focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="mt-6 text-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-xl hover:bg-purple-700 transition">
              Send Message
            </button>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">

        <div className="bg-orange-100 p-6 rounded-xl shadow text-center">
          <h3 className="font-semibold text-lg">Best Products</h3>
          <p className="text-gray-700 mt-1">Top rated items for you</p>
        </div>

        <div className="bg-blue-100 p-6 rounded-xl shadow text-center">
          <h3 className="font-semibold text-lg">20% Discounts</h3>
          <p className="text-gray-700 mt-1">On selected items</p>
        </div>

        <div className="bg-green-100 p-6 rounded-xl shadow text-center">
          <h3 className="font-semibold text-lg">Free Shipping</h3>
          <p className="text-gray-700 mt-1">Orders above $50</p>
        </div>

      </div>

    </div>
  );
}
