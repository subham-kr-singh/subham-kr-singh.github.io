export const profile = {
  name: "Subham Kumar Singh",
  role: "Backend-Heavy Full Stack Engineer",
  stack: "MERN · NestJS · PostgreSQL · Redis · WebRTC · gRPC",
  location: "Bhopal, MP, India",
  phone: "+91 7322938201",
  email: "subhamkumarsingh077@gmail.com",
  linkedin: "https://www.linkedin.com/in/subhamkumar-singh-303a831b9",
  summary:
    "Backend-focused full-stack engineer pursuing B.Tech (CSE, 2028) at Oriental Group of Institutes, Bhopal. Builds production-grade distributed systems with MERN, NestJS, PostgreSQL, Redis, gRPC, GraphQL, WebSocket, and WebRTC — comfortable across containerisation, CI/CD, and system design fundamentals like caching, message queues, and microservices. Seeking backend / full-stack internships at high-growth product companies.",
};

// Status-board metrics — framed like an ops dashboard, not marketing KPIs
export const statusMetrics = [
  { label: "problems solved", value: "100+", unit: "DSA", note: "arrays · trees · graphs · DP" },
  { label: "shipped systems", value: "06", unit: "projects", note: "MERN · mobile · real-time · AI" },
  { label: "live latency", value: "<2s", unit: "p95", note: "GPS broadcast, Bus Tracker" },
  { label: "tick rate", value: "1s", unit: "interval", note: "ride location updates, RideGo" },
];

export const experience = {
  title: "Full-Stack Developer Trainee",
  org: "RICR — Raj Institute of Coding and Robotics",
  period: "May 2025 – Present",
  location: "Bhopal, Madhya Pradesh, India",
  points: [
    "Engineered and deployed full-stack web and mobile applications using the MERN stack and React Native, translating industry requirements into working software.",
    "Designed RESTful and GraphQL APIs with NestJS, applied Drizzle ORM on PostgreSQL for type-safe schema management, and integrated Redis for caching and session storage.",
    "Built real-time features using WebSocket and WebRTC, including live streaming pipelines and bidirectional event systems.",
    "Practised Docker-based local development and CI/CD workflows, reducing deployment friction and improving environment parity across dev/prod.",
    "Completed structured DSA and Java curriculum, solving 100+ problems across arrays, trees, graphs, dynamic programming, and system design case studies.",
  ],
};

