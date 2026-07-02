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
import { deleteCertificate } from "@/actions/certificateActions";
import CertificateForm from "./CertificateForm";
import { toast } from "sonner";

export default function CertificateClientView({ initialCertificates }: { initialCertificates: any[] }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCertificate, setEditingCertificate] = useState<any>(null);

  const handleEdit = (certificate: any) => {
    setEditingCertificate(certificate);
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this certificate?")) {
      try {
        await deleteCertificate(id);
        toast.success("Certificate deleted successfully");
      } catch (error) {
        toast.error("Failed to delete certificate");
      }
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) setEditingCertificate(null);
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">All Certificates</h2>
        <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
          <DialogTrigger render={<Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2" />}>
            <Plus className="w-4 h-4" /> Add Certificate
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] bg-black/90 border-white/10 text-white">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">
                {editingCertificate ? "Edit Certificate" : "Add New Certificate"}
              </DialogTitle>
            </DialogHeader>
            <CertificateForm 
              initialData={editingCertificate} 
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
              <TableHead className="text-zinc-400">Issuer</TableHead>
              <TableHead className="text-zinc-400">Date</TableHead>
              <TableHead className="text-zinc-400 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {initialCertificates.length === 0 && (
              <TableRow className="border-white/10">
                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                  No certificates found. Add one to get started.
                </TableCell>
              </TableRow>
            )}
            {initialCertificates.map((cert) => (
              <TableRow key={cert._id} className="border-white/10 hover:bg-white/5">
                <TableCell className="font-medium text-white">{cert.order || 0}</TableCell>
                <TableCell className="text-zinc-300">{cert.title}</TableCell>
                <TableCell className="text-zinc-300">{cert.issuer}</TableCell>
                <TableCell className="text-zinc-300">{cert.date}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="hover:bg-primary/20 hover:text-primary transition-colors text-zinc-400"
                      onClick={() => handleEdit(cert)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="hover:bg-red-500/20 hover:text-red-500 transition-colors text-zinc-400"
                      onClick={() => handleDelete(cert._id)}
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
