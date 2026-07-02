"use client";

import React, { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Edit, Trash2, Plus } from "lucide-react";
import { deleteExperience } from "@/actions/experienceActions";
import ExperienceForm from "./ExperienceForm";
import { toast } from "sonner";

export default function ExperienceClientView({ initialExperiences }: { initialExperiences: any[] }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingExperience, setEditingExperience] = useState<any>(null);

  const handleEdit = (experience: any) => {
    setEditingExperience(experience);
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this experience?")) {
      try {
        await deleteExperience(id);
        toast.success("Experience deleted successfully");
      } catch (error) {
        toast.error("Failed to delete experience");
      }
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) setEditingExperience(null);
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">All Experience</h2>
        <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
          <DialogTrigger render={<Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2" />}>
            <Plus className="w-4 h-4" /> Add Experience
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] bg-black/90 border-white/10 text-white">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">
                {editingExperience ? "Edit Experience" : "Add New Experience"}
              </DialogTitle>
            </DialogHeader>
            <ExperienceForm 
              initialData={editingExperience} 
              onSuccess={() => setIsDialogOpen(false)} 
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-md border border-white/10">
        <Table>
          <TableHeader className="bg-white/5">
            <TableRow className="border-white/10">
              <TableHead className="text-zinc-400">Order</TableHead>
              <TableHead className="text-zinc-400">Role</TableHead>
              <TableHead className="text-zinc-400">Company</TableHead>
              <TableHead className="text-zinc-400">Period</TableHead>
              <TableHead className="text-zinc-400 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {initialExperiences.length === 0 && (
              <TableRow className="border-white/10">
                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                  No experience entries found. Add one to get started.
                </TableCell>
              </TableRow>
            )}
            {initialExperiences.map((exp) => (
              <TableRow key={exp._id} className="border-white/10 hover:bg-white/5">
                <TableCell className="font-medium text-white">{exp.order || 0}</TableCell>
                <TableCell className="text-zinc-300">{exp.title}</TableCell>
                <TableCell className="text-zinc-300">{exp.company}</TableCell>
                <TableCell className="text-zinc-300">{exp.startDate} - {exp.endDate}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="hover:bg-primary/20 hover:text-primary transition-colors text-zinc-400"
                      onClick={() => handleEdit(exp)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="hover:bg-red-500/20 hover:text-red-500 transition-colors text-zinc-400"
                      onClick={() => handleDelete(exp._id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
