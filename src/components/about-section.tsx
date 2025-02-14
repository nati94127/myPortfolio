import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "Java",
  "C++",
  "SQL",
  "Git",
  "Docker",
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Who I Am</CardTitle>
              <CardDescription>
                Passionate Computer Science Student
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Hello! I'm [Your Name], a dedicated computer science student
                with a passion for solving complex problems and creating
                innovative solutions. My journey in tech began with a
                fascination for how software can change the world, and it's
                grown into a mission to contribute to that change.
              </p>
              <p>
                When I'm not coding, you can find me [Your Hobbies/Interests]. I
                believe in continuous learning and am always excited to tackle
                new challenges in the ever-evolving world of technology.
              </p>
            </CardContent>
          </Card>
          <div className="flex flex-col items-center justify-start gap-4">
            <Avatar className="w-32 h-32">
              <AvatarImage src="/your-photo.jpg" alt="Your Name" />
              <AvatarFallback>YN</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-semibold">[Your Name]</h3>
            <p className="text-muted-foreground text-center">
              Computer Science Student
            </p>
            <p className="text-muted-foreground text-center">
              at [Your University]
            </p>
          </div>
        </div>
        <Separator className="my-8" />
        <div>
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
