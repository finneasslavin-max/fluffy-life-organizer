import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar, Scissors, Heart, MoreVertical } from "lucide-react";

interface Pet {
  id: string;
  name: string;
  type: "cat" | "dog" | "rabbit";
  breed?: string;
  age?: number;
  avatar?: string;
  nextAppointment?: string;
  groomingProgress?: number;
  healthScore?: number;
}

interface PetCardProps {
  pet: Pet;
  onSelect?: (pet: Pet) => void;
}

const petEmojis = {
  cat: "🐱",
  dog: "🐶", 
  rabbit: "🐰"
};

const petColors = {
  cat: "bg-accent/20 text-accent-foreground",
  dog: "bg-primary/20 text-primary-foreground",
  rabbit: "bg-success/20 text-success-foreground"
};

export function PetCard({ pet, onSelect }: PetCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 cursor-pointer group"
          onClick={() => onSelect?.(pet)}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl">
            {petEmojis[pet.type]}
          </div>
          <div>
            <h3 className="font-semibold text-lg text-foreground">{pet.name}</h3>
            <p className="text-sm text-muted-foreground capitalize">{pet.breed || pet.type}</p>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className={petColors[pet.type]}>
            {pet.type.toUpperCase()}
          </Badge>
          {pet.age && (
            <span className="text-sm text-muted-foreground">{pet.age} years old</span>
          )}
        </div>

        {pet.nextAppointment && (
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Next: {pet.nextAppointment}</span>
          </div>
        )}

        {pet.groomingProgress !== undefined && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Scissors className="h-4 w-4 text-accent" />
              <span className="text-muted-foreground">Grooming Progress</span>
            </div>
            <Progress value={pet.groomingProgress} className="h-2" />
          </div>
        )}

        {pet.healthScore !== undefined && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Heart className="h-4 w-4 text-success" />
              <span className="text-muted-foreground">Health Score</span>
            </div>
            <Progress value={pet.healthScore} className="h-2" />
          </div>
        )}
      </div>
    </Card>
  );
}