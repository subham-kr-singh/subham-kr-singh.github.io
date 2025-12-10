import { Code, Server, Database, Cloud, Terminal, Layers, Cpu, Globe, Shield, Activity, Box } from 'lucide-react';

export const portfolioData = {
  profile: {
    name: "Subham Kumar Singh",
    title: "Backend & Fullstack Developer",
    tagline: "Building scalable, high-performance systems.",
    about: "I specialize in backend development with Java Spring Boot, Golang, and Node.js. Passionate about system design, cloud architecture, and building robust APIs.",
    social: {
      linkedin: "https://www.linkedin.com/in/subham-kumar-singh-303a831b9/",
      github: "https://github.com/",
      email: "mailto:contact@example.com"
    }
  },
  skills: [
    {
      category: "Programming Languages",
      icon: Code,
      items: ["Java", "JavaScript", "Python", "C++", "Go"]
    },
    {
      category: "Web Services & API",
      icon: Globe,
      items: ["Nginx", "Apache Tomcat", "RESTful APIs", "gRPC", "GraphQL"]
    },
    {
      category: "Backend Frameworks",
      icon: Server,
      items: ["Spring Boot", "Express.js", "Django", "Gin (Go)"]
    },
    {
      category: "Databases",
      icon: Database,
      items: ["PostgreSQL", "MySQL", "MongoDB", "Cassandra", "Redis"]
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      items: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD (Jenkins/GitLab)"]
    },
    {
      category: "Authentication",
      icon: Shield,
      items: ["OAuth 2.0", "JWT", "Spring Security", "SSO"]
    },
    {
      category: "System Design",
      icon: Layers,
      items: ["Microservices", "Distributed Systems", "Caching", "Load Balancing", "Message Queues (Kafka/RabbitMQ)"]
    },
     {
      category: "Data Structures & Algos",
      icon: Cpu,
      items: ["Big O", "Recursion", "Sorting", "Trees", "Graphs"]
    },
    {
      category: "Tools & Collaboration",
      icon: Terminal,
      items: ["Git", "Linux", "Jira", "Postman", "Slack"]
    }
  ],
  projects: [
    {
      id: 1,
      title: "QMall - E-commerce Backend",
      description: "A high-concurrency e-commerce backend built with Spring Boot. Handles thousands of requests per second using Redis caching and RabbitMQ for order processing.",
      tech: ["Java", "Spring Boot", "Redis", "MySQL"],
      links: { demo: "#", github: "#" },
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "XTweet - Social Platform",
      description: "A scalable social media REST API with follower feeds, likes, and comments. Implemented using Clean Architecture and TDD principles.",
      tech: ["Go", "Gin", "PostgreSQL", "Docker"],
      links: { demo: "#", github: "#" },
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "CloudFile - Secure Storage",
      description: "Distributed file storage system mimicking S3. Features chunked uploads, encryption at rest, and presigned URLs for secure access.",
      tech: ["Node.js", "AWS S3", "Express", "React"],
      links: { demo: "#", github: "#" },
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: "TaskMaster - Real-time Collab",
      description: "Real-time project management tool with live updates using WebSockets. Supports drag-and-drop task boards and team chat.",
      tech: ["React", "Firebase", "Tailwind", "Socket.io"],
      links: { demo: "#", github: "#" },
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800"
    }
  ]
};
