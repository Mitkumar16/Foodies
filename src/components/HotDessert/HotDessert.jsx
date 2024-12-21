
import Food1 from "../../assets/food/food.png";
import Food2 from "../../assets/food/food2-plate.png";
import Food3 from "../../assets/food/banner.png";
import { motion } from "framer-motion";
import { slideUp } from "../Hero/Hero";

const hotDessertData = [
  {
    id: 1,
    name: "Chocolate Lava Cake",
    description: "A delicious chocolate lava cake with rich chocolate flavor.",
    price: 12.99,
    image: Food1,
    delay: 0.4,
  },
  {
    id: 2,
    name: "Vanilla Lava Cake",
    description: "A delicious vanilla lava cake with rich vanilla flavor.",
    price: 12.99,
    image: Food2,
    delay: 0.6,
  },
  {
    id: 3,
    name: "Strawberry Lava Cake",
    description: "A delicious strawberry lava cake with rich strawberry flavor.",
    price: 12.99,
    image: Food3,
    delay: 0.8,
  },
];

const HotDessert = () => {
  return (
    <div className="py-12">
      <div className="container">
        <motion.h3
          variants={slideUp(0)}
          initial="hidden"
          whileInView="show"
          className="text-2xl font-semibold text-darkGreen uppercase py-8"
        >
          Hot Desserts
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {hotDessertData.map((item) => (
            <motion.div
              key={item.id}
              variants={slideUp(item.delay)}
              initial="hidden"
              whileInView="show"
              className="group bg-white/50 shadow-md p-3 flex items-center gap-3"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 rounded-full img-shadow group-hover:scale-125 transition-all duration-700 group-hover:rotate-[50deg]"
              />
              <div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-xl text-yellow-500">${item.price.toFixed(2)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotDessert;
