import React from "react";

const Promo = () => {
  const promos = [
    {
      title: "Buy 1 Get 1 Free Pizza",
      description: "Order a pizza and get another one absolutely free! Offer valid for dine-in and takeaway.",
      image: "/images/promo-pizza.jpg",
      validTill: "Valid till: January 31, 2025",
    },
    {
      title: "20% Off on Burgers",
      description: "Enjoy a 20% discount on all our delicious burgers. Don’t miss out!",
      image: "/images/promo-burger.jpg",
      validTill: "Valid till: February 15, 2025",
    },
    {
      title: "Family Combo for $50",
      description: "Treat your family to a meal with our special combo offer, including pizza, burgers, and drinks.",
      image: "/images/promo-combo.jpg",
      validTill: "Valid till: March 10, 2025",
    },
  ];

  return (
    <div className="bg-gray-50 p-10 min-h-screen">
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-cursive font-bold mb-8">Our Promotions</h2>
          <p className="text-gray-600 mb-8">
            Check out our latest deals and enjoy great savings while indulging in your favorite dishes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {promos.map((promo, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
              >
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{promo.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{promo.description}</p>
                  <p className="text-sm text-yellow-600 font-bold">{promo.validTill}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Promo;
