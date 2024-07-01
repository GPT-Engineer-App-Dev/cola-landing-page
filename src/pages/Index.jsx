import { Button } from "@/components/ui/button";

function Index() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/coca-cola-hero.jpg')" }}>
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">Refresh Your World</h1>
          <p className="mt-4 text-xl">Experience the taste of Coca Cola</p>
          <Button variant="primary" size="lg" className="mt-8">Explore Products</Button>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Product */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/images/coca-cola-product-1.jpg" alt="Coca Cola Classic" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="mt-4 text-xl font-semibold">Coca Cola Classic</h3>
            <p className="mt-2 text-gray-600">The original taste you love.</p>
          </div>
          {/* Add more products as needed */}
        </div>
      </section>

      {/* About Us Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="flex flex-col md:flex-row items-center">
          <img src="/images/coca-cola-history.jpg" alt="Coca Cola History" className="w-full md:w-1/2 h-64 object-cover rounded-lg" />
          <div className="mt-8 md:mt-0 md:ml-8">
            <p className="text-gray-600">Coca Cola has been refreshing the world since 1886. Our journey started with a simple idea and has grown into a global brand loved by millions.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input type="text" id="name" className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" id="email" className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea id="message" className="w-full mt-2 p-2 border border-gray-300 rounded-lg"></textarea>
          </div>
          <Button type="submit" variant="primary" size="lg" className="w-full">Submit</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="hover:text-gray-400">Facebook</a>
            <a href="#" className="hover:text-gray-400">Twitter</a>
            <a href="#" className="hover:text-gray-400">Instagram</a>
          </div>
          <p>&copy; 2023 Coca Cola. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Index;