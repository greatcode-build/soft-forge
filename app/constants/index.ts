import {
  Lightbulb,
  LucideIcon,
  TrendingUp,
  Users,
  Code,
  Smartphone,
  Cloud,
  Shield,
  PieChart,
  RefreshCcw,
} from "lucide-react";

export const stats = [
  { id: 1, value: 2500, title: "Clients", start: 2400, suffix: "+" },
  { id: 2, value: 10, title: "Projects", start: 0, suffix: "K+" },
  { id: 3, value: 200, title: "Team Members", start: 0, suffix: "+" },
];

export const navLinks = [
  { label: "Home", path: "#home" },
  { label: "About Us", path: "#about" },
  { label: "Services", path: "#services" },
  { label: "Team", path: "#team" },
  { label: "Contact", path: "#contact" },
];

export const aboutData: {
  id: number;
  title: string;
  text: string;
  icon: LucideIcon;
}[] = [
  {
    id: 1,
    title: "Smart Digital Solutions",
    text: "Your business runs better with the right technology. We build tailored software that simplifies workflows, reduces manual effort, and improves output.",
    icon: Lightbulb,
  },
  {
    id: 2,
    title: "Scalable Engineering",
    text: "You start small and grow without limits. We design systems that handle increasing users, data, and complexity without breaking.",
    icon: TrendingUp,
  },
  {
    id: 3,
    title: "User Focused Experience",
    text: "People use what feels simple. We craft interfaces that are fast, intuitive, and easy to navigate.",
    icon: Users,
  },
];

export const services: {
  id: number;
  title: string;
  text: string;
  color: string;
  icon: LucideIcon;
}[] = [
  {
    id: 1,
    title: "Software Development",
    text: "We build tailored software that fits your business processes, improving efficiency and reducing errors.",
    icon: Code,
    color: "#1D4ED8",
  },
  {
    id: 2,
    title: "Mobile Applications",
    text: "Delivering responsive, fast, and user-friendly mobile apps for iOS and Android platforms.",
    icon: Smartphone,
    color: "#F59E0B",
  },
  {
    id: 3,
    title: "Cloud Integration",
    text: "Seamless cloud setup and integration for scalability, data security, and easy collaboration.",
    icon: Cloud,
    color: "#10B981",
  },
  {
    id: 4,
    title: "Cybersecurity & Compliance",
    text: "Protect your systems and data with robust security measures and industry-standard compliance.",
    icon: Shield,
    color: "#EF4444",
  },
  {
    id: 5,
    title: "Data Analytics & Insights",
    text: "Turn your business data into actionable insights with analytics, dashboards, and reports.",
    icon: PieChart,
    color: "#8B5CF6",
  },
  {
    id: 6,
    title: "System Maintenance & Support",
    text: "Ongoing monitoring, updates, and technical support to keep your software running smoothly.",
    icon: RefreshCcw,
    color: "#F97316",
  },
];
export const teamMembers = [
  {
    id: 1,
    name: "Alice Johnson",
    title: "Chief Executive Officer",
    email: "alice@softforge.com",
    image: "/images/Alice.png",
  },
  {
    id: 2,
    name: "Bob Smith",
    title: "Chief Technology Officer",
    email: "bob@softforge.com",
    image: "/images/Bob.png",
  },
  {
    id: 3,
    name: "Carol Davis",
    title: "Lead Software Engineer",
    email: "carol@softforge.com",
    image: "/images/Carol.png",
  },
  {
    id: 4,
    name: "David Lee",
    title: "Product Manager",
    email: "david@softforge.com",
    image: "/images/David.png",
  },
  {
    id: 5,
    name: "Sarah Kim",
    title: "UI/UX Designer",
    email: "sarah@softforge.com",
    image: "/images/Sarah.png",
  },
  {
    id: 6,
    name: "Michael Brown",
    title: "DevOps Engineer",
    email: "michael@softforge.com",
    image: "/images/Michael.png",
  },
];

export const reviews = [
  {
    id: 1,
    name: "Ethan Walker",
    image: "/images/Ethan.png",
    rating: 5,
    review:
      "Everything worked smoothly from the first click. The interface is clean and easy to follow, and I didn’t need any extra help to get started. It saved me a lot of time.",
  },
  {
    id: 2,
    name: "Olivia Bennett",
    image: "/images/Olivia.png",
    rating: 4,
    review:
      "I had a good experience overall. The process was simple and fast, and I liked how clear everything was. A few small improvements would make it even better.",
  },
  {
    id: 3,
    name: "Liam Carter",
    image: "/images/Liam.png",
    rating: 5,
    review:
      "This stands out compared to similar services I’ve tried. It feels reliable and well built. I’ve already started recommending it to people around me.",
  },
  {
    id: 4,
    name: "Sophia Martinez",
    image: "/images/Sophia.png",
    rating: 5,
    review:
      "I was impressed by how easy everything felt. The design is simple but effective, and it helped me complete my task without any confusion. Great experience.",
  },
  {
    id: 5,
    name: "Noah Anderson",
    image: "/images/Noah.png",
    rating: 5,
    review:
      "Fast, clean, and dependable. I didn’t run into any issues, and everything loaded quickly. It’s clear a lot of thought went into the user experience.",
  },
  {
    id: 6,
    name: "Isabella Rossi",
    image: "/images/Isabella.png",
    rating: 4,
    review:
      "The service works well and feels polished. I like how straightforward everything is. With a few minor tweaks, it would be close to perfect.",
  },
];
