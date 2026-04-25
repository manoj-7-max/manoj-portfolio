import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({ title, description, image, tags, demoUrl, githubUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl hover:shadow-purple-200 transition-all border-2 border-purple-100 hover:border-purple-300 hover:scale-105 duration-300">
      <div className="aspect-video w-full overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => {
            const colors = [
              "bg-gradient-to-r from-blue-500 to-cyan-500",
              "bg-gradient-to-r from-purple-500 to-pink-500",
              "bg-gradient-to-r from-green-500 to-teal-500",
              "bg-gradient-to-r from-orange-500 to-red-500",
              "bg-gradient-to-r from-indigo-500 to-purple-500",
            ];
            const colorClass = colors[index % colors.length];
            return (
              <Badge key={tag} className={`${colorClass} text-white border-0`}>
                {tag}
              </Badge>
            );
          })}
        </div>
        <div className="flex gap-2">
          {demoUrl && (
            <Button variant="default" size="sm" asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="size-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button variant="outline" size="sm" asChild className="border-purple-600 text-purple-600 hover:bg-purple-50">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="size-4 mr-2" />
                Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}