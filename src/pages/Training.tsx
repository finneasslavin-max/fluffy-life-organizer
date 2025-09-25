import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, BookOpen, GraduationCap, Play, Star, Target } from "lucide-react";

export default function Training() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Training Center</h1>
          <p className="text-muted-foreground">Build stronger bonds through positive training</p>
        </div>
        <Button className="flex items-center gap-2">
          <Play className="h-4 w-4" />
          Start Session
        </Button>
      </div>

      <Tabs defaultValue="progress" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="lessons">Lessons</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="progress" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="warm-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Bella's Training
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Basic Commands</span>
                    <span className="text-sm">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Leash Training</span>
                    <span className="text-sm">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Tricks</span>
                    <span className="text-sm">60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <Badge className="w-full justify-center bg-success">Advanced Level</Badge>
              </CardContent>
            </Card>

            <Card className="warm-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-accent" />
                  Whiskers' Training
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Litter Training</span>
                    <span className="text-sm">100%</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Scratching Post</span>
                    <span className="text-sm">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">No Counters</span>
                    <span className="text-sm">40%</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
                <Badge className="w-full justify-center bg-warning">Intermediate</Badge>
              </CardContent>
            </Card>

            <Card className="warm-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-premium" />
                  Snowball's Training
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Litter Training</span>
                    <span className="text-sm">95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Come When Called</span>
                    <span className="text-sm">70%</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Handling</span>
                    <span className="text-sm">80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <Badge className="w-full justify-center bg-primary">Beginner</Badge>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="lessons" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="warm-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Dog Training Lessons
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Sit Command</h4>
                    <Badge className="bg-success">Completed</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Basic obedience command that forms the foundation for other training.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">Review Lesson</Button>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Stay Command</h4>
                    <Badge variant="outline">In Progress</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Teach your dog to remain in position until released.
                  </p>
                  <Button size="sm" className="w-full">Continue Lesson</Button>
                </div>
                <div className="p-4 border rounded-lg opacity-50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Down Command</h4>
                    <Badge variant="secondary">Locked</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Advanced command building on sit and stay foundations.
                  </p>
                  <Button variant="ghost" size="sm" className="w-full" disabled>
                    Complete Stay First
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="warm-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-accent" />
                  Cat Behavior Training
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Litter Box Mastery</h4>
                    <Badge className="bg-success">Completed</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Ensure consistent and proper litter box usage.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">Review Tips</Button>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Scratching Post Training</h4>
                    <Badge variant="outline">In Progress</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Redirect scratching behavior to appropriate surfaces.
                  </p>
                  <Button size="sm" className="w-full">Continue Training</Button>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Counter Surfing Prevention</h4>
                    <Badge className="bg-warning">Needs Work</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Keep your cat off counters and tables safely.
                  </p>
                  <Button size="sm" className="w-full">Start Lesson</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="warm-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-warning" />
                  Bella's Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
                  <Star className="h-6 w-6 text-success" />
                  <div>
                    <p className="font-medium">Good Boy Gold</p>
                    <p className="text-sm text-muted-foreground">Mastered sit command</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium">Basic Graduate</p>
                    <p className="text-sm text-muted-foreground">Completed basic training</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="warm-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-warning" />
                  Whiskers' Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
                  <Star className="h-6 w-6 text-success" />
                  <div>
                    <p className="font-medium">Litter Champion</p>
                    <p className="text-sm text-muted-foreground">Perfect litter box usage</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg">
                  <Target className="h-6 w-6 text-accent" />
                  <div>
                    <p className="font-medium">Scratch Master</p>
                    <p className="text-sm text-muted-foreground">Uses scratching post consistently</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="warm-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-warning" />
                  Snowball's Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-premium/10 rounded-lg">
                  <Star className="h-6 w-6 text-premium" />
                  <div>
                    <p className="font-medium">Quick Learner</p>
                    <p className="text-sm text-muted-foreground">Fast progress in training</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg opacity-50">
                  <div className="h-6 w-6 rounded-full bg-muted-foreground/20"></div>
                  <div>
                    <p className="font-medium text-muted-foreground">More to come...</p>
                    <p className="text-sm text-muted-foreground">Keep training!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}