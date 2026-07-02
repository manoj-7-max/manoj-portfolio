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
import { deleteProject } from "@/actions/projectActions";
import ProjectForm from "./ProjectForm";
import { toast } from "sonner";

export default function ProjectClientView({ initialProjects }: { initialProjects: any[] }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<any>(null);

  const handleEdit = (project: any) => {
    setEditingProject(project);
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      try {
        await deleteProject(id);
        toast.success("Project deleted successfully");
      } catch (error) {
        toast.error("Failed to delete project");
      }
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) setEditingProject(null);
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">All Projects</h2>
        <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
          <DialogTrigger render={<Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2" />}>
            <Plus className="w-4 h-4" /> Add Project
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] bg-black/90 border-white/10 text-white max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">
                {editingProject ? "Edit Project" : "Add New Project"}
              </DialogTitle>
            </DialogHeader>
            <ProjectForm 
              initialData={editingProject} 
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
              <TableHead className="text-zinc-400">Title</TableHead>
              <TableHead className="text-zinc-400">Category</TableHead>
              <TableHead className="text-zinc-400 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {initialProjects.length === 0 && (
              <TableRow className="border-white/10">
                <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                  No projects found. Add one to get started.
                </TableCell>
              </TableRow>
            )}
            {initialProjects.map((project) => (
              <TableRow key={project._id} className="border-white/10 hover:bg-white/5">
                <TableCell className="font-medium text-white">{project.order || 0}</TableCell>
                <TableCell className="text-zinc-300">{project.title}</TableCell>
                <TableCell className="text-zinc-300">{project.category}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="hover:bg-primary/20 hover:text-primary transition-colors text-zinc-400"
                      onClick={() => handleEdit(project)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="hover:bg-red-500/20 hover:text-red-500 transition-colors text-zinc-400"
                      onClick={() => handleDelete(project._id)}
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
