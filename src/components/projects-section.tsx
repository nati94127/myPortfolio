"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectDialog } from "@/components/project-dialog";

const projects = [
  {
    title: "AI-Powered Task Manager",
    description:
      "A smart task management application that uses machine learning to prioritize and categorize tasks.",
    longDescription:
      "This AI-powered task manager leverages machine learning algorithms to automatically prioritize and categorize tasks based on user behavior and task characteristics. It includes features like smart scheduling, task dependency tracking, and personalized productivity insights.",
    tags: ["React", "Python", "TensorFlow"],
    screenshots: [
      "/projects/task-manager-1.jpg",
      "/projects/task-manager-2.jpg",
      "/projects/task-manager-3.jpg",
    ],
    link: "#",
  },
  {
    title: "Blockchain Voting System",
    description:
      "A secure and transparent voting system built on blockchain technology for student body elections.",
    longDescription:
      "This blockchain-based voting system ensures the integrity and transparency of student body elections. It uses smart contracts to manage the voting process, providing a tamper-proof record of votes and real-time results tabulation.",
    tags: ["Solidity", "Ethereum", "Web3.js"],
    screenshots: [
      "/projects/voting-system-1.jpg",
      "/projects/voting-system-2.jpg",
      "/projects/voting-system-3.jpg",
    ],
    link: "#",
  },
  {
    title: "Augmented Reality Campus Tour",
    description:
      "An AR app that provides an interactive tour of the university campus for prospective students.",
    longDescription:
      "This augmented reality campus tour app allows prospective students to explore the university campus virtually. It overlays digital information onto real-world views, providing details about buildings, facilities, and campus life as users move around.",
    tags: ["Unity", "C#", "ARCore"],
    screenshots: [
      "/projects/ar-tour-1.jpg",
      "/projects/ar-tour-2.jpg",
      "/projects/ar-tour-3.jpg",
    ],
    link: "#",
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-16 px-4 font-sans">
      <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                onClick={() => setSelectedProject(project)}
              >
                View Project
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
