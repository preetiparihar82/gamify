
// // import React, { useState } from "react";
// // import { motion } from "framer-motion";
// // import { FaShoppingCart } from "react-icons/fa";
// // import Modal from "react-modal";
// // import Navbar from "../components/Navbar";


// // const products = [
// //   {
// //     id: 1,
// //     name: "Soul Reaper: Chronicles",
// //     type: "Paid",
// //     price: "$29.99",
// //     image: "/img/paid.jpg",
// //     description:
// //       "Explore the haunted worlds with stunning anime-style 3D environments.",
// //   },
// //   {
// //     id: 2,
// //     name: "Skyverse Arena",
// //     type: "Free",
// //     price: "Free",
// //     image: "/img/free.jpg",
// //     description:
// //       "Battle in the skies with characters inspired by shonen anime legends!",
// //   },
// //   {
// //     id: 3,
// //     name: "Magical Arena",
// //     type: "Paid",
// //     price: "$35.67",
// //     image: "/img/anime.gif",
// //     description: "Lost into the magical world where miracles happen in World.",
// //   },
// // ];

// // const ProductCard = ({ product, openModal }) => (
// //   <motion.div
// //     whileHover={{ scale: 1.05 }}
// //     className="bg-black/70 backdrop-blur text-white rounded-xl overflow-hidden shadow-xl border border-purple-700 hover:border-purple-400 transition-all"
// //     onClick={() => openModal(product)}
// //   >
// //     <img
// //       src={product.image}
// //       alt={product.name}
// //       className="w-full h-60 object-cover object-center"
// //     />
// //     <div className="p-6">
// //       <h3 className="text-2xl font-semibold text-purple-300 mb-2">
// //         {product.name}
// //       </h3>
// //       <p className="text-sm text-gray-300 mb-4">{product.description}</p>
// //       <div className="flex justify-between items-center">
// //         <span
// //           className={`text-md font-medium px-3 py-1 rounded-full ${
// //             product.type === "Paid" ? "bg-red-500" : "bg-green-500"
// //           }`}
// //         >
// //           {product.type}
// //         </span>
// //         <span className="text-purple-200 font-bold text-lg">
// //           {product.price}
// //         </span>
// //       </div>
// //       <button className="mt-4 w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 py-2 px-4 rounded-full font-semibold transition duration-300">
// //         <FaShoppingCart /> {product.type === "Paid" ? "Buy Now" : "Play Now"}
// //       </button>
// //     </div>
// //   </motion.div>
// // );

// // const ProductPage = () => {
// //   const [modalIsOpen, setModalIsOpen] = useState(false);
// //   const [selectedProduct, setSelectedProduct] = useState(null);

// //   const openModal = (product) => {
// //     setSelectedProduct(product);
// //     setModalIsOpen(true);
// //   };

// //   const closeModal = () => {
// //     setModalIsOpen(false);
// //     setSelectedProduct(null);
// //   };

// //   return (
// //     <div className="relative min-h-screen overflow-hidden text-white">
// //       {/* ✅ Navbar at the top */}
// //       <Navbar />

// //       {/* 🎥 Background Video */}
// //       <video
// //         autoPlay
// //         loop
// //         muted
// //         className="absolute inset-0 w-full h-full object-cover -z-10"
// //       >
// //         <source src="/videos/background.mp4" type="video/mp4" />
// //         Your browser does not support the video tag.
// //       </video>

// //       {/* 🛍 Product Grid */}
// //       <div className="py-20 px-6 relative z-10 bg-black/60 backdrop-blur-md min-h-screen">
// //         <h1 className="text-5xl text-center font-bold text-purple-200 mb-12">
// //           Anime Game Store
// //         </h1>
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
// //           {products.map((product) => (
// //             <ProductCard
// //               key={product.id}
// //               product={product}
// //               openModal={openModal}
// //             />
// //           ))}
// //         </div>
// //       </div>
      

// //       {/* 🔍 Product Modal */}
// //       <Modal
// //         isOpen={modalIsOpen}
// //         onRequestClose={closeModal}
// //         className="bg-black text-white rounded-xl p-6 max-w-md mx-auto mt-20 shadow-xl relative z-20"
// //         overlayClassName="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-20"
// //       >
// //         {selectedProduct && (
// //           <>
// //             <h2 className="text-3xl font-bold mb-4">
// //               {selectedProduct.name}
// //             </h2>
// //             <img
// //               src={selectedProduct.image}
// //               alt={selectedProduct.name}
// //               className="w-full rounded mb-4"
// //             />
// //             <p className="text-gray-300">{selectedProduct.description}</p>
// //             <div className="mt-4 flex justify-between items-center">
// //               <span className="px-3 py-1 rounded-full bg-purple-600">
// //                 {selectedProduct.price}
// //               </span>
// //               <button
// //                 onClick={closeModal}
// //                 className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full"
// //               >
// //                 Close
// //               </button>
// //             </div>
// //           </>
// //         )}
// //       </Modal>
// //     </div>
// //   );
// // };

// // export default ProductPage;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaShoppingCart } from "react-icons/fa";
// import Modal from "react-modal";
// import Navbar from "../components/Navbar";
// import { Link } from "react-router-dom";
// import About from "../components/About";
// import Contact from "../components/Contact";

// const products = [
//   {
//     id: 1,
//     name: "Soul Reaper: Chronicles",
//     type: "Paid",
//     price: "$29.99",
//     image: "/img/paid.jpg",
//     description:
//       "Explore the haunted worlds with stunning anime-style 3D environments.",
//   },
//   {
//     id: 2,
//     name: "Skyverse Arena",
//     type: "Free",
//     price: "Free",
//     image: "/img/free.jpg",
//     description:
//       "Battle in the skies with characters inspired by shonen anime legends!",
//   },
//   {
//     id: 3,
//     name: "Magical Arena",
//     type: "Paid",
//     price: "$35.67",
//     image: "/img/anime.gif",
//     description: "Lost into the magical world where miracles happen in World.",
//   },
// ];

// const ProductCard = ({ product, openModal }) => (
//   <motion.div
//     whileHover={{ scale: 1.05 }}
//     className="bg-black/70 backdrop-blur text-white rounded-xl overflow-hidden shadow-xl border border-purple-700 hover:border-purple-400 transition-all"
//     onClick={() => openModal(product)}
//   >
//     <img
//       src={product.image}
//       alt={product.name}
//       className="w-full h-60 object-cover object-center"
//     />
//     <div className="p-6">
//       <h3 className="text-2xl font-semibold text-purple-300 mb-2">
//         {product.name}
//       </h3>
//       <p className="text-sm text-gray-300 mb-4">{product.description}</p>
//       <div className="flex justify-between items-center">
//         <span
//           className={`text-md font-medium px-3 py-1 rounded-full ${
//             product.type === "Paid" ? "bg-red-500" : "bg-green-500"
//           }`}
//         >
//           {product.type}
//         </span>
//         <span className="text-purple-200 font-bold text-lg">
//           {product.price}
//         </span>
//       </div>
//       <button className="mt-4 w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 py-2 px-4 rounded-full font-semibold transition duration-300">
//         <FaShoppingCart /> {product.type === "Paid" ? "Buy Now" : "Play Now"}
//       </button>
//     </div>
//   </motion.div>
// );

// const ProductPage = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const openModal = (product) => {
//     setSelectedProduct(product);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setSelectedProduct(null);
//   };

//   return (
//     <div className="relative min-h-screen overflow-hidden text-white">
//       <Navbar />

