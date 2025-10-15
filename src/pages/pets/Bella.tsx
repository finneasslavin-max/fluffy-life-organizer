import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Calendar, Heart, MapPin, Phone, Activity, Pill } from "lucide-react";
import realDog from "@/assets/real-dog.png";
import { useToast } from "@/hooks/use-toast";

export default function Bella() {
  const { toast } = useToast();

  const handleScheduleAppointment = () => {
    toast({
      title: "Schedule Appointment",
      description: "Opening appointment scheduler for Bella...",
    });
  };

  const handleAddMedicalRecord = () => {
    toast({
      title: "Add Medical Record",
      description: "Opening medical record form...",
    });
  };

  const handleUpdateProfile = () => {
    toast({
      title: "Update Profile",
      description: "Opening profile editor...",
    });
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="h-20 w-20">
          <AvatarImage src={realDog} alt="Bella" />
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Bella</h1>
          <p className="text-muted-foreground">Golden Retriever • 3 years old</p>
          <Badge variant="secondary" className="mt-2">Female</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="warm-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Health Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Overall Health</span>
              <Badge variant="default" className="bg-success">Excellent</Badge>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Weight</span>
                <span className="text-sm font-medium">32 kg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Last Checkup</span>
                <span className="text-sm">Dec 15, 2025</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="warm-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-accent" />
              Upcoming Appointments
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <div>
                <p className="font-medium">Vaccination</p>
                <p className="text-sm text-muted-foreground">Dec 30, 2025</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <div className="h-2 w-2 rounded-full bg-accent"></div>
              <div>
                <p className="font-medium">Grooming</p>
                <p className="text-sm text-muted-foreground">Jan 5, 2025</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="warm-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-premium" />
              Grooming Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Brushing</span>
                <span className="text-sm">85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Nail Trimming</span>
                <span className="text-sm">60%</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="warm-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Pill className="h-5 w-5 text-warning" />
              Medications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-warning/10 rounded-lg border border-warning/20">
              <p className="font-medium">Heartworm Prevention</p>
              <p className="text-sm text-muted-foreground">Monthly • Next: Jan 1</p>
            </div>
            <div className="p-3 bg-success/10 rounded-lg border border-success/20">
              <p className="font-medium">Flea & Tick</p>
              <p className="text-sm text-muted-foreground">Monthly • Next: Jan 8</p>
            </div>
          </CardContent>
        </Card>

        <Card className="warm-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-destructive" />
              Emergency Contacts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="font-medium">Dr. Johnson's Clinic</p>
                <p className="text-sm text-muted-foreground">(555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="font-medium">Emergency Vet</p>
                <p className="text-sm text-muted-foreground">(555) 999-0000</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="warm-glow">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full" variant="default" onClick={handleScheduleAppointment}>
              Schedule Appointment
            </Button>
            <Button className="w-full" variant="outline" onClick={handleAddMedicalRecord}>
              Add Medical Record
            </Button>
            <Button className="w-full" variant="outline" onClick={handleUpdateProfile}>
              Update Profile
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}