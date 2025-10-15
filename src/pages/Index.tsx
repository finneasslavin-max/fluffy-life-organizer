import { useState, useEffect } from "react";
import { PetCard } from "@/components/PetCard";
import { TaskCard } from "@/components/TaskCard";
import { AddPetDialog } from "@/components/AddPetDialog";
import { AddTaskDialog } from "@/components/AddTaskDialog";
import { AIChat } from "@/components/AIChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Heart, Scissors, Star, Bell, Plus, User, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import cozyBanner from "@/assets/cozy-banner.png";
import cozyDog from "@/assets/cozy-dog.png";
import cozyCat from "@/assets/cozy-cat.png";
import realDog from "@/assets/real-dog.png";
import realCat from "@/assets/real-cat.png";
import realRabbit from "@/assets/real-rabbit.png";
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
      nextAppointment: "Dec 15, 2025",
      groomingProgress: 75,
      healthScore: 92
    },
    {
      id: "2", 
      name: "Max",
      type: "dog" as const,
      breed: "Golden Retriever",
      age: 5,
      nextAppointment: "Dec 12, 2025",
      groomingProgress: 40,
      healthScore: 88
    },
    {
      id: "3",
      name: "Snowball",
      type: "rabbit" as const,
      breed: "Holland Lop",
      age: 2,
      nextAppointment: "Dec 20, 2025",
      groomingProgress: 90,
      healthScore: 95
    }
  ]);

  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Vet Checkup",
      description: "Annual health examination",
      type: "appointment" as const,
      dueDate: "2025-12-15",
      completed: false,
      priority: "high" as const,
      petName: "Luna"
    },
    {
      id: "2",
      title: "Nail Trimming",
      description: "Monthly nail care",
      type: "grooming" as const,
      dueDate: "2025-12-10",
      completed: true,
      priority: "medium" as const,
      petName: "Max"
    },
    {
      id: "3",
      title: "Exercise Session",
      description: "30-minute walk in the park",
      type: "exercise" as const,
      dueDate: "2025-12-09",
      completed: false,
      priority: "medium" as const,
      petName: "Max"
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


  const upcomingTasks = tasks.filter(task => !task.completed).slice(0, 5);
  const completedToday = tasks.filter(task => task.completed).length;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          {/* Hero Banner */}
          <div className="relative overflow-hidden rounded-3xl mb-8 cozy-gradient warm-glow p-10 border-2 border-accent/20">
            <div className="absolute right-4 top-4 opacity-30">
              <img src={cozyDog} alt="Cozy dog" className="h-20 w-20 rounded-full shadow-lg" />
            </div>
            <div className="absolute right-20 bottom-4 opacity-25">
              <img src={cozyCat} alt="Cozy cat" className="h-16 w-16 rounded-full shadow-lg" />
            </div>
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-4">
                  <img src={realDog} alt="Real dog" className="w-16 h-16 rounded-full shadow-lg" />
                  <img src={realCat} alt="Real cat" className="w-16 h-16 rounded-full shadow-lg" />
                  <img src={realRabbit} alt="Real rabbit" className="w-16 h-16 rounded-full shadow-lg" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent mb-3">
                    Pet Care Planner 🐾
                  </h1>
                  <p className="text-xl text-muted-foreground font-medium">
                    Keep your furry friends happy and healthy ✨
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Link to="/about">
                  <Button variant="outline" className="gap-2">
                    <User className="h-4 w-4" />
                    About
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="gap-2">
                    <Phone className="h-4 w-4" />
                    Contact
                  </Button>
                </Link>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="warm-glow border-2 border-success/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-success/20 to-success/10 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Total Pets</p>
                    <p className="text-3xl font-bold text-foreground">{pets.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="warm-glow border-2 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <CalendarDays className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Upcoming Tasks</p>
                    <p className="text-3xl font-bold text-foreground">{upcomingTasks.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="warm-glow border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                    <Scissors className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Completed Today</p>
                    <p className="text-3xl font-bold text-foreground">{completedToday}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="pets" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="pets">My Pets</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="tasks">All Tasks</TabsTrigger>
            <TabsTrigger value="ai">AI Assistant</TabsTrigger>
          </TabsList>

          <TabsContent value="pets">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Your Pet Family</h2>
              </div>
              {pets.length === 0 ? (
                <Card className="p-8 text-center relative overflow-hidden warm-glow border-2 border-accent/20">
                  <div className="absolute top-4 right-4 opacity-30">
                    <img src={realCat} alt="Real cat" className="w-16 h-16 rounded-full shadow-lg" />
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
                <Card className="p-8 text-center relative overflow-hidden warm-glow border-2 border-primary/20">
                  <div className="absolute top-4 right-4 opacity-30">
                    <img src={realDog} alt="Real vet dog" className="w-16 h-16 rounded-full shadow-lg" />
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
                <Card className="p-8 text-center relative overflow-hidden warm-glow border-2 border-success/20">
                  <div className="absolute top-4 right-4 opacity-30">
                    <img src={realRabbit} alt="Real rabbit" className="w-16 h-16 rounded-full shadow-lg" />
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

          <TabsContent value="ai">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">AI Pet Care Assistant</h2>
              <AIChat />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
