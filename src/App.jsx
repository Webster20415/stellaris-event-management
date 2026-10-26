import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Input,
  Accordion,
  AccordionItem,
} from "@heroui/react";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [clientEmail, setClientEmail] = useState("");

  const categories = [
    "All",
    "Theatre & Arts",
    "Technology",
    "Live Music",
    "Exposition",
  ];

  const events = [
    {
      id: 1,
      title: "All-Goa Inter-College Tiatr Festival 2026",
      category: "Theatre & Arts",
      date: "Nov 04, 2026",
      time: "06:00 PM IST",
      venue: "Ravindra Bhavan, Margao, Goa",
      price: "₹350",
      rating: "4.95",
      tag: "Cultural Gala",
      image:
        "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=800&auto=format&fit=crop", // Live stage drama & theatrical performance
      desc: "Featuring live opening choral ensembles, Konkani drama acts, and annual state awards ceremony.",
    },
    {
      id: 2,
      title: "South Goa Tech & Startup Conclave",
      category: "Technology",
      date: "Nov 18, 2026",
      time: "10:00 AM IST",
      venue: "Margao Municipal Convention Center",
      price: "₹750",
      rating: "4.92",
      tag: "Innovation Summit",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
      desc: "Keynote speeches on modern full-stack web architectures, AI automation, and local tech venture funding.",
    },
    {
      id: 3,
      title: "Coastal Acoustic & Strings Symphony",
      category: "Live Music",
      date: "Dec 05, 2026",
      time: "07:30 PM IST",
      venue: "Benaulim Heritage Amphitheatre",
      price: "₹500",
      rating: "4.98",
      tag: "Live Concert",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
      desc: "An evening featuring lead violin concertos, classical guitar ensembles, and open-air choral vocals.",
    },
    {
      id: 4,
      title: "Goan Culinary & Artisanal Heritage Expo",
      category: "Exposition",
      date: "Dec 12, 2026",
      time: "11:00 AM IST",
      venue: "Colva Beach Pavilion, South Goa",
      price: "₹250",
      rating: "4.89",
      tag: "Food & Craft",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop",
      desc: "Showcasing authentic Konkan cuisine, live brass performances, and hand-crafted local products.",
    },
  ];

  const filteredEvents = events.filter((ev) => {
    const matchesCategory =
      activeCategory === "All" || ev.category === activeCategory;
    const matchesSearch =
      ev.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    if (clientEmail) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-violet-500 selection:text-white antialiased">
      {/* Immersive Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-violet-600/15 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px]"></div>
        <div className="absolute -bottom-20 left-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px]"></div>
      </div>

      {/* 1. Header Navigation */}
      <Navbar
        isBordered
        className="bg-slate-900/70 backdrop-blur-xl border-slate-800/80 sticky top-0 z-50 shadow-lg"
      >
        <NavbarBrand className="gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-amber-400 flex items-center justify-center font-black text-white shadow-lg shadow-violet-500/30">
            E
          </div>
          <div>
            <p className="font-extrabold text-white tracking-wider text-base">
              STELLARIS <span className="text-violet-400 font-light">EVENTS</span>
            </p>
            <p className="text-[10px] text-slate-400 tracking-widest uppercase font-semibold">
              Margao Production Hub
            </p>
          </div>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-8" justify="center">
          <NavbarItem>
            <a
              href="#productions"
              className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-violet-400 transition-colors"
            >
              Productions
            </a>
          </NavbarItem>
          <NavbarItem>
            <a
              href="#features"
              className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-violet-400 transition-colors"
            >
              Why Choose Us
            </a>
          </NavbarItem>
          <NavbarItem>
            <a
              href="#hq"
              className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-violet-400 transition-colors"
            >
              Margao Desk
            </a>
          </NavbarItem>
          <NavbarItem>
            <a
              href="#faq"
              className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-violet-400 transition-colors"
            >
              FAQ
            </a>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              as="a"
              href="#hq"
              className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold shadow-lg shadow-violet-600/25 hover:shadow-violet-600/40 border-none text-xs px-5 rounded-xl transition-all"
            >
              Book Venue
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* 2. Hero Section */}
      <header className="relative z-10 pt-24 pb-16 px-6 max-w-5xl mx-auto text-center">
        <Chip
          variant="flat"
          className="mb-6 bg-violet-950/80 text-violet-300 border border-violet-800/60 font-semibold px-4 py-1.5 shadow-sm text-xs rounded-full"
        >
          ✨ Authorized Event Concierge • Margao, Goa
        </Chip>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-[1.15]">
          Unforgettable live events, <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-amber-400 bg-clip-text text-transparent">
            crafted with precision.
          </span>
        </h1>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          From cultural galas at Ravindra Bhavan to regional tech summits, our
          Margao operations team delivers world-class production management.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto bg-slate-900/90 p-2.5 rounded-2xl border border-slate-800 shadow-2xl shadow-violet-500/10 backdrop-blur-xl flex flex-col sm:flex-row gap-2">
          <div className="flex items-center gap-3 flex-grow px-3">
            <svg
              className="w-5 h-5 text-violet-400 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <Input
              placeholder="Search event title, choir gala, or Goan venue..."
              value={searchQuery}
              onValueChange={setSearchQuery}
              variant="flat"
              classNames={{
                inputWrapper:
                  "bg-transparent border-none text-white shadow-none focus:outline-none",
                input: "text-white placeholder:text-slate-500",
              }}
            />
          </div>
          <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:opacity-90 text-white font-bold px-7 rounded-xl shadow-md transition-all">
            Search Events
          </Button>
        </div>
      </header>

      {/* 3. Filter Categories & Events Grid */}
      <section id="productions" className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <Chip
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`cursor-pointer transition-all duration-300 px-4 py-2 text-xs font-semibold rounded-xl ${
                activeCategory === cat
                  ? "bg-violet-600 text-white font-bold shadow-lg shadow-violet-600/30 scale-105 border-transparent"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 shadow-sm"
              }`}
            >
              {cat}
            </Chip>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredEvents.map((ev) => (
            <Card
              key={ev.id}
              className="bg-slate-900/60 border border-slate-800/80 shadow-xl hover:shadow-2xl hover:border-violet-500/50 hover:-translate-y-1 transition-all duration-300 group rounded-3xl overflow-hidden backdrop-blur-md"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={ev.image}
                  alt={ev.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <Chip
                    size="sm"
                    className="bg-slate-950/80 text-violet-300 font-bold backdrop-blur-md border border-slate-700/80 shadow-sm"
                  >
                    {ev.tag}
                  </Chip>
                </div>
                <div className="absolute top-4 right-4 bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-full text-xs text-amber-400 font-bold shadow-md border border-slate-800">
                  ★ {ev.rating}
                </div>
              </div>

              <CardBody className="p-7">
                <span className="text-[11px] font-bold text-violet-400 uppercase tracking-widest block mb-1">
                  {ev.category}
                </span>
                <h3 className="text-xl font-extrabold text-white group-hover:text-violet-300 transition-colors mb-3 leading-snug">
                  {ev.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {ev.desc}
                </p>

                <div className="space-y-2.5 text-xs text-slate-300 bg-slate-950/70 p-4 rounded-2xl border border-slate-800/80">
                  <div className="flex items-center gap-2.5">
                    <svg
                      className="w-4 h-4 text-violet-400 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>
                      <strong className="text-white">Venue:</strong> {ev.venue}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <svg
                      className="w-4 h-4 text-violet-400 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>
                      <strong className="text-white">Schedule:</strong> {ev.date} • {ev.time}
                    </span>
                  </div>
                </div>
              </CardBody>

              <CardFooter className="px-7 pb-7 pt-0 flex justify-between items-center">
                <div>
                  <span className="text-[11px] text-slate-500 block font-medium uppercase tracking-wider">
                    Ticket Entry Pass
                  </span>
                  <span className="text-2xl font-black text-violet-400">
                    {ev.price}
                  </span>
                </div>
                <Button
                  size="sm"
                  className="bg-slate-800 hover:bg-violet-600 hover:text-white text-slate-200 font-bold px-5 py-2 rounded-xl transition-all shadow-md"
                >
                  Reserve Pass
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-20 text-slate-500 bg-slate-900/60 rounded-3xl border border-slate-800 shadow-sm">
            No events found matching "{searchQuery}". Try searching for Ravindra
            Bhavan or select "All".
          </div>
        )}
      </section>

      {/* 4. Features Section */}
      <section id="features" className="relative z-10 max-w-6xl mx-auto px-6 py-20 border-t border-slate-900">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Chip
            size="sm"
            className="mb-3 bg-violet-950 text-violet-300 font-bold border border-violet-800"
          >
            Built for Excellence
          </Chip>
          <h2 className="text-3xl font-black text-white mb-3">
            Why Host With Stellaris Events
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Full-service stage direction, ticketing logistics, and sound
            engineering powered from South Goa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800 shadow-lg hover:border-violet-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-violet-600/10 text-violet-400 flex items-center justify-center font-black mb-5 text-xl border border-violet-500/20">
              01
            </div>
            <h4 className="font-extrabold text-white text-lg mb-2">
              Margao Operations Hub
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              On-ground event coordinators based in Margao to manage local
              permissions, stage setup, and catering.
            </p>
          </div>
          <div className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800 shadow-lg hover:border-violet-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 text-indigo-400 flex items-center justify-center font-black mb-5 text-xl border border-indigo-500/20">
              02
            </div>
            <h4 className="font-extrabold text-white text-lg mb-2">
              Acoustics & Stage Lighting
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Professional audio-visual management tailored for theatrical galas,
              choral choir groups, and corporate summits.
            </p>
          </div>
          <div className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800 shadow-lg hover:border-violet-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-black mb-5 text-xl border border-amber-500/20">
              03
            </div>
            <h4 className="font-extrabold text-white text-lg mb-2">
              Instant Ticketing & Access
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Automated digital pass generation and QR entry validation for
              seamless guest check-ins.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Headquarters & Interactive Map Section */}
      <section id="hq" className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="bg-slate-900/90 p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl backdrop-blur-xl">
          <div className="grid lg:grid-cols-12 gap-10 items-stretch">
            {/* Left Column: Contact Info & Clean Proposal Form */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <Chip
                  size="sm"
                  className="bg-violet-950 text-violet-300 mb-4 border border-violet-800 font-bold"
                >
                  Margao Event Command
                </Chip>
                <h3 className="text-3xl font-black text-white mb-3">
                  Plan Your Production
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  Visit our South Goa office or reach our booking team directly
                  for auditorium reservations and customized stage production
                  packages.
                </p>

                <div className="space-y-5 text-sm text-slate-300 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-violet-600/10 text-violet-400 flex items-center justify-center shrink-0 border border-violet-500/20">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500 block uppercase font-bold tracking-wider">
                        HQ Address
                      </span>
                      <span className="font-semibold text-slate-200">
                        4th Floor, City Centre, Municipal Garden Square,
                        Margao, Goa 403601
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-indigo-600/10 text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-500/20">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500 block uppercase font-bold tracking-wider">
                        Direct Desk Hotline
                      </span>
                      <span className="text-violet-400 font-mono font-bold text-base">
                        +91 (0832) 271-9988
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-violet-600/10 text-violet-400 flex items-center justify-center shrink-0 border border-violet-500/20">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500 block uppercase font-bold tracking-wider">
                        Production Email
                      </span>
                      <span className="font-semibold text-slate-200">
                        events@stellarisevents.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Polished Proposal Form with Aligned Button */}
              <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800">
                <h4 className="font-extrabold text-white text-sm mb-1">
                  Request Venue Proposal
                </h4>
                <p className="text-xs text-slate-400 mb-4">
                  We will send available dates to your email instantly.
                </p>

                {formSubmitted ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/30 p-3.5 rounded-xl text-center text-emerald-300 text-xs font-bold">
                    ✓ Proposal request sent! Our Margao team will contact{" "}
                    <strong>{clientEmail}</strong>.
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Enter work email..."
                      value={clientEmail}
                      onValueChange={setClientEmail}
                      isRequired
                      size="sm"
                      classNames={{
                        inputWrapper:
                          "bg-slate-900 border-slate-800 text-white shadow-inner h-11",
                        input: "text-white placeholder:text-slate-500 text-sm",
                      }}
                    />
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:opacity-90 text-white font-bold h-11 rounded-xl shadow-md transition-all text-sm"
                    >
                      Submit Proposal Request
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Embedded Google Map */}
            <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-800 relative min-h-[400px] bg-slate-950 flex flex-col shadow-inner">
              <div className="bg-slate-900 px-5 py-3.5 text-white flex justify-between items-center text-xs font-medium border-b border-slate-800">
                <span className="font-semibold flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>{" "}
                  Margao Office Live GPS
                </span>
                <span className="text-slate-400">
                  15.2736° N, 73.9581° E
                </span>
              </div>
              <iframe
                title="Stellaris Events Margao Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3848.42398273641!2d73.95551937512845!3d15.273600984166205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb3e1f2b60001%3A0x8e8eb43e4cfcf30!2sMargao%2C%20Goa!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full flex-grow border-0 grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Frequently Asked Questions Section */}
      <section id="faq" className="relative z-10 max-w-3xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-white mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm">
            Everything you need to know about reserving Goan venues and managing
            ticket passes.
          </p>
        </div>

        <Accordion variant="splitted" className="gap-3">
          <AccordionItem
            key="1"
            aria-label="Venue reservation"
            title="How do I reserve Ravindra Bhavan or Municipal Auditoriums in Margao?"
            className="bg-slate-900/80 border border-slate-800 text-slate-200 shadow-sm rounded-2xl"
            classNames={{
              title: "text-white font-bold text-base",
              content: "text-slate-400 text-sm leading-relaxed pb-4",
            }}
          >
            Reservations can be requested online or directly at our Margao
            headquarters. Our team handles local hall bookings, municipal
            permits, and stage setup schedules.
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Sound setup"
            title="Are sound systems and choir microphones provided for theatrical events?"
            className="bg-slate-900/80 border border-slate-800 text-slate-200 shadow-sm rounded-2xl"
            classNames={{
              title: "text-white font-bold text-base",
              content: "text-slate-400 text-sm leading-relaxed pb-4",
            }}
          >
            Yes! We provide complete multi-channel acoustic sound reinforcement,
            stage lighting rigs, and dedicated sound engineers for choir and drama
            productions.
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Ticket passes"
            title="How are digital event passes delivered to attendees?"
            className="bg-slate-900/80 border border-slate-800 text-slate-200 shadow-sm rounded-2xl"
            classNames={{
              title: "text-white font-bold text-base",
              content: "text-slate-400 text-sm leading-relaxed pb-4",
            }}
          >
            Upon reservation, digital passes with unique QR codes are emailed
            instantly and can be scanned at the venue entrance via our mobile
            validation desk.
          </AccordionItem>
        </Accordion>
      </section>

      {/* 7. Footer */}
      <footer className="relative z-10 border-t border-slate-900 bg-slate-950 py-10 px-6 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            © 2026 Stellaris Events Inc. Global Operations Hub: Margao, Goa,
            India.
          </p>
          <div className="flex gap-6 text-slate-400 font-semibold">
            <a href="#hq" className="hover:text-violet-400 transition-colors">
              Margao Command Desk
            </a>
            <a href="#" className="hover:text-violet-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-violet-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}