import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Calendar, FileText, Plus, Stethoscope, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Health() {
  const { toast } = useToast();

  const handleAddRecord = () => {
    toast({
      title: "Add Health Record",
      description: "Opening health record form...",
    });
  };

  const handleViewDetails = () => {
    toast({
      title: "View Details",
      description: "Opening detailed health record...",
    });
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Health Records</h1>
          <p className="text-muted-foreground">Track and manage your pets' health information</p>
        </div>
        <Button className="flex items-center gap-2" onClick={handleAddRecord}>
          <Plus className="h-4 w-4" />
          Add Record
        </Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="vaccinations">Vaccinations</TabsTrigger>
          <TabsTrigger value="checkups">Checkups</TabsTrigger>
          <TabsTrigger value="medications">Medications</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="warm-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-primary" />
                  Bella's Health
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Status</span>
                  <Badge className="bg-success">Excellent</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Last Checkup</span>
                  <span className="text-sm">Dec 15, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Next Due</span>
                  <span className="text-sm">Jun 15, 2025</span>
                </div>
              </CardContent>
            </Card>

            <Card className="warm-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-accent" />
                  Whiskers' Health
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Status</span>
                  <Badge className="bg-warning">Needs Attention</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Last Checkup</span>
                  <span className="text-sm">Nov 20, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Next Due</span>
                  <span className="text-sm">Jan 12, 2025</span>
                </div>
              </CardContent>
            </Card>

            <Card className="warm-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-premium" />
                  Snowball's Health
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Status</span>
                  <Badge className="bg-success">Excellent</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Last Checkup</span>
                  <span className="text-sm">Dec 10, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Next Due</span>
                  <span className="text-sm">May 10, 2025</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="warm-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Recent Health Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Stethoscope className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Bella - Annual Checkup</p>
                  <p className="text-sm text-muted-foreground">Completed on Dec 15, 2025 • All vitals normal</p>
                </div>
                <Badge variant="outline">Completed</Badge>
              </div>
              <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                <div className="h-10 w-10 rounded-full bg-warning/10 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-warning" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Whiskers - Dental Cleaning</p>
                  <p className="text-sm text-muted-foreground">Scheduled for Jan 12, 2025</p>
                </div>
                <Badge variant="secondary">Upcoming</Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vaccinations" className="space-y-6">
          <div className="grid gap-4">
            <Card className="warm-glow">
              <CardHeader>
                <CardTitle>Vaccination Schedule</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium">Bella - Rabies</h4>
                    <p className="text-sm text-muted-foreground">Due: Dec 30, 2025</p>
                    <Badge className="mt-2 bg-warning">Due Soon</Badge>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium">Whiskers - FVRCP</h4>
                    <p className="text-sm text-muted-foreground">Due: Feb 15, 2025</p>
                    <Badge className="mt-2" variant="outline">Scheduled</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="checkups" className="space-y-6">
          <Card className="warm-glow">
            <CardHeader>
              <CardTitle>Checkup History</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <FileText className="h-8 w-8 text-muted-foreground" />
                  <div className="flex-1">
                    <h4 className="font-medium">Bella - Annual Physical</h4>
                    <p className="text-sm text-muted-foreground">Dec 15, 2025 • Dr. Johnson</p>
                    <p className="text-sm">Weight: 32kg, Temperature: Normal, Heart Rate: 80bpm</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={handleViewDetails}>View Details</Button>
                </div>
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <FileText className="h-8 w-8 text-muted-foreground" />
                  <div className="flex-1">
                    <h4 className="font-medium">Whiskers - Routine Checkup</h4>
                    <p className="text-sm text-muted-foreground">Nov 20, 2025 • Dr. Smith</p>
                    <p className="text-sm">Weight: 4.2kg, Temperature: Normal, Dental needs attention</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={handleViewDetails}>View Details</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="medications" className="space-y-6">
          <Card className="warm-glow">
            <CardHeader>
              <CardTitle>Current Medications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="p-4 border rounded-lg bg-warning/5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Bella - Heartworm Prevention</h4>
                      <p className="text-sm text-muted-foreground">Monthly • Next dose: Jan 1, 2025</p>
                    </div>
                    <Badge className="bg-warning">Active</Badge>
                  </div>
                </div>
                <div className="p-4 border rounded-lg bg-success/5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Whiskers - Hairball Prevention</h4>
                      <p className="text-sm text-muted-foreground">Weekly • Next dose: Dec 29, 2025</p>
                    </div>
                    <Badge className="bg-success">Active</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}