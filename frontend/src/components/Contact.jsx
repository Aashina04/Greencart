const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-3xl font-semibold mb-4 text-gray-800">Contact Us</h1>
      <p className="text-gray-600 max-w-xl text-center mb-8">
        We'd love to hear from you! Fill out the form below and we’ll reply soon.
      </p>

      <form
        action="https://formsubmit.co/aashina2004@gmail.com"
        method="POST"
        className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg"
      >
        {/* 🧠 Hidden inputs to configure behavior */}
        <input type="hidden" name="_subject" value="New Contact Message!" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />

        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            placeholder="Your name"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            placeholder="Your email"
            required
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Message</label>
          <textarea
            name="message"
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2  focus:ring-emerald-400"
            placeholder="Write your message..."
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-emerald-500 primary-500 hover:bg-emerald-600 text-white py-2 rounded-lg transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
