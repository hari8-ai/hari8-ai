```tsx
"use client"

import { motion } from "framer-motion"
import {
  Menu,
  Phone,
  Star,
  Camera,
  Flower2,
  Music,
  Sparkles,
  ChevronDown,
} from "lucide-react"

const services = [
  {
    title: "Wedding Planning",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    title: "Catering Services",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1600&auto=format&fit=crop",
    icon: <Flower2 className="w-6 h-6" />,
  },
  {
    title: "Welcome Girls",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop",
    icon: <Star className="w-6 h-6" />,
  },
  {
    title: "Luxury Stage Decoration",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop",
    icon: <Flower2 className="w-6 h-6" />,
  },
  {
    title: "DJ & Entertainment",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1600&auto=format&fit=crop",
    icon: <Music className="w-6 h-6" />,
  },
  {
    title: "Photography & Videography",
    image:
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1600&auto=format&fit=crop",
    icon: <Camera className="w-6 h-6" />,
  },
]

const gallery = [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop",
]

export default function LuxuryWeddingLandingPage() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* NAVBAR */}

      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-[4px] text-[#d4af37]">
            Ganganagar Events
          </h1>

          <nav className="hidden md:flex gap-10 text-sm uppercase tracking-widest">
            {["Home", "Services", "Weddings", "Gallery", "About", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="relative hover:text-[#d4af37] transition"
                >
                  {item}
                </a>
              )
            )}
          </nav>

          <button className="md:hidden">
            <Menu />
          </button>
        </div>
      </header>

      {/* HERO SECTION */}

      <section className="relative h-screen flex items-center justify-center">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-indian-wedding-1560213555046?download=1080p"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="relative z-10 text-center max-w-5xl px-6"
        >
          <div className="mb-6 inline-flex px-5 py-2 rounded-full border border-[#d4af37]/40 bg-white/10 backdrop-blur-md">
            <span className="text-sm tracking-widest uppercase text-[#f5d67b]">
              Luxury Telugu Wedding Experiences
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-8">
            Crafting Grand
            <span className="block text-[#d4af37]">
              Celebrations
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Luxury Weddings • Catering • Welcome Girls • Event Decor • Hospitality
          </p>

          <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
            <button className="px-10 py-4 bg-[#d4af37] text-black font-semibold rounded-full hover:scale-105 transition">
              Book Consultation
            </button>

            <button className="px-10 py-4 border border-white/30 rounded-full backdrop-blur-xl hover:bg-white/10 transition">
              Explore Services
            </button>
          </div>

          {/* Floating Stats */}

          <div className="mt-20 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              ["500+", "Luxury Weddings"],
              ["10+", "Years Experience"],
              ["1000+", "Happy Clients"],
            ].map((item, index) => (
              <motion.div
                whileHover={{ y: -10 }}
                key={index}
                className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-6"
              >
                <h3 className="text-3xl font-bold text-[#d4af37]">
                  {item[0]}
                </h3>
                <p className="text-gray-300 mt-2">
                  {item[1]}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 z-10"
        >
          <ChevronDown className="w-10 h-10 text-white/80" />
        </motion.div>
      </section>

      {/* SERVICES */}

      <section className="py-32 px-6 bg-gradient-to-b from-black to-[#120909]">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">
            <p className="uppercase tracking-[6px] text-[#d4af37] mb-4">
              Premium Services
            </p>

            <h2 className="text-5xl md:text-6xl font-bold">
              Crafted for Royal Weddings
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">

            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -15 }}
                className="group relative overflow-hidden rounded-[32px] border border-[#d4af37]/20 bg-white/5 backdrop-blur-xl"
              >

                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#d4af37] text-black flex items-center justify-center mb-6">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-semibold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    Premium luxury wedding experiences with cinematic elegance
                    and unforgettable celebrations.
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}

      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">
            <p className="uppercase tracking-[6px] text-[#d4af37] mb-4">
              Wedding Gallery
            </p>

            <h2 className="text-5xl md:text-6xl font-bold">
              Cinematic Wedding Moments
            </h2>
          </div>

          <div className="columns-1 md:columns-2 gap-6 space-y-6">

            {gallery.map((image, index) => (
              <motion.div
                whileHover={{ scale: 1.02 }}
                key={index}
                className="overflow-hidden rounded-[32px]"
              >
                <img
                  src={image}
                  alt=""
                  className="w-full object-cover hover:scale-105 transition duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section className="py-32 px-6 bg-gradient-to-b from-black to-[#140909]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          <motion.img
            whileHover={{ scale: 1.03 }}
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop"
            className="rounded-[40px] shadow-2xl"
          />

          <div>
            <p className="uppercase tracking-[6px] text-[#d4af37] mb-4">
              About Us
            </p>

            <h2 className="text-5xl font-bold leading-tight mb-8">
              We Design Celebrations That Feel Magical
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Ganganagar Events specializes in luxury Telugu weddings,
              premium hospitality, royal décor, cinematic experiences,
              and unforgettable celebrations crafted with elegance.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {["500+ Weddings", "10 Years", "1000+ Clients"].map((stat) => (
                <div
                  key={stat}
                  className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center"
                >
                  <h3 className="text-[#d4af37] font-bold text-xl">
                    {stat}
                  </h3>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}

      <section className="py-32 px-6 bg-black">
        <div className="max-w-6xl mx-auto text-center">

          <p className="uppercase tracking-[6px] text-[#d4af37] mb-4">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold mb-20">
            Loved by Couples
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[1, 2, 3].map((item) => (
              <motion.div
                whileHover={{ y: -10 }}
                key={item}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-10"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 fill-[#d4af37] text-[#d4af37]"
                    />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed">
                  “Absolutely breathtaking wedding arrangements.
                  Everything looked cinematic and luxurious.”
                </p>

                <h4 className="mt-8 text-[#d4af37] font-semibold">
                  Telugu Wedding Couple
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section className="py-32 px-6 bg-gradient-to-b from-black to-[#140909]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          <div>
            <p className="uppercase tracking-[6px] text-[#d4af37] mb-4">
              Contact
            </p>

            <h2 className="text-5xl font-bold mb-8">
              Plan Your Dream Wedding
            </h2>

            <p className="text-gray-400 mb-10">
              Let’s create unforgettable celebrations together.
            </p>

            <div className="space-y-6 text-lg">
              <div className="flex items-center gap-4">
                <Phone className="text-[#d4af37]" />
                <span>+91 99120 82564</span>
              </div>

              <div>
                Hyderabad • Telangana • India
              </div>
            </div>
          </div>

          <form className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10 space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none"
            />

            <textarea
              rows={5}
              placeholder="Tell us about your wedding..."
              className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none"
            />

            <button className="w-full py-4 bg-[#d4af37] text-black rounded-2xl font-semibold hover:scale-105 transition">
              Send Inquiry
            </button>
          </form>

        </div>
      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 py-10 px-6 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          <h2 className="text-2xl tracking-[4px] text-[#d4af37]">
            Ganganagar Events
          </h2>

          <p className="text-gray-500 text-sm">
            © 2026 Ganganagar Events. All Rights Reserved.
          </p>
        </div>
      </footer>

    </main>
  )
}
```
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const app = express();

// MIDDLEWARE

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// MONGODB CONNECTION

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// DATABASE SCHEMA

const contactSchema = new mongoose.Schema({

  name: String,

  email: String,

  message: String,

  createdAt: {
    type: Date,
    default: Date.now
  }

});

const Contact = mongoose.model("Contact", contactSchema);

// API ROUTE

app.post("/api/contact", async (req, res) => {

  try {

    const newContact = new Contact(req.body);

    await newContact.save();

    res.json({
      success: true,
      message: "Inquiry Sent Successfully!"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Server Error"
    });

  }

});

// START SERVER

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const WHATSAPP_NUMBER = '916305601404';