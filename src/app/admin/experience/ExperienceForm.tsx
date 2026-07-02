"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createExperience, updateExperience } from "@/actions/experienceActions";
import { toast } from "sonner";

export default function ExperienceForm({ initialData, onSuccess }: { initialData?: any; onSuccess: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      
      if (initialData) {
        await updateExperience(initialData._id, formData);
        toast.success("Experience updated successfully");
      } else {
        await createExperience(formData);
        toast.success("Experience created successfully");
      }
      
      onSuccess();
    } catch (error) {
      toast.error("An error occurred while saving the experience");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title" className="text-zinc-300">Job Title</Label>
          <Input 
            id="title" 
            name="title" 
            required 
            placeholder="e.g. Senior Full Stack Developer"
            defaultValue={initialData?.title} 
            className="bg-white/5 border-white/10 text-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company" className="text-zinc-300">Company</Label>
          <Input 
            id="company" 
            name="company" 
            required
            placeholder="e.g. Tech Corp"
            defaultValue={initialData?.company} 
            className="bg-white/5 border-white/10 text-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="startDate" className="text-zinc-300">Start Date</Label>
          <Input 
            id="startDate" 
            name="startDate" 
            required 
            placeholder="e.g. Jan 2022"
            defaultValue={initialData?.startDate} 
            className="bg-white/5 border-white/10 text-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="endDate" className="text-zinc-300">End Date</Label>
          <Input 
            id="endDate" 
            name="endDate" 
            placeholder="e.g. Present"
            defaultValue={initialData?.endDate || "Present"} 
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
          {isSubmitting ? "Saving..." : "Save Experience"}
        </Button>
      </div>
    </form>
  );
}
