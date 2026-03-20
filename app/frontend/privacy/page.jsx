export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-green-50 py-12 px-4">
      
      <div className="max-w-4xl mx-auto bg-green-100/80 backdrop-blur-sm p-8 md:p-12 rounded-xl shadow-md border border-green-100">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-black-700 mb-4">
          Privacy Policy
        </h1>

        <p className="text-black-500 mb-8 text-sm">
          Last updated: March 2026
        </p>

        {/* Section */}
        <section className="space-y-3 leading-relaxed">
          <h2 className="text-xl font-semibold text-green-600 border-l-4 border-green-400 pl-3">
            1. Information We Collect
          </h2>
          <p>
            We collect personal information such as your name, email address,
            phone number, and shipping details when you place an order or use our services.
          </p>
        </section>

        {/* Section */}
        <section className="mt-8 space-y-3 leading-relaxed">
          <h2 className="text-xl font-semibold text-green-600 border-l-4 border-green-400 pl-3">
            2. How We Use Your Information
          </h2>
          <p>
            Your data helps us process orders, improve services, and provide a better shopping experience.
          </p>
        </section>

        {/* Section */}
        <section className="mt-8 space-y-3  leading-relaxed">
          <h2 className="text-xl font-semibold text-green-600 border-l-4 border-green-400 pl-3">
            3. Sharing of Information
          </h2>
          <p>
            We do not sell your personal data. It is only shared with trusted partners for order fulfillment.
          </p>
        </section>

        {/* Section */}
        <section className="mt-8 space-y-3 leading-relaxed">
          <h2 className="text-xl font-semibold text-green-600 border-l-4 border-green-400 pl-3">
            4. Data Security
          </h2>
          <p>
            We use industry-standard security measures to protect your information.
          </p>
        </section>

        {/* Section */}
        <section className="mt-8 space-y-3 leading-relaxed">
          <h2 className="text-xl font-semibold text-green-600 border-l-4 border-green-400 pl-3">
            5. Your Rights
          </h2>
          <p>
            You can access, update, or delete your personal data anytime by contacting us.
          </p>
        </section>

        {/* Contact */}
        <section className="mt-10 border-t border-green-200 pt-6">
          <h2 className="text-lg font-semibold text-green-700 mb-2">
            Contact Us
          </h2>
          <p className="text-slate-700">
            Email: <span className="text-green-600 font-medium">support@gocart.com</span>
          </p>
        </section>

      </div>
    </div>
  );
}