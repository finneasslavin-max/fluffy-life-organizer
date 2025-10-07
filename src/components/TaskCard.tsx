import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, Clock, Bell, Star, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Task {
  id: string;
  title: string;
  description?: string;
  type: "appointment" | "grooming" | "medication" | "exercise" | "feeding";
  dueDate: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  petName: string;
}

interface TaskCardProps {
  task: Task;
  onToggleComplete?: (taskId: string) => void;
  onEdit?: (task: Task) => void;
}

const taskIcons: Record<string, LucideIcon | string> = {
  appointment: Calendar,
  grooming: "✂️",
  medication: "💊",
  exercise: "🏃",
  feeding: "🍽️"
};

const priorityColors = {
  low: "bg-success/10 text-success border-success/20",
  medium: "bg-warning/10 text-warning border-warning/20", 
  high: "bg-destructive/10 text-destructive border-destructive/20"
};

export function TaskCard({ task, onToggleComplete, onEdit }: TaskCardProps) {
  const iconValue = taskIcons[task.type];
  const IconComponent = typeof iconValue === "string" ? null : iconValue as LucideIcon;
  
  return (
    <Card className={cn(
      "p-4 transition-all duration-300 hover:shadow-md",
      task.completed && "opacity-60 bg-muted/30"
    )}>
      <div className="flex items-start gap-3">
        <Checkbox 
          checked={task.completed}
          onCheckedChange={() => onToggleComplete?.(task.id)}
          className="mt-1"
        />
        
        <div className="flex-1 space-y-2">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
               {IconComponent ? <IconComponent className="h-4 w-4 text-primary" /> : 
                <span className="text-sm">{iconValue as string}</span>}
              <h4 className={cn(
                "font-medium",
                task.completed && "line-through text-muted-foreground"
              )}>
                {task.title}
              </h4>
            </div>
            <Badge className={priorityColors[task.priority]} variant="outline">
              {task.priority}
            </Badge>
          </div>

          {task.description && (
            <p className="text-sm text-muted-foreground">{task.description}</p>
          )}

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {task.dueDate}
              </div>
              <span>for {task.petName}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Bell className="h-3 w-3" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => onEdit?.(task)}
              >
                Edit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}