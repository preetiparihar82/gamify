// // src/components/Contact.jsx
// import React, { useState } from "react";
// import AnimatedTitle from "./AnimatedTitle";
// import Button from "./Button";
// import axios from "axios";

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const data = { name, email, message };

//   try {
//     await axios.post("http://localhost:5000/api/contact", data);
//     alert("Message sent!");
//   } catch (err) {
//     alert("Error sending message");
//   }
// };

// const ImageClipBox = ({ src, clipClass }) => (
//   <div className={clipClass}>
//     <img src={src} className="rounded-lg shadow-lg" />
//   </div>
// );

// const Contact = () => {
//   const [showForm, setShowForm] = useState(false);

//   const handleButtonClick = () => {
//     setShowForm(true);
//     setTimeout(() => {
//       const formElement = document.getElementById("contact-form-section");
//       formElement?.scrollIntoView({ behavior: "smooth" });
//     }, 100);
//   };

//   return (
//     <div id="contact" className="my-20 min-h-screen w-full bg-gradient-to-b from-black to-gray-900 px-4">
//       <div className="relative mx-auto max-w-6xl rounded-2xl bg-gradient-to-br from-purple-900 via-black to-indigo-900 px-6 py-32 text-blue-50 shadow-2xl overflow-hidden">
//         <div className="absolute -left-16 top-0 hidden h-full w-72 sm:block lg:left-20 lg:w-96">
//           <ImageClipBox src="/img/contact-1.webp" clipClass="contact-clip-path-1" />
//           <ImageClipBox src="/img/contact-2.webp" clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60" />
//         </div>

//         <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
//           <ImageClipBox src="/img/swordman-partial.webp" clipClass="absolute md:scale-125" />
//           <ImageClipBox src="/img/swordman.webp" clipClass="sword-man-clip-path md:scale-125" />
//         </div>

//         <div className="relative z-10 flex flex-col items-center text-center">
//           <p className="mb-6 text-sm tracking-widest text-purple-300 font-semibold uppercase">
//             Join the Adventure
//           </p>

//           <AnimatedTitle
//             title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
//             className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
//           />

//           <div onClick={handleButtonClick}>
//             <Button title="Get in Touch" containerClass="mt-12 cursor-pointer bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105" />
//           </div>
//         </div>
//       </div>

//       {showForm && (
//         <div
//           id="contact-form-section"
//           className="mt-24 max-w-3xl mx-auto p-8 bg-white/10 backdrop-blur-md rounded-xl shadow-lg text-white"
//         >
//           <h2 className="text-4xl font-bold uppercase mb-8 text-center text-purple-200 tracking-wide">
//             Share Your Thoughts
//           </h2>

//           <form className="grid grid-cols-1 gap-6" onSubmit={(e) => e.preventDefault()}>
//             <div>
//               <label htmlFor="name" className="block mb-2 font-semibold text-purple-100">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 required
//                 className="w-full bg-black/20 text-white placeholder-gray-400 border border-purple-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
//                 placeholder="Your name"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block mb-2 font-semibold text-purple-100">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 required
//                 className="w-full bg-black/20 text-white placeholder-gray-400 border border-purple-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
//                 placeholder="you@example.com"
//               />
//             </div>

//             <div>
//               <label htmlFor="message" className="block mb-2 font-semibold text-purple-100">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows="5"
//                 required
//                 className="w-full bg-black/20 text-white placeholder-gray-400 border border-purple-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
//                 placeholder="Your message..."
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Contact;


import React, { useState } from "react";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import axios from "axios";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} className="rounded-lg shadow-lg" />
  </div>
);

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleButtonClick = () => {
    setShowForm(true);
    setTimeout(() => {
      const formElement = document.getElementById("contact-form-section");
      formElement?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { name, email, message };

    try {
      await axios.post("http://localhost:5000/api/contact", data);
      alert("Message sent!");
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      alert("Error sending message");
      console.error(err);
    }
  };

  return (
    <div id="contact" className="my-20 min-h-screen w-full bg-gradient-to-b from-black to-gray-900 px-4">
      <div className="relative mx-auto max-w-6xl rounded-2xl bg-gradient-to-br from-purple-900 via-black to-indigo-900 px-6 py-32 text-blue-50 shadow-2xl overflow-hidden">
        <div className="absolute -left-16 top-0 hidden h-full w-72 sm:block lg:left-20 lg:w-96">
          <ImageClipBox src="/img/contact-1.webp" clipClass="contact-clip-path-1" />
          <ImageClipBox src="/img/contact-2.webp" clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60" />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox src="/img/swordman-partial.webp" clipClass="absolute md:scale-125" />
          <ImageClipBox src="/img/swordman.webp" clipClass="sword-man-clip-path md:scale-125" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <p className="mb-6 text-sm tracking-widest text-purple-300 font-semibold uppercase">
            Join the Adventure
          </p>

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <div onClick={handleButtonClick}>
            <Button title="Get in Touch" containerClass="mt-12 cursor-pointer  bg-purple-800 text-white px-8 py-3 rounded-full transition-transform hover:scale-105" />
          </div>
        </div>
      </div>

      {showForm && (
        <div
          id="contact-form-section"
          className="mt-24 max-w-3xl mx-auto p-8 bg-white/10 backdrop-blur-md rounded-xl shadow-lg text-white"
        >
          <h2 className="text-4xl font-bold uppercase mb-8 text-center text-purple-200 tracking-wide">
            Share Your Thoughts
          </h2>

          <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold text-purple-100">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-black/20 text-white placeholder-gray-400 border border-purple-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-semibold text-purple-100">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-black/20 text-white placeholder-gray-400 border border-purple-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-semibold text-purple-100">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full bg-black/20 text-white placeholder-gray-400 border border-purple-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Contact;
