"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createProject, updateProject } from "@/actions/projectActions";
import { toast } from "sonner";

export default function ProjectForm({ initialData, onSuccess }: { initialData?: any; onSuccess: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      
      if (initialData) {
        await updateProject(initialData._id, formData);
        toast.success("Project updated successfully");
      } else {
        await createProject(formData);
        toast.success("Project created successfully");
      }
      
      onSuccess();
    } catch (error) {
      toast.error("An error occurred while saving the project");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title" className="text-zinc-300">Title</Label>
          <Input 
            id="title" 
            name="title" 
            required 
            defaultValue={initialData?.title} 
            className="bg-white/5 border-white/10 text-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="category" className="text-zinc-300">Category</Label>
          <Input 
            id="category" 
            name="category" 
            placeholder="e.g. SaaS, Web, AI"
            defaultValue={initialData?.category} 
            className="bg-white/5 border-white/10 text-white"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description" className="text-zinc-300">Description</Label>
        <Textarea 
          id="description" 
          name="description" 
          required 
          defaultValue={initialData?.description} 
          className="bg-white/5 border-white/10 text-white min-h-[100px]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="image" className="text-zinc-300">Image URL</Label>
        <Input 
          id="image" 
          name="image" 
          placeholder="https://..."
          defaultValue={initialData?.image} 
          className="bg-white/5 border-white/10 text-white"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="features" className="text-zinc-300">Features (Comma separated)</Label>
          <Input 
            id="features" 
            name="features" 
            placeholder="Feature 1, Feature 2"
            defaultValue={initialData?.features?.join(", ")} 
            className="bg-white/5 border-white/10 text-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="tech" className="text-zinc-300">Technologies (Comma separated)</Label>
          <Input 
            id="tech" 
            name="tech" 
            placeholder="React, Next.js, Tailwind"
            defaultValue={initialData?.tech?.join(", ")} 
            className="bg-white/5 border-white/10 text-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="githubLink" className="text-zinc-300">GitHub Link</Label>
          <Input 
            id="githubLink" 
            name="githubLink" 
            defaultValue={initialData?.githubLink} 
            className="bg-white/5 border-white/10 text-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="liveLink" className="text-zinc-300">Live Link</Label>
          <Input 
            id="liveLink" 
            name="liveLink" 
            defaultValue={initialData?.liveLink} 
            className="bg-white/5 border-white/10 text-white"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="order" className="text-zinc-300">Display Order</Label>
        <Input 
          id="order" 
          name="order" 
          type="number"
          defaultValue={initialData?.order || 0} 
          className="bg-white/5 border-white/10 text-white"
        />
      </div>

      <div className="pt-4 flex justify-end gap-2">
        <Button 
          type="button" 
          variant="ghost" 
          onClick={onSuccess}
          className="hover:bg-white/10 text-zinc-300"
        >
          Cancel
        </Button>
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-primary hover:bg-primary/90 text-white"
        >
          {isSubmitting ? "Saving..." : "Save Project"}
        </Button>
      </div>
    </form>
  );
}
