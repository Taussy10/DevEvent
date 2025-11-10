export type Tag =
  | "Frontend"
  | "Backend"
  | "Mobile"
  | "Cloud"
  | "React"
  | "JavaScript"
  | "TypeScript"
  | "Node.js"
  | "DevOps"
  | "Kubernetes"
  | "AWS"
  | "Next.js"
  | "Web3"
  | "Blockchain"
  | "AI/ML"
  | "Database"
  | "Security"
  | "UI/UX"
  | "Full Stack";

// export type AgendaItem = {
//   time: string
// };

export type Organizer = {
  name: string;
  bio: string;
  role: string;
  company?: string;
  // image?: StaticImageData;
};

export type EventDetails = {
  slug: string;
  overview: string;
  eventDetails: {
    venue: string;
    address: string;
    duration: string;
    format: string; // e.g., "In-Person", "Virtual", "Hybrid"
    capacity?: number;
    price?: string;
    registrationLink?: string;
  };
  agenda: string[];
  organizer: string;
  tags: Tag[];
};

export const eventDetails: EventDetails[] = [
  
   {
    slug: "react-summit-us-2025",
    overview:
      "Join us for the premier React conference in the United States! React Summit US 2025 brings together the brightest minds in the React ecosystem for two days of inspiring talks, hands-on workshops, and networking opportunities. Whether you're a seasoned React developer or just getting started, this event offers something for everyone. Learn about the latest features, best practices, and cutting-edge techniques from industry leaders and core team members.",
    eventDetails: {
      venue: "Moscone Center",
      address: "747 Howard St, San Francisco, CA 94103, USA",
      duration: "2 days",
      format: "In-Person",
      capacity: 2000,
      price: "Early Bird: $299 | Regular: $399",
      registrationLink: "https://reactsummit.com/register",
    },
    agenda: [
      "09:00 AM - 09:30 AM | Registration & Welcome Coffee",
      "09:30 AM - 10:15 AM | Keynote: The Future of React by Dan Abramov",
      "10:30 AM - 11:15 AM | Building Scalable React Applications by Kent C. Dodds",
      "11:30 AM - 12:15 PM | React Server Components Deep Dive by Sebastian Markbåge",
      "12:15 PM - 01:30 PM | Lunch Break",
      "01:30 PM - 02:15 PM | State Management in Modern React by Michel Weststrate",
      "02:30 PM - 03:15 PM | Performance Optimization Techniques by Ryan Florence",
      "03:30 PM - 04:15 PM | Testing React Applications by Guillermo Rauch",
      "04:30 PM - 05:30 PM | Panel Discussion: React Ecosystem",
      "06:00 PM - 08:00 PM | Networking Reception",
    ],
    organizer:
      "The React Summit Team is dedicated to bringing together the React community through world-class conferences and events. With years of experience organizing developer conferences, we're passionate about creating spaces where developers can learn, share, and connect.",
    tags: [
      "Frontend",
      "React",
      "JavaScript",
      "TypeScript",
      "UI/UX",
      "Full Stack",
    ],
  },
  {
    slug: "amazon-summit-us-2025",
    overview:
      "Join us for the premier React conference in the United States! React Summit US 2025 brings together the brightest minds in the React ecosystem for two days of inspiring talks, hands-on workshops, and networking opportunities. Whether you're a seasoned React developer or just getting started, this event offers something for everyone. Learn about the latest features, best practices, and cutting-edge techniques from industry leaders and core team members.",
    eventDetails: {
      venue: "Moscone Center",
      address: "747 Howard St, San Francisco, CA 94103, USA",
      duration: "2 days",
      format: "In-Person",
      capacity: 2000,
      price: "Early Bird: $299 | Regular: $399",
      registrationLink: "https://reactsummit.com/register",
    },
    agenda: [
      "09:00 AM - 09:30 AM | Registration & Welcome Coffee",
      "09:30 AM - 10:15 AM | Keynote: The Future of React by Dan Abramov",
      "10:30 AM - 11:15 AM | Building Scalable React Applications by Kent C. Dodds",
      "11:30 AM - 12:15 PM | React Server Components Deep Dive by Sebastian Markbåge",
      "12:15 PM - 01:30 PM | Lunch Break",
      "01:30 PM - 02:15 PM | State Management in Modern React by Michel Weststrate",
      "02:30 PM - 03:15 PM | Performance Optimization Techniques by Ryan Florence",
      "03:30 PM - 04:15 PM | Testing React Applications by Guillermo Rauch",
      "04:30 PM - 05:30 PM | Panel Discussion: React Ecosystem",
      "06:00 PM - 08:00 PM | Networking Reception",
    ],
    organizer:
      "The React Summit Team is dedicated to bringing together the React community through world-class conferences and events. With years of experience organizing developer conferences, we're passionate about creating spaces where developers can learn, share, and connect.",
    tags: [
      "Frontend",
      "React",
      "JavaScript",
      "TypeScript",
      "UI/UX",
      "Full Stack",
    ],
  },

];

export default EventDetails;
