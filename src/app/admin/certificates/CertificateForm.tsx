"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createCertificate, updateCertificate } from "@/actions/certificateActions";
import { toast } from "sonner";

export default function CertificateForm({ initialData, onSuccess }: { initialData?: any; onSuccess: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      
      if (initialData) {
        await updateCertificate(initialData._id, formData);
        toast.success("Certificate updated successfully");
      } else {
        await createCertificate(formData);
        toast.success("Certificate created successfully");
      }
      
      onSuccess();
    } catch (error) {
      toast.error("An error occurred while saving the certificate");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title" className="text-zinc-300">Certificate Title</Label>
          <Input 
            id="title" 
            name="title" 
            required 
            placeholder="e.g. AWS Certified Solutions Architect"
            defaultValue={initialData?.title} 
            className="bg-white/5 border-white/10 text-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="issuer" className="text-zinc-300">Issuer</Label>
          <Input 
            id="issuer" 
            name="issuer" 
            required
            placeholder="e.g. Amazon Web Services"
            defaultValue={initialData?.issuer} 
            className="bg-white/5 border-white/10 text-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="date" className="text-zinc-300">Date/Year</Label>
          <Input 
            id="date" 
            name="date" 
            required 
            placeholder="e.g. 2023"
            defaultValue={initialData?.date} 
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

      <div className="space-y-2">
        <Label htmlFor="link" className="text-zinc-300">Verification Link</Label>
        <Input 
          id="link" 
          name="link" 
          placeholder="https://..."
          defaultValue={initialData?.link} 
          className="bg-white/5 border-white/10 text-white"
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
          {isSubmitting ? "Saving..." : "Save Certificate"}
        </Button>
      </div>
    </form>
  );
}
