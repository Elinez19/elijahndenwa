export type ProjectType = "Mobile" | "UI Design" | "Website";

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  type: ProjectType;
  description: string;
  roles: string[];
  link?: string;
  platforms?: ("App Store" | "Google Play" | "Web")[];
  arrowText?: string;
  mockupType: "mobile" | "website";
  primaryColor?: string;
  // Case Study Details
  client?: string;
  year?: string;
  techStack?: string[];
  overview?: string;
  challenge?: string;
  solution?: string;
}

export const galleryProjects: ProjectData[] = [
  {
    id: "bimbeddings",
    number: "01",
    title: "BimBeddings",
    subtitle: "Streamlining E-Commerce For Bedding Retailers.",
    type: "Website",
    description: "A full-stack e-commerce application for a bedding company. Features include product management, customer accounts, graphical analytics, and secure transactions.",
    roles: ["Web Developer", "Full-Stack"],
    link: "/work-gallery/bimbeddings",
    platforms: ["Web"],
    arrowText: "Full-Stack e-commerce!",
    mockupType: "website",
    primaryColor: "#E53935",
    client: "BimBeddings",
    year: "2022",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    overview: "Building a scalable e-commerce platform for BimBeddings to handle increasing online sales and provide a seamless shopping experience for their customers.",
    challenge: "The previous system was manual and couldn't scale with their growing customer base. They needed a unified platform for inventory management, customer tracking, and automated transactions.",
    solution: "Developed a custom full-stack e-commerce solution using the MERN stack. Integrated secure payment gateways, a dynamic cart system, and an admin dashboard for real-time sales analytics and inventory control."
  },
  {
    id: "skilled4u",
    number: "02",
    title: "Skilled4U",
    subtitle: "Connecting People With Trusted Handymen.",
    type: "Mobile",
    description: "A comprehensive handyman mobile and web application connecting users with skilled professionals. Features include seamless service booking, real-time tracking, and secure payments.",
    roles: ["Mobile Developer", "Frontend Developer"],
    link: "/work-gallery/skilled4u",
    platforms: ["App Store", "Google Play", "Web"],
    arrowText: "Connecting professionals!",
    mockupType: "mobile",
    primaryColor: "#FFC247",
    client: "Skilled4U",
    year: "2023",
    techStack: ["React Native", "TypeScript", "Next.js"],
    overview: "Helping people easily find, book, and pay reliable handymen in their local area through a unified mobile and web platform.",
    challenge: "Users found it difficult to trust independent handymen, and professionals struggled to find consistent work. The app needed a robust rating system, real-time location tracking, and secure escrow payments to build trust.",
    solution: "Built a cross-platform mobile app and responsive web dashboard. Implemented a dual-sided marketplace with real-time chat, GPS tracking for arrivals, and a secure payment flow that holds funds until the job is marked complete."
  },
  {
    id: "eimpactchart",
    number: "03",
    title: "EIMPACT CHART",
    subtitle: "Managing Medical Records For Global Missions.",
    type: "Website",
    description: "A full-stack healthcare ERP system designed for managing medical records, patient workflows, and hospital services during large-scale medical missions.",
    roles: ["Frontend Developer"],
    link: "/work-gallery/eimpactchart",
    platforms: ["Web"],
    arrowText: "Used in real medical missions!",
    mockupType: "website",
    primaryColor: "#29B6F6",
    client: "Medical NGO",
    year: "2024",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    overview: "Modernizing medical record keeping for large-scale medical missions where thousands of patients need to be processed quickly and accurately.",
    challenge: "Paper records were leading to lost patient histories and slow processing times during critical medical missions. The system needed to work reliably even in low-bandwidth environments while ensuring patient data security.",
    solution: "Designed and developed a highly optimized frontend for the medical records ERP. Implemented efficient data-entry forms, offline-capable progressive web features, and a dashboard for doctors to quickly review patient histories."
  },
  {
    id: "school-management",
    number: "04",
    title: "School System",
    subtitle: "Simplifying School Management And Communication.",
    type: "Mobile",
    description: "A robust school management system supporting mobile and web platforms. Facilitates student tracking, administrative workflows, and seamless communication between teachers and parents.",
    roles: ["Full-Stack Developer"],
    link: "/work-gallery/school-management",
    platforms: ["App Store", "Google Play", "Web"],
    arrowText: "Streamlining education!",
    mockupType: "mobile",
    primaryColor: "#AB47BC",
    client: "Educational Institutions",
    year: "2023",
    techStack: ["React Native", "Next.js", "Node.js"],
    overview: "Bridging the communication gap between schools, parents, and students with an all-in-one educational management platform.",
    challenge: "Schools were using fragmented tools for attendance, grading, and parent communication. This led to data silos and frustrated parents who couldn't easily track their children's progress.",
    solution: "Created a centralized platform with dedicated portals for admins, teachers, students, and parents. Features include automated attendance tracking, digital report cards, and instant push notifications for important school announcements."
  },
  {
    id: "superbediting",
    number: "05",
    title: "SuperbEditing",
    subtitle: "Integrating Editing Services With Learning.",
    type: "Website",
    description: "Built a full-stack platform integrating research writing services with a Learning Management System (LMS). Enables clients to request editing services and access training materials.",
    roles: ["Full-Stack Developer"],
    link: "/work-gallery/superbediting",
    platforms: ["Web"],
    arrowText: "Built from scratch!",
    mockupType: "website",
    primaryColor: "#212121",
    client: "SuperbEditing",
    year: "2024",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    overview: "Combining professional editing services with an educational platform to help researchers improve their writing skills while getting immediate help.",
    challenge: "The client needed a platform that could simultaneously handle complex service requests (like dissertation editing) while also serving structured educational courses to users.",
    solution: "Developed a custom LMS integrated with a service request portal. Users can track their editing request progress in real-time while engaging with interactive courses on academic writing."
  },
  {
    id: "grace-for-impact",
    number: "06",
    title: "Grace For Impact",
    subtitle: "Expanding Digital Presence For Global Outreach.",
    type: "Website",
    description: "Developed modern global outreach websites for Grace For Impact and Spring of Life Ministries, significantly improving their digital presence and global accessibility.",
    roles: ["Software Developer"],
    link: "/work-gallery/grace-for-impact",
    platforms: ["Web"],
    arrowText: "Global outreach!",
    mockupType: "website",
    primaryColor: "#2E7D32",
    client: "Purplebee Technologies",
    year: "2023",
    techStack: ["React", "Next.js", "CSS"],
    overview: "Revamping the digital presence of non-profit organizations to better showcase their global impact and facilitate online donations.",
    challenge: "The previous websites were outdated, not mobile-friendly, and struggled to effectively communicate the organizations' missions, leading to lower engagement and donations.",
    solution: "Built fast, accessible, and responsive websites using modern web technologies. Integrated secure donation portals and optimized the content structure to highlight their impactful stories and initiatives."
  }
];