// Each project carries a "flow" — the signature data-flow motif rendered per-card,
// described as connected stages so the animation can be generic but content-accurate.
export const projects = [
  {
    id: "craving",
    name: "Craving",
    tagline: "Full-Stack Food Delivery Platform",
    year: "2025",
    origin: "ricr",
    originLabel: "RICR Trainee Project",
    hackathon: null,
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS", "JWT", "Razorpay"],
    flow: ["Customer", "Order API", "Mongo", "Kitchen"],
    points: [
      "Built during RICR Full-Stack Developer Traineeship — architected a multi-vendor food delivery app with role-based access (customer, restaurant, admin), JWT auth, and real-time order status via WebSocket.",
      "Designed normalised MongoDB schemas for restaurants, menus, orders, and users, optimising query performance with compound indexes.",
      "Integrated Razorpay across card, UPI, and wallet flows with webhook-verified order reconciliation.",
      "Implemented Cloudinary image upload and an admin dashboard for live order management and revenue analytics.",
    ],
  },
  {
    id: "bus-tracker",
    name: "Bus Tracker",
    tagline: "Real-Time College Transit App",
    year: "2025",
    origin: "hackathon",
    originLabel: "Oriental TechHack 2.0",
    hackathon: "Oriental TechHack 2.0 — National Hackathon · Oriental Group of Institutes, Bhopal · Powered by Cybrom Technology · ₹1L Prize Pool",
    stack: ["React Native (Expo)", "NestJS", "PostgreSQL", "Drizzle ORM", "Redis", "WebSocket", "Google Maps API"],
    flow: ["GPS", "Gateway", "Redis", "Map"],
    points: [
      "Built at Oriental TechHack 2.0 (national-level hackathon by Oriental Group of Institutes, Bhopal, powered by Cybrom Technology) — cross-platform transit tracker for the college bus system; NestJS gateway broadcasts live GPS coordinates via WebSocket at sub-2-second latency.",
      "Persisted route and stop data in PostgreSQL (Drizzle ORM); used Redis Pub/Sub to fan out location events across server instances, enabling horizontal scaling.",
      "Integrated Google Maps SDK for polyline routes, ETA calculation, and nearest-stop geospatial queries via PostGIS.",
      "Containerised all services with Docker Compose for reproducible local development and staged deployment.",
    ],
  },
  {
    id: "localstream",
    name: "LocalStream",
    tagline: "Live-Commerce Platform for Local Sellers",
    year: "2025",
    origin: "hackathon",
    originLabel: "CODICTIVE 3.0",
    hackathon: "CODICTIVE 3.0 — State-Level Hackathon · Bansal Institute of Science & Technology, Bhopal · Apr 29–30 2025 · ₹36K Prize Pool",
    stack: ["React Native", "Node.js", "MongoDB", "WebRTC (mediasoup)", "WebSocket", "Razorpay", "FFmpeg"],
    flow: ["Seller", "SFU", "Viewers", "Cart"],
    points: [
      "Built at CODICTIVE 3.0 (state-level hackathon by Bansal Institute of Science & Technology, Bhopal · Smart Cities theme · Apr 2025) — mobile-first local commerce platform enabling local sellers to broadcast live product demos via WebRTC (mediasoup SFU) and WebSocket signalling.",
      "Engineered a multi-peer media architecture supporting simultaneous viewer streams with adaptive bitrate switching for variable mobile networks.",
      "Implemented real-time in-stream cart and checkout with Razorpay, reducing purchase friction to a single tap during a live session.",
      "Designed MongoDB collections for products, streams, orders, and chat, with TTL indexes to auto-expire ephemeral stream data.",
    ],
  },
  {
    id: "ai-career-assistant",
    name: "AI Career Assistant",
    tagline: "GenAI-Powered Career Guidance Web App",
    year: "2025",
    origin: "hackathon",
    originLabel: "NavKalpana — NIIST",
    hackathon: "NavKalpana — National Innovation Challenge · NRI Institute of Information Science & Technology, Bhopal · ₹40K Prize Pool · Feb 2026",
    stack: ["Next.js 14", "Express.js", "LangChain.js", "Pinecone", "MongoDB", "Tailwind CSS", "Framer Motion"],
    flow: ["Resume", "Embed", "Pinecone", "SSE"],
    points: [
      "Built at NavKalpana (national innovation challenge by NRI Institute of Information Science & Technology, Bhopal · ₹40K prize pool · Feb 2026) — RAG pipeline where resumes and job descriptions are embedded with OpenAI Embeddings, stored in Pinecone, and retrieved at query time for context-aware career advice.",
      "Built streaming SSE API in Express for token-by-token LLM response delivery, improving perceived latency.",
      "Created a Next.js App Router UI with Framer Motion animations and server components for fast loads and strong Core Web Vitals.",
      "Implemented NextAuth.js role-based auth, MongoDB conversation history, and PDF resume parsing with pdfjs-dist.",
    ],
  },
  {
    id: "ridego",
    name: "RideGo",
    tagline: "Uber / Ola Clone — Ride-Booking Platform",
    year: "2025",
    origin: "ricr",
    originLabel: "RICR Trainee Project",
    hackathon: null,
    stack: ["React Native", "Node.js", "Express.js", "PostgreSQL", "Drizzle ORM", "Redis", "WebSocket", "Google Maps API"],
    flow: ["Rider", "Matcher", "Redis", "Driver"],
    points: [
      "Built during RICR traineeship as an Uber/Ola clone — engineered a real-time driver-matching engine using PostGIS ST_DWithin geospatial queries and Redis-cached driver availability state.",
      "Built live ride-tracking with WebSocket broadcasting of driver GPS coordinates to the rider's map view at 1-second intervals.",
      "Designed a ride-state machine (requested → accepted → en-route → completed) with atomic Redis transactions to prevent race conditions.",
      "Implemented dynamic surge pricing, a driver earnings dashboard, and push notifications via Firebase Cloud Messaging.",
    ],
  },
  {
    id: "shopnext",
    name: "ShopNext",
    tagline: "Personal E-Commerce Project — Built While Learning",
    year: "2025",
    origin: "personal",
    originLabel: "Personal Project",
    hackathon: null,
    stack: ["Next.js 14", "PostgreSQL", "Drizzle ORM", "Tailwind CSS", "GSAP", "Razorpay", "Vercel"],
    flow: ["Storefront", "Admin", "Postgres", "Webhook"],
    points: [
      "Personal project built while learning Next.js and full-stack e-commerce patterns — SSR storefront with App Router; product pages achieve sub-1s LCP via Incremental Static Regeneration.",
      "Built a full admin CMS (product CRUD, inventory, order fulfilment) plus customer cart, wishlist, and order-history modules.",
      "Integrated Razorpay with server-side webhook verification and idempotency keys for reliable payment reconciliation.",
      "Added GSAP scroll-triggered animations and micro-interactions on product cards to improve engagement during user testing.",
    ],
  },
];

export const skillGroups = [
  { domain: "Languages", items: ["JavaScript (ES2023+)", "TypeScript", "Java", "SQL"] },
  { domain: "Backend", items: ["Node.js", "Express.js", "NestJS", "gRPC", "GraphQL", "REST APIs", "WebSocket", "WebRTC"] },
  { domain: "Frontend / Mobile", items: ["React.js", "Next.js 14", "React Native (Expo & Bare)", "Tailwind CSS", "Framer Motion", "GSAP"] },
  { domain: "Databases & Cache", items: ["MongoDB", "PostgreSQL", "Redis", "Drizzle ORM", "Mongoose"] },
  { domain: "DevOps / Infra", items: ["Docker", "Nginx", "GitHub Actions", "PM2", "Linux", "Vercel", "Railway"] },
  { domain: "Architecture", items: ["Microservices", "Event-Driven Design", "WebRTC Signalling", "Pub/Sub", "Load Balancing"] },
  { domain: "Payments & APIs", items: ["Razorpay", "Google Maps API", "Firebase FCM"] },
  { domain: "Tools & Methods", items: ["Git", "Postman", "Swagger", "Jira", "Agile/Scrum", "DSA", "System Design"] },
];

export const education = [
  {
    degree: "Bachelor of Technology — Computer Science Engineering",
    org: "Oriental Group of Institutes, Bhopal, Madhya Pradesh",
    period: "Sep 2024 – Jul 2028",
  },
  {
    degree: "Senior Secondary (XII) — Science PCM with Computer Science",
    org: "Kendriya Vidyalaya, Bhopal, Madhya Pradesh",
    period: "2013 – 2024",
  },
];

export const certifications = [
  { name: "SkillUP 101 — Java", org: "RICR" },
  { name: "Backend Development with JavaScript", org: "RICR" },
  { name: "Python Bootcamp", org: "RICR" },
  { name: "Introduction to Cybersecurity", org: "RICR" },
];

export const achievements = [
  "Active participant in multiple hackathons: Oriental TechHack 2.0 (National, OGI Bhopal · built Bus Tracker), CODICTIVE 3.0 (State, BIST Bhopal · built LocalStream), NavKalpana (National, NIIST Bhopal · built AI Career Assistant), YUVA Future 6.0 (Yi — Young Indians), Samsung ennovateX AX 2026, and Samsung Solve for Tomorrow 2026.",
  "Built and shipped 6 end-to-end full-stack projects spanning MERN, mobile (React Native), real-time (WebRTC/WebSocket), and AI/LLM integrations within 12 months.",
  "Consistent DSA practice on LeetCode following Striver's SDE Sheet, focused on patterns relevant to MAANG-style interviews.",
  "Strong grasp of system design: caching strategies, database sharding, message brokers, rate limiting, and CAP theorem.",
];
