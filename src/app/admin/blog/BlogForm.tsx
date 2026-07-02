"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createBlog, updateBlog } from "@/actions/blogActions";
import { toast } from "sonner";

export default function BlogForm({ initialData, onSuccess }: { initialData?: any; onSuccess: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      
      if (initialData) {
        await updateBlog(initialData._id, formData);
        toast.success("Blog post updated successfully");
      } else {
        await createBlog(formData);
        toast.success("Blog post created successfully");
      }
      
      onSuccess();
    } catch (error) {
      toast.error("An error occurred while saving the blog post");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div className="space-y-2">
        <Label htmlFor="title" className="text-zinc-300">Post Title</Label>
        <Input 
          id="title" 
          name="title" 
          required 
          placeholder="e.g. How I built my portfolio"
          defaultValue={initialData?.title} 
          className="bg-white/5 border-white/10 text-white"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="excerpt" className="text-zinc-300">Excerpt / Short Description</Label>
        <Textarea 
          id="excerpt" 
          name="excerpt" 
          required 
          defaultValue={initialData?.excerpt} 
          className="bg-white/5 border-white/10 text-white min-h-[80px]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content" className="text-zinc-300">Content (Markdown / HTML)</Label>
        <Textarea 
          id="content" 
          name="content" 
          required 
          defaultValue={initialData?.content} 
          className="bg-white/5 border-white/10 text-white min-h-[200px] font-mono text-sm"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="coverImage" className="text-zinc-300">Cover Image URL</Label>
        <Input 
          id="coverImage" 
          name="coverImage" 
          placeholder="https://..."
          defaultValue={initialData?.coverImage} 
          className="bg-white/5 border-white/10 text-white"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="tags" className="text-zinc-300">Tags (Comma separated)</Label>
        <Input 
          id="tags" 
          name="tags" 
          placeholder="e.g. Next.js, React, UI Design"
          defaultValue={initialData?.tags?.join(", ")} 
          className="bg-white/5 border-white/10 text-white"
        />
      </div>

      <div className="flex items-center space-x-2 pt-2">
        <input 
          type="checkbox" 
          id="published" 
          name="published" 
          defaultChecked={initialData ? initialData.published : true}
          className="w-4 h-4 rounded border-white/10 bg-white/5 text-primary focus:ring-primary focus:ring-offset-0"
        />
        <Label htmlFor="published" className="text-zinc-300 cursor-pointer">Publish immediately</Label>
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
          {isSubmitting ? "Saving..." : "Save Blog Post"}
        </Button>
      </div>
    </form>
  );
}
