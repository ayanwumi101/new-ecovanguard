import { projects } from '@/lib/data/projects';
import { ProjectDetailClient } from './ProjectDetailClient';
import { notFound } from 'next/navigation';

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
    budget: '$2.5M',
    beneficiaries: '15,000+',
    partners: ['UN Development Programme', 'Asian Development Bank', 'Local Energy Cooperatives'],
    objectives: [
      'Install 500MW of solar capacity across rural communities',
      'Train 200 local technicians in solar maintenance',
      'Establish sustainable financing models for energy access',
      'Reduce carbon emissions by 50,000 tons annually'
    ],
    achievements: [
      'Completed installations in 50 villages',
      'Trained 150 local technicians',
      'Generated 300MW of clean energy',
      'Reduced energy costs by 60% for participating communities'
    ],
    gallery: [
      'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/2800549/pexels-photo-2800549.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    ]
  },
  2: {
    progress: 60,
    budget: '$3.2M',
    beneficiaries: '50,000+',
    partners: ['Ocean Conservancy', 'National Geographic', 'Maritime Clean Energy'],
    objectives: [
      'Remove 1,000 tons of plastic waste from ocean surface',
      'Deploy 10 autonomous cleanup systems',
      'Educate 100,000 people about ocean conservation',
      'Influence policy changes in 5 coastal nations'
    ],
    achievements: [
      'Removed 500+ tons of plastic waste',
      'Deployed 6 autonomous cleanup systems',
      'Educated 60,000 people through outreach programs',
      'Influenced 3 major policy changes'
    ],
    gallery: [
      'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    ]
  },
  3: {
    progress: 85,
    budget: '$1.8M',
    beneficiaries: '250,000+',
    partners: ['World Wildlife Fund', 'Urban Development Council', 'Green Cities Initiative'],
    objectives: [
      'Plant 100,000 native trees in urban areas',
      'Create 50 new green spaces and parks',
      'Improve air quality by 30% in target areas',
      'Engage 10,000 community volunteers'
    ],
    achievements: [
      'Planted 85,000 trees across 25 cities',
      'Created 42 new parks and green spaces',
      'Improved air quality by 25% in participating areas',
      'Engaged 8,500 community volunteers'
    ],
    gallery: [
      'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    ]
  }
};

interface ProjectDetailProps {
  params: {
    id: string;
  };
}

export default function ProjectDetail({ params }: ProjectDetailProps) {
  const projectId = parseInt(params.id);
  
  // Find the project from the centralized data
  const baseProject = projects.find(p => p.id === projectId);
  const extendedProject = extendedProjectData[projectId];

  if (!baseProject || !extendedProject) {
    notFound();
  }

  // Combine base and extended project data
  const project = {
    ...baseProject,
    ...extendedProject
  };

  return <ProjectDetailClient project={project} />;
}