import { WorkGallery } from "@/components/sections/work-gallery/WorkGallery";
import { Contact } from "@/components/sections/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Gallery | Elijah Ndenwa",
  description: "A collection of things I have helped to build.",
};

export default function WorkGalleryPage() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden bg-background">
      <div className="pt-24 md:pt-32">
        <WorkGallery />
      </div>
      <Contact />
    </main>
  );
}
