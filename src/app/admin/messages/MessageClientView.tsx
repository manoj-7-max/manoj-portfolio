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
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Eye, Trash2, Mail, CheckCircle } from "lucide-react";
import { deleteMessage, markMessageRead } from "@/actions/messageActions";
import { toast } from "sonner";

export default function MessageClientView({ initialMessages }: { initialMessages: any[] }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<any>(null);

  const handleView = async (message: any) => {
    setSelectedMessage(message);
    setIsDialogOpen(true);
    
    // Auto mark as read if it isn't
    if (message.read === false) {
        try {
            await markMessageRead(message._id);
        } catch (e) {
            console.error("Failed to mark as read");
        }
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this message?")) {
      try {
        await deleteMessage(id);
        toast.success("Message deleted successfully");
        if (selectedMessage?._id === id) {
            setIsDialogOpen(false);
        }
      } catch (error) {
        toast.error("Failed to delete message");
      }
    }
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">Inbox</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[600px] bg-black/90 border-white/10 text-white">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" /> Message Details
              </DialogTitle>
            </DialogHeader>
            {selectedMessage && (
              <div className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4 bg-white/5 p-4 rounded-lg border border-white/10">
                  <div>
                    <p className="text-sm text-zinc-400">From</p>
                    <p className="font-medium text-white">{selectedMessage.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Email</p>
                    <p className="font-medium text-white"><a href={`mailto:${selectedMessage.email}`} className="text-primary hover:underline">{selectedMessage.email}</a></p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Date Received</p>
                    <p className="font-medium text-white">{new Date(selectedMessage.createdAt).toLocaleString()}</p>
                  </div>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <p className="text-sm text-zinc-400 mb-2">Message Content</p>
                  <p className="text-white whitespace-pre-wrap">{selectedMessage.message}</p>
                </div>
                <div className="flex justify-end pt-2">
                    <Button 
                      variant="destructive"
                      className="bg-red-500/20 hover:bg-red-500/40 text-red-400 border border-red-500/30"
                      onClick={() => handleDelete(selectedMessage._id)}
                    >
                      <Trash2 className="w-4 h-4 mr-2" /> Delete Message
                    </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-md border border-white/10">
        <Table>
          <TableHeader className="bg-white/5">
            <TableRow className="border-white/10">
              <TableHead className="text-zinc-400 w-[100px]">Status</TableHead>
              <TableHead className="text-zinc-400">Name</TableHead>
              <TableHead className="text-zinc-400">Email</TableHead>
              <TableHead className="text-zinc-400">Date</TableHead>
              <TableHead className="text-zinc-400 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {initialMessages.length === 0 && (
              <TableRow className="border-white/10">
                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                  Your inbox is empty.
                </TableCell>
              </TableRow>
            )}
            {initialMessages.map((msg) => (
              <TableRow key={msg._id} className={`border-white/10 hover:bg-white/5 ${!msg.read ? 'bg-primary/5' : ''}`}>
                <TableCell>
                    {!msg.read ? (
                        <span className="flex items-center gap-1 text-primary text-xs font-semibold bg-primary/20 px-2 py-1 rounded w-fit">
                            New
                        </span>
                    ) : (
                        <span className="flex items-center gap-1 text-zinc-500 text-xs font-medium">
                            <CheckCircle className="w-3 h-3" /> Read
                        </span>
                    )}
                </TableCell>
                <TableCell className={`text-white ${!msg.read ? 'font-semibold' : ''}`}>{msg.name}</TableCell>
                <TableCell className="text-zinc-300">{msg.email}</TableCell>
                <TableCell className="text-zinc-400 text-sm">
                  {new Date(msg.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="hover:bg-primary/20 hover:text-primary transition-colors text-zinc-400"
                      onClick={() => handleView(msg)}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="hover:bg-red-500/20 hover:text-red-500 transition-colors text-zinc-400"
                      onClick={() => handleDelete(msg._id)}
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
