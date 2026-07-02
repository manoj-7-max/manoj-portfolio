"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createTestimonial, updateTestimonial } from "@/actions/testimonialActions";
import { toast } from "sonner";

export default function TestimonialForm({ initialData, onSuccess }: { initialData?: any; onSuccess: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      
      if (initialData) {
        await updateTestimonial(initialData._id, formData);
        toast.success("Testimonial updated successfully");
      } else {
        await createTestimonial(formData);
        toast.success("Testimonial created successfully");
      }
      
      onSuccess();
    } catch (error) {
      toast.error("An error occurred while saving the testimonial");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-zinc-300">Name</Label>
          <Input 
            id="name" 
            name="name" 
            required 
            placeholder="e.g. John Doe"
            defaultValue={initialData?.name} 
            className="bg-white/5 border-white/10 text-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="role" className="text-zinc-300">Role / Company</Label>
          <Input 
            id="role" 
            name="role" 
            required
            placeholder="e.g. CEO at Tech Corp"
            defaultValue={initialData?.role} 
            className="bg-white/5 border-white/10 text-white"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="content" className="text-zinc-300">Testimonial Content</Label>
        <Textarea 
          id="content" 
          name="content" 
          required 
          defaultValue={initialData?.content} 
          className="bg-white/5 border-white/10 text-white min-h-[100px]"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="avatar" className="text-zinc-300">Avatar URL</Label>
          <Input 
            id="avatar" 
            name="avatar" 
            placeholder="https://..."
            defaultValue={initialData?.avatar} 
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
          {isSubmitting ? "Saving..." : "Save Testimonial"}
        </Button>
      </div>
    </form>
  );
}
