import { projects } from "@/lib/data/projects";
import { ProjectDetailClient } from "./ProjectDetailClient";
import { notFound } from "next/navigation";

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

// Extended project data for detailed view
const extendedProjectData: { [key: number]: any } = {
  1: {
    progress: 75,
    budget: "$2.5M",
    beneficiaries: "15,000+",
    partners: [
      "UN Development Programme",
      "Asian Development Bank",
      "Local Energy Cooperatives",
    ],
    objectives: [
      "Install 500MW of solar capacity across rural communities",
      "Train 200 local technicians in solar maintenance",
      "Establish sustainable financing models for energy access",
      "Reduce carbon emissions by 50,000 tons annually",
    ],
    achievements: [
      "Completed installations in 50 villages",
      "Trained 150 local technicians",
      "Generated 300MW of clean energy",
      "Reduced energy costs by 60% for participating communities",
    ],
    gallery: [
      "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/2800549/pexels-photo-2800549.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    ],
  },
  2: {
    progress: 60,
    budget: "$3.2M",
    beneficiaries: "50,000+",
    partners: [
      "Ocean Conservancy",
      "National Geographic",
      "Maritime Clean Energy",
    ],
    objectives: [
      "Remove 1,000 tons of plastic waste from ocean surface",
      "Deploy 10 autonomous cleanup systems",
      "Educate 100,000 people about ocean conservation",
      "Influence policy changes in 5 coastal nations",
    ],
    achievements: [
      "Removed 500+ tons of plastic waste",
      "Deployed 6 autonomous cleanup systems",
      "Educated 60,000 people through outreach programs",
      "Influenced 3 major policy changes",
    ],
    gallery: [
      "https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    ],
  },
  3: {
    progress: 85,
    budget: "$1.8M",
    beneficiaries: "250,000+",
    partners: [
      "World Wildlife Fund",
      "Urban Development Council",
      "Green Cities Initiative",
    ],
    objectives: [
      "Plant 100,000 native trees in urban areas",
      "Create 50 new green spaces and parks",
      "Improve air quality by 30% in target areas",
      "Engage 10,000 community volunteers",
    ],
    achievements: [
      "Planted 85,000 trees across 25 cities",
      "Created 42 new parks and green spaces",
      "Improved air quality by 25% in participating areas",
      "Engaged 8,500 community volunteers",
    ],
    gallery: [
      "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    ],
  },
  4: {
    progress: 70,
    budget: "$2.0M",
    beneficiaries: "25,000+",
    partners: ["Water.org", "Local Health Ministries", "Global Water Alliance"],
    objectives: [
      "Drill 100 new wells in rural communities",
      "Install 200 water purification systems",
      "Train 500 local water management committees",
      "Reduce waterborne diseases by 40%",
    ],
    achievements: [
      "Drilled 80 new wells",
      "Installed 150 water purification systems",
      "Trained 400 local committees",
      "Reduced waterborne diseases by 30%",
    ],
    gallery: [
      "https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/450271/pexels-photo-450271.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    ],
  },
  5: {
    progress: 90,
    budget: "$1.5M",
    beneficiaries: "100,000+",
    partners: [
      "Food and Agriculture Organization",
      "Local Farmers Union",
      "Sustainable Agriculture Network",
    ],
    objectives: [
      "Train 1,000 farmers in sustainable practices",
      "Increase crop yields by 30%",
      "Reduce chemical fertilizer use by 50%",
      "Establish 100 community gardens",
    ],
    achievements: [
      "Trained 800 farmers",
      "Increased crop yields by 25%",
      "Reduced chemical fertilizer use by 40%",
      "Established 80 community gardens",
    ],
    gallery: [
      "https://images.pexels.com/photos/2518861/pexels-photo-2518861.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    ],
  },
  6: {
    progress: 65,
    budget: "$2.8M",
    beneficiaries: "20,000+",
    partners: [
      "International Union for Conservation of Nature",
      "Local Wildlife Authorities",
      "EcoTourism Partners",
    ],
    objectives: [
      "Establish 5 new protected areas",
      "Implement anti-poaching measures in 10 key locations",
      "Conduct wildlife population surveys",
      "Engage 5,000 community members in conservation efforts",
    ],
    achievements: [
      "Established 3 new protected areas",
      "Implemented anti-poaching measures in 7 locations",
      "Conducted surveys showing population increases in key species",
      "Engaged 4,000 community members",
    ],
    gallery: [
      "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    ],
  },
};

interface ProjectDetailProps {
  params: {
    id: string;
  };
}

export default function ProjectDetail({ params }: ProjectDetailProps) {
  const projectId = parseInt(params.id);

  // Find the project from the centralized data
  const baseProject = projects.find((p) => p.id === projectId);
  const extendedProject = extendedProjectData[projectId];

  if (!baseProject || !extendedProject) {
    notFound();
  }

  // Combine base and extended project data
  const project = {
    ...baseProject,
    ...extendedProject,
  };

  return <ProjectDetailClient project={project} />;
}
