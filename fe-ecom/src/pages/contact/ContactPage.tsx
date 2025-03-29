import React from "react";
import Header from "../../shared/components/Header/Header";
import Footer from "../../shared/components/Footer/Footer";
import HeroSection from "../../shared/components/HeroSection/HeroSection";
import Features from "../../shared/components/Features/Features";

import { MapPin, Phone, Clock } from "lucide-react"; // sử dụng lucide-react cho icon đẹp hơn

const ContactPage: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <main className="mx-auto max-w-6xl px-4 py-16">
        <section className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Get In Touch With Us</h2>
          <p className="mx-auto max-w-xl text-gray-500">
            For more information about our products & services, please feel free
            to drop us an email. Our staff will always be there to help you out.
            Do not hesitate!
          </p>
        </section>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left - Contact Info */}
          <section className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 text-black" />
              <div>
                <h3 className="text-lg font-semibold">Address</h3>
                <p className="text-gray-600">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="mt-1 text-black" />
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-gray-600">Mobile: +(84) 546-6789</p>
                <p className="text-gray-600">Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="mt-1 text-black" />
              <div>
                <h3 className="text-lg font-semibold">Working Time</h3>
                <p className="text-gray-600">Monday–Friday: 9:00 - 22:00</p>
                <p className="text-gray-600">Saturday–Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </section>

          {/* Right - Contact Form */}
          <section>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div>
                <label htmlFor="yourName" className="sr-only">
                  Your Name
                </label>
                <input
                  type="text"
                  id="yourName"
                  placeholder="Abc"
                  className="w-full rounded-md border border-gray-300 p-3 focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Abc@def.com"
                  className="w-full rounded-md border border-gray-300 p-3 focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="subject" className="sr-only">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="This is an optional"
                  className="w-full rounded-md border border-gray-300 p-3 focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Hi! I’d like to ask about"
                  className="w-full rounded-md border border-gray-300 p-3 focus:ring-2 focus:ring-black focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-md border border-black px-4 py-2 text-black transition hover:bg-[#FBEBB5] hover:text-black"
              >
                Submit
              </button>
            </form>
          </section>
        </div>
      </main>
      <Features />
      <Footer />
    </>
  );
};

export default ContactPage;
