import { useState, useEffect } from "react";
import { PetCard } from "@/components/PetCard";
import { TaskCard } from "@/components/TaskCard";
import { PremiumBanner } from "@/components/PremiumBanner";
import { AddPetDialog } from "@/components/AddPetDialog";
import { AddTaskDialog } from "@/components/AddTaskDialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Heart, Scissors, Star, Bell, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import petsBanner from "@/assets/pets-banner.png";
import heroDog from "@/assets/hero-dog.png";
import heroCat from "@/assets/hero-cat.png";
import heroRabbit from "@/assets/hero-rabbit.png";
import groomingCat from "@/assets/grooming-cat.png";
import vetDog from "@/assets/vet-dog.png";

const Index = () => {
  const { toast } = useToast();
  const [pets, setPets] = useState([
    {
      id: "1",
      name: "Luna",
      type: "cat" as const,
      breed: "Maine Coon",
      age: 3,
      nextAppointment: "Dec 15, 2024",
      groomingProgress: 75,
      healthScore: 92
    },
    {
      id: "2", 
      name: "Max",
      type: "dog" as const,
      breed: "Golden Retriever",
      age: 5,
      nextAppointment: "Dec 12, 2024",
      groomingProgress: 40,
      healthScore: 88
    }
  ]);

  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Vet Checkup",
      description: "Annual health examination",
      type: "appointment" as const,
      dueDate: "2024-12-15",
      completed: false,
      priority: "high" as const,
      petName: "Luna"
    },
    {
      id: "2",
      title: "Nail Trimming",
      description: "Monthly nail care",
      type: "grooming" as const,
      dueDate: "2024-12-10",
      completed: true,
      priority: "medium" as const,
      petName: "Max"
    },
    {
      id: "3",
      title: "Exercise Session",
      description: "30-minute walk in the park",
      type: "exercise" as const,
      dueDate: "2024-12-09",
      completed: false,
      priority: "medium" as const,
      petName: "Max",
      isPremium: true
    }
  ]);

  const handleAddPet = (newPet: any) => {
    setPets(prev => [...prev, newPet]);
    toast({
      title: "Pet Added! 🎉",
      description: `${newPet.name} has been added to your pet family.`
    });
  };

  const handleAddTask = (newTask: any) => {
    setTasks(prev => [...prev, newTask]);
    toast({
      title: "Task Created! ✅",
      description: `New task "${newTask.title}" has been added.`
    });
  };

  const handleToggleTask = (taskId: string) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId 
        ? { ...task, completed: !task.completed }
        : task
    ));
    const task = tasks.find(t => t.id === taskId);
    toast({
      title: task?.completed ? "Task Reopened" : "Task Completed! 🎉",
      description: task?.completed 
        ? `"${task.title}" has been marked as incomplete.`
        : `"${task?.title}" has been completed.`
    });
  };

  const handleUpgrade = () => {
    toast({
      title: "Premium Features Coming Soon! ⭐",
      description: "Connect to Supabase to enable payment processing and premium features."
    });
  };

  const upcomingTasks = tasks.filter(task => !task.completed).slice(0, 5);
  const completedToday = tasks.filter(task => task.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          {/* Hero Banner */}
          <div className="relative overflow-hidden rounded-2xl mb-6 bg-gradient-to-r from-primary/10 to-accent/10 p-8">
            <div className="absolute right-0 top-0 opacity-20">
              <img src={petsBanner} alt="Pets banner" className="h-40 w-auto object-cover" />
            </div>
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <img src={heroDog} alt="Dog" className="w-16 h-16 rounded-full" />
                  <img src={heroCat} alt="Cat" className="w-16 h-16 rounded-full" />
                  <img src={heroRabbit} alt="Rabbit" className="w-16 h-16 rounded-full" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">
                    Pet Care Planner 🐾
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    Keep your furry friends happy and healthy
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <AddTaskDialog 
                  pets={pets}
                  onAddTask={handleAddTask}
                  trigger={
                    <Button variant="outline">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Task
                    </Button>
                  }
                />
                <AddPetDialog onAddPet={handleAddPet} />
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Heart className="h-8 w-8 text-success" />
                  <div>
                    <p className="text-sm text-muted-foreground">Total Pets</p>
                    <p className="text-2xl font-bold">{pets.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <CalendarDays className="h-8 w-8 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Upcoming Tasks</p>
                    <p className="text-2xl font-bold">{upcomingTasks.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Scissors className="h-8 w-8 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Completed Today</p>
                    <p className="text-2xl font-bold">{completedToday}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Star className="h-8 w-8 text-premium" />
                  <div>
                    <p className="text-sm text-muted-foreground">Premium</p>
                    <Badge variant="outline" className="text-premium border-premium">
                      Upgrade
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <PremiumBanner onUpgrade={handleUpgrade} />
        </div>

        {/* Main Content */}
        <Tabs defaultValue="pets" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="pets">My Pets</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="tasks">All Tasks</TabsTrigger>
          </TabsList>

          <TabsContent value="pets">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Your Pet Family</h2>
              </div>
              {pets.length === 0 ? (
                <Card className="p-8 text-center relative overflow-hidden">
                  <div className="absolute top-4 right-4 opacity-30">
                    <img src={heroCat} alt="Cat" className="w-16 h-16" />
                  </div>
                  <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No pets yet</h3>
                  <p className="text-muted-foreground mb-4">Add your first pet to get started!</p>
                  <AddPetDialog onAddPet={handleAddPet} />
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pets.map(pet => (
                    <PetCard key={pet.id} pet={pet} />
                  ))}
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="schedule">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Upcoming Schedule</h2>
              {upcomingTasks.length === 0 ? (
                <Card className="p-8 text-center relative overflow-hidden">
                  <div className="absolute top-4 right-4 opacity-30">
                    <img src={vetDog} alt="Vet checkup" className="w-16 h-16" />
                  </div>
                  <CalendarDays className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No upcoming tasks</h3>
                  <p className="text-muted-foreground mb-4">You're all caught up!</p>
                </Card>
              ) : (
                <div className="space-y-4">
                  {upcomingTasks.map(task => (
                    <TaskCard 
                      key={task.id} 
                      task={task} 
                      onToggleComplete={handleToggleTask}
                    />
                  ))}
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="tasks">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">All Tasks</h2>
                <AddTaskDialog pets={pets} onAddTask={handleAddTask} />
              </div>
              {tasks.length === 0 ? (
                <Card className="p-8 text-center relative overflow-hidden">
                  <div className="absolute top-4 right-4 opacity-30">
                    <img src={groomingCat} alt="Pet grooming" className="w-16 h-16" />
                  </div>
                  <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No tasks yet</h3>
                  <p className="text-muted-foreground mb-4">Create your first task to get organized!</p>
                  <AddTaskDialog pets={pets} onAddTask={handleAddTask} />
                </Card>
              ) : (
                <div className="space-y-4">
                  {tasks.map(task => (
                    <TaskCard 
                      key={task.id} 
                      task={task} 
                      onToggleComplete={handleToggleTask}
                    />
                  ))}
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
