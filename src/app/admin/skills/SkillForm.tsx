"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createSkill, updateSkill } from "@/actions/skillActions";
import { toast } from "sonner";

export default function SkillForm({ initialData, onSuccess }: { initialData?: any; onSuccess: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      
      if (initialData) {
        await updateSkill(initialData._id, formData);
        toast.success("Skill updated successfully");
      } else {
        await createSkill(formData);
        toast.success("Skill created successfully");
      }
      
      onSuccess();
    } catch (error) {
      toast.error("An error occurred while saving the skill");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div className="space-y-2">
        <Label htmlFor="category" className="text-zinc-300">Category</Label>
        <Input 
          id="category" 
          name="category" 
          required 
          placeholder="e.g. Frontend"
          defaultValue={initialData?.category} 
          className="bg-white/5 border-white/10 text-white"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="name" className="text-zinc-300">Skill Name</Label>
        <Input 
          id="name" 
          name="name" 
          required 
          placeholder="e.g. React.js"
          defaultValue={initialData?.name} 
          className="bg-white/5 border-white/10 text-white"
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
          {isSubmitting ? "Saving..." : "Save Skill"}
        </Button>
      </div>
    </form>
  );
}
