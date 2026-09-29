import { galleryProjects } from "@/data/work-gallery";
import { CaseStudy } from "@/components/sections/work-gallery/CaseStudy";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateStaticParams() {
  return galleryProjects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = galleryProjects.find((p) => p.id === id);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.overview || project.description,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = galleryProjects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden bg-background">
      <CaseStudy project={project} />
    </main>
  );
}
