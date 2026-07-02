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
import { deleteBlog } from "@/actions/blogActions";
import BlogForm from "./BlogForm";
import { toast } from "sonner";

export default function BlogClientView({ initialBlogs }: { initialBlogs: any[] }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<any>(null);

  const handleEdit = (blog: any) => {
    setEditingBlog(blog);
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      try {
        await deleteBlog(id);
        toast.success("Blog post deleted successfully");
      } catch (error) {
        toast.error("Failed to delete blog post");
      }
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) setEditingBlog(null);
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">All Blog Posts</h2>
        <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
          <DialogTrigger render={<Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2" />}>
            <Plus className="w-4 h-4" /> Add Post
          </DialogTrigger>
          <DialogContent className="sm:max-w-[700px] bg-black/90 border-white/10 text-white max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">
                {editingBlog ? "Edit Blog Post" : "Add New Blog Post"}
              </DialogTitle>
            </DialogHeader>
            <BlogForm 
              initialData={editingBlog} 
              onSuccess={() => setIsDialogOpen(false)} 
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-md border border-white/10">
        <Table>
          <TableHeader className="bg-white/5">
            <TableRow className="border-white/10">
              <TableHead className="text-zinc-400">Title</TableHead>
              <TableHead className="text-zinc-400">Date</TableHead>
              <TableHead className="text-zinc-400">Status</TableHead>
              <TableHead className="text-zinc-400 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {initialBlogs.length === 0 && (
              <TableRow className="border-white/10">
                <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                  No blog posts found. Add one to get started.
                </TableCell>
              </TableRow>
            )}
            {initialBlogs.map((blog) => (
              <TableRow key={blog._id} className="border-white/10 hover:bg-white/5">
                <TableCell className="font-medium text-white">{blog.title}</TableCell>
                <TableCell className="text-zinc-300">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-zinc-300">
                  <span className={`px-2 py-1 rounded text-xs ${blog.published ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                    {blog.published ? 'Published' : 'Draft'}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="hover:bg-primary/20 hover:text-primary transition-colors text-zinc-400"
                      onClick={() => handleEdit(blog)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="hover:bg-red-500/20 hover:text-red-500 transition-colors text-zinc-400"
                      onClick={() => handleDelete(blog._id)}
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
