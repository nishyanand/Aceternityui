export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 shadow-md">
        <h1 className="text-xl font-bold">Aset</h1>
        <nav className="hidden md:flex gap-6 text-gray-700">
          <a href="#">Home</a>
          <a href="#">Feature</a>
          <a href="#">Benefit</a>
          <a href="#">Pricing</a>
          <a href="#">Testimonials</a>
          <a href="#">FAQ</a>
        </nav>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          Get Started
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Empowering Your Investments with AI Technology
        </h2>
        <p className="text-lg max-w-2xl mb-8 text-gray-600">
          Transform your portfolio with real-time insights and smarter decision-making.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">
            Get Started
          </button>
          <button className="px-6 py-3 border border-gray-400 rounded-lg">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-white text-center">
        <h3 className="text-3xl font-bold mb-10">Features</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 shadow-md rounded-xl">
            <h4 className="text-xl font-semibold mb-4">AI-Powered Insights</h4>
            <p className="text-gray-600">
              Leverage machine learning for accurate investment predictions.
            </p>
          </div>
          <div className="p-6 shadow-md rounded-xl">
            <h4 className="text-xl font-semibold mb-4">Real-Time Analytics</h4>
            <p className="text-gray-600">
              Monitor live data and market trends at your fingertips.
            </p>
          </div>
          <div className="p-6 shadow-md rounded-xl">
            <h4 className="text-xl font-semibold mb-4">Secure Platform</h4>
            <p className="text-gray-600">
              Advanced security protocols ensure safe transactions.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://via.placeholder.com/500x350"
            alt="AI Investment"
            className="rounded-lg shadow-lg"
          />
          <div>
            <h3 className="text-3xl font-bold mb-6">Why Choose Aset?</h3>
            <ul className="space-y-4 text-gray-700">
              <li>✅ Smarter decision-making with AI assistance</li>
              <li>✅ Personalized investment strategies</li>
              <li>✅ Easy-to-use dashboard with real-time tracking</li>
              <li>✅ 24/7 customer support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-8 bg-white text-center">
        <h3 className="text-3xl font-bold mb-10">Pricing Plans</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-4">Basic</h4>
            <p className="text-4xl font-bold mb-6">$9<span className="text-lg">/mo</span></p>
            <ul className="mb-6 text-gray-600 space-y-2">
              <li>✔ AI Recommendations</li>
              <li>✔ Real-Time Data</li>
              <li>✘ Premium Support</li>
            </ul>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg">
              Choose Plan
            </button>
          </div>
          <div className="p-6 border rounded-lg shadow-lg bg-gray-50">
            <h4 className="text-xl font-semibold mb-4">Pro</h4>
            <p className="text-4xl font-bold mb-6">$29<span className="text-lg">/mo</span></p>
            <ul className="mb-6 text-gray-600 space-y-2">
              <li>✔ AI Recommendations</li>
              <li>✔ Real-Time Data</li>
              <li>✔ Premium Support</li>
            </ul>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg">
              Choose Plan
            </button>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-4">Enterprise</h4>
            <p className="text-4xl font-bold mb-6">Custom</p>
            <ul className="mb-6 text-gray-600 space-y-2">
              <li>✔ All Pro Features</li>
              <li>✔ Team Collaboration</li>
              <li>✔ Dedicated Manager</li>
            </ul>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-8 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold mb-10">What Our Users Say</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 shadow-md rounded-lg bg-white">
            <p className="text-gray-600 mb-4">
              "Aset completely changed how I invest. The AI insights are amazing!"
            </p>
            <h4 className="font-semibold">— Sarah K.</h4>
          </div>
          <div className="p-6 shadow-md rounded-lg bg-white">
            <p className="text-gray-600 mb-4">
              "I finally feel confident in my portfolio thanks to real-time tracking."
            </p>
            <h4 className="font-semibold">— James R.</h4>
          </div>
          <div className="p-6 shadow-md rounded-lg bg-white">
            <p className="text-gray-600 mb-4">
              "The best investment platform I’ve ever used. Highly recommend!"
            </p>
            <h4 className="font-semibold">— Priya S.</h4>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-8 bg-white">
        <h3 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h3>
        <div className="max-w-3xl mx-auto space-y-6">
          <div>
            <h4 className="font-semibold">How does Aset use AI for investments?</h4>
            <p className="text-gray-600">
              Our algorithms analyze real-time market data to provide actionable insights.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Is my data secure?</h4>
            <p className="text-gray-600">
              Yes, we use bank-level encryption to ensure your data is safe.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Can I cancel anytime?</h4>
            <p className="text-gray-600">
              Absolutely! You can cancel or switch plans at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 bg-blue-600 text-white text-center">
        <h3 className="text-3xl font-bold mb-6">Ready to transform your investments?</h3>
        <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg">
          Get Started Now
        </button>
      </section>

      {/* Footer */}
      <footer className="py-6 px-8 bg-gray-800 text-gray-300 text-center">
        <p>© {new Date().getFullYear()} Aset. All rights reserved.</p>
      </footer>
    </div>
  );
}