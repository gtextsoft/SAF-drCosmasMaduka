// src/components/Store.tsx
import Navbar from './Navbar'; // Adjust path based on your structure

const books = [
  {
    title: 'Scaling Your Business With Integrity',
    image: '/Scaling.jpg', // Replace with actual image path
    amazonLink: 'https://a.co/d/0xlzrtZ',
  },
  {
    title: 'From Trials to Triumphs: Coscharis Story',
    image: '/From.jpg', // Replace with actual image path
    amazonLink: 'https://www.amazon.com/Trials-Triumphs-Coscharis-Story/dp/1607919249',
  },
];

const Store = () => {
  return (
    <div className="min-h-screen bg-[#FF0000]/10">
      <Navbar />
      <section className="py-20 pt-24"> {/* pt-24 to offset fixed navbar */}
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Book Store
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {books.map((book, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-2 border-[#FFCCCC]"
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-64 object-contain mb-4 rounded"
                />
                <h3 className="font-playfair text-xl font-semibold mb-2 text-[#000080]">
                  {book.title}
                </h3>
                <a
                  href={book.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#FF0000] text-white px-4 py-2 rounded hover:bg-[#000080] transition-colors"
                >
                  Buy Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Store;