//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         className="absolute inset-0 w-full h-full object-cover -z-10"
//       >
//         <source src="/videos/background.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Product Grid */}
//       <div className="py-20 px-6 relative z-10 bg-black/60 backdrop-blur-md min-h-screen">
//         <h1 className="text-5xl text-center font-bold text-purple-200 mb-12">
//           Anime Game Store
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           {products.map((product) => (
//             <ProductCard
//               key={product.id}
//               product={product}
//               openModal={openModal}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Modal */}
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         className="bg-black text-white rounded-xl p-6 max-w-md mx-auto mt-20 shadow-xl relative z-20"
//         overlayClassName="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-20"
//       >
//         {selectedProduct && (
//           <>
//             <h2 className="text-3xl font-bold mb-4">
//               {selectedProduct.name}
//             </h2>
//             <img
//               src={selectedProduct.image}
//               alt={selectedProduct.name}
//               className="w-full rounded mb-4"
//             />
//             <p className="text-gray-300">{selectedProduct.description}</p>
//             <div className="mt-4 flex justify-between items-center">
//               <span className="px-3 py-1 rounded-full bg-purple-600">
//                 {selectedProduct.price}
//               </span>
//               <button
//                 onClick={closeModal}
//                 className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full"
//               >
//                 Close
//               </button>
//             </div>
//           </>
//         )}
//       </Modal>

//       {/* Sections for smooth scroll or anchor links */}
//       <section id="about" className="bg-black text-white">
//         <About />
//       </section>

//       <section id="contact" className="bg-black text-white">
//         <Contact />
//       </section>
//     </div>
//   );
// };

// export default ProductPage;



import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import Modal from "react-modal";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";

const products = [
  {
    id: 1,
    name: "Soul Reaper: Chronicles",
    type: "Paid",
    price: "$29.99",
    image: "/img/paid.jpg",
    description:
      "Explore the haunted worlds with stunning anime-style 3D environments.",
  },
  {
    id: 2,
    name: "Skyverse Arena",
    type: "Free",
    price: "Free",
    image: "/img/free.jpg",
    description:
      "Battle in the skies with characters inspired by shonen anime legends!",
  },
  {
    id: 3,
    name: "Magical Arena",
    type: "Paid",
    price: "$35.67",
    image: "/img/anime.gif",
    description: "Lost into the magical world where miracles happen in World.",
  },
];

const ProductCard = ({ product, openModal }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-black/70 backdrop-blur text-white rounded-xl overflow-hidden shadow-xl border border-purple-700 hover:border-purple-400 transition-all"
    onClick={() => openModal(product)}
  >
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-60 object-cover object-center"
    />
    <div className="p-6">
      <h3 className="text-2xl font-semibold text-purple-300 mb-2">
        {product.name}
      </h3>
      <p className="text-sm text-gray-300 mb-4">{product.description}</p>
      <div className="flex justify-between items-center">
        <span
          className={`text-md font-medium px-3 py-1 rounded-full ${
            product.type === "Paid" ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {product.type}
        </span>
        <span className="text-purple-200 font-bold text-lg">
          {product.price}
        </span>
      </div>
      <button className="mt-4 w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 py-2 px-4 rounded-full font-semibold transition duration-300">
        <FaShoppingCart /> {product.type === "Paid" ? "Buy Now" : "Play Now"}
      </button>
    </div>
  </motion.div>
);

const ProductPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProduct(null);
  };

  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <Navbar />

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Product Grid */}
      <div className="py-20 px-6 relative z-10 bg-black/60 backdrop-blur-md min-h-screen">
        <h1 className="text-5xl text-center font-bold text-purple-200 mb-12">
          Anime Game Store
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              openModal={openModal}
            />
          ))}
        </div>

        {/* Smooth scroll links */}
        <div className="text-center mt-20 space-x-6">
          <button
            onClick={handleNavigateHome}
            className="text-white text-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-red-500 hover:to-purple-500 font-bold py-3 px-7 rounded-full shadow-lg transition duration-400"
          >
            Home
          </button>
          
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="bg-black text-white rounded-xl p-6 max-w-md mx-auto mt-20 shadow-xl relative z-20"
        overlayClassName="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-20"
      >
        {selectedProduct && (
          <>
            <h2 className="text-3xl font-bold mb-4">
              {selectedProduct.name}
            </h2>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full rounded mb-4"
            />
            <p className="text-gray-300">{selectedProduct.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="px-3 py-1 rounded-full bg-purple-600">
                {selectedProduct.price}
              </span>
              <button
                onClick={closeModal}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full"
              >
                Close
              </button>
            </div>
          </>
        )}
      </Modal>
{/* Sections for smooth scroll or anchor links */}
      <section id="about" className="bg-black text-white">
        <About />
      </section>

      <section id="contact" className="bg-black text-white">
        <Contact />
      </section>
    </div>
     
  );
};

export default ProductPage;

