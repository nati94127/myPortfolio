"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectDialogProps {
  project: {
    title: string;
    longDescription: string;
    tags: string[];
    screenshots: string[];
    link: string;
  };
  onClose: () => void;
}

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.screenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.screenshots.length - 1 : prevIndex - 1
    );
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="relative mt-4 aspect-video overflow-hidden rounded-lg">
          <img
            src={project.screenshots[currentImageIndex] || "/placeholder.svg"}
            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
            className="object-cover w-full h-full"
          />
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2"
            onClick={prevImage}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            onClick={nextImage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          {project.longDescription}
        </p>
        <div className="mt-4">
          <Button asChild className="w-full">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Visit Project
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
