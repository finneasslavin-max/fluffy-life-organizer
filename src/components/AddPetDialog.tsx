import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus } from "lucide-react";

interface AddPetDialogProps {
  onAddPet?: (pet: any) => void;
}

export function AddPetDialog({ onAddPet }: AddPetDialogProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    breed: "",
    age: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.type) {
      onAddPet?.({
        id: Date.now().toString(),
        name: formData.name,
        type: formData.type,
        breed: formData.breed || undefined,
        age: formData.age ? parseInt(formData.age) : undefined,
        groomingProgress: 0,
        healthScore: 85
      });
      setFormData({ name: "", type: "", breed: "", age: "" });
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Add New Pet
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Pet</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Pet Name</Label>
            <Input
              id="name"
              placeholder="Enter pet name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">Pet Type</Label>
            <Select 
              value={formData.type} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, type: value }))}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select pet type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cat">🐱 Cat</SelectItem>
                <SelectItem value="dog">🐶 Dog</SelectItem>
                <SelectItem value="rabbit">🐰 Rabbit</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="breed">Breed (Optional)</Label>
            <Input
              id="breed"
              placeholder="Enter breed"
              value={formData.breed}
              onChange={(e) => setFormData(prev => ({ ...prev, breed: e.target.value }))}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="age">Age (Optional)</Label>
            <Input
              id="age"
              type="number"
              placeholder="Enter age in years"
              value={formData.age}
              onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              Add Pet
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}