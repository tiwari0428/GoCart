export default function Pricing() {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">
      
      <div className="max-w-5xl w-full text-center">
        
        <h1 className="text-4xl font-bold text-black-700 mb-4">
          Become a Plus Member
        </h1>

        <p className="text-green-500 mb-10">
          Unlock premium features and enhance your shopping experience 🚀
        </p>

        {/* Pricing Card */}
        <div className="bg-green-100 rounded-2xl shadow-md p-8 max-w-md mx-auto border border-green-200 hover:shadow-xl transition duration-300">
          
          <h2 className="text-2xl font-semibold text-black-700 mb-2">
            Plus Plan
          </h2>

          <p className="text-4xl font-bold text-black-800 mb-4">
            ₹199<span className="text-lg text-black-500">/month</span>
          </p>

          <ul className="text-black-700 text-left space-y-3 mb-6">
            <li>✔ Priority Support</li>
            <li>✔ Exclusive Deals</li>
            <li>✔ Faster Checkout</li>
            <li>✔ Early Access to Sales</li>
          </ul>

          <button className="w-full bg-green-500 text-black py-2 rounded-lg hover:bg-green-600 transition">
            Subscribe Now
          </button>
        </div>

      </div>
    </div>
  );
}