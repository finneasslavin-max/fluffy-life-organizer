import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar, Heart, Scissors, Star, Plus } from "lucide-react";
import groomingCat from "@/assets/grooming-cat.png";
import { useToast } from "@/hooks/use-toast";

export default function Grooming() {
  const { toast } = useToast();

  const handleBookGrooming = () => {
    toast({
      title: "Booking Grooming",
      description: "Opening appointment scheduler...",
    });
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Grooming Center</h1>
          <p className="text-muted-foreground">Keep your pets looking and feeling their best</p>
        </div>
        <Button className="flex items-center gap-2" onClick={handleBookGrooming}>
          <Plus className="h-4 w-4" />
          Book Grooming
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="warm-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              Bella's Progress
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
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Bathing</span>
                <span className="text-sm">90%</span>
              </div>
              <Progress value={90} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="warm-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-accent" />
              Whiskers' Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Brushing</span>
                <span className="text-sm">92%</span>
              </div>
              <Progress value={92} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Nail Trimming</span>
                <span className="text-sm">75%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Dental Care</span>
                <span className="text-sm">45%</span>
              </div>
              <Progress value={45} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="warm-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-premium" />
              Snowball's Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Brushing</span>
                <span className="text-sm">88%</span>
              </div>
              <Progress value={88} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Nail Trimming</span>
                <span className="text-sm">70%</span>
              </div>
              <Progress value={70} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Coat Care</span>
                <span className="text-sm">95%</span>
              </div>
              <Progress value={95} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="warm-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Upcoming Appointments
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Scissors className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Bella - Full Grooming</p>
                <p className="text-sm text-muted-foreground">Jan 5, 2025 at 10:00 AM</p>
                <p className="text-sm">Includes: Bath, brush, nail trim, ear cleaning</p>
              </div>
              <Badge variant="outline">Scheduled</Badge>
            </div>
            <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Scissors className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Whiskers - Basic Grooming</p>
                <p className="text-sm text-muted-foreground">Dec 28, 2025 at 2:00 PM</p>
                <p className="text-sm">Includes: Brush, nail trim, sanitary trim</p>
              </div>
              <Badge variant="outline">Scheduled</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="warm-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-warning" />
              Grooming Tips
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-warning/10 rounded-lg border border-warning/20">
              <h4 className="font-medium mb-2">Daily Brushing</h4>
              <p className="text-sm text-muted-foreground">
                Regular brushing prevents matting and reduces shedding. Spend 5-10 minutes daily brushing your pet's coat.
              </p>
            </div>
            <div className="p-4 bg-success/10 rounded-lg border border-success/20">
              <h4 className="font-medium mb-2">Nail Care</h4>
              <p className="text-sm text-muted-foreground">
                Trim nails every 2-3 weeks. If you hear clicking on hard floors, it's time for a trim!
              </p>
            </div>
            <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
              <h4 className="font-medium mb-2">Ear Cleaning</h4>
              <p className="text-sm text-muted-foreground">
                Check and clean ears weekly to prevent infections. Use pet-safe ear cleaning solutions only.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="warm-glow">
        <CardHeader>
          <CardTitle>Professional Grooming Services</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border rounded-lg hover:bg-muted/50 transition-colors">
              <img src={groomingCat} alt="Basic Grooming" className="w-20 h-20 mx-auto mb-4 rounded-full object-cover" />
              <h4 className="font-medium mb-2">Basic Grooming</h4>
              <p className="text-sm text-muted-foreground mb-4">Bath, brush, nail trim, ear cleaning</p>
              <p className="text-lg font-bold text-primary">$45</p>
              <Button className="mt-4 w-full" variant="outline" onClick={handleBookGrooming}>Book Now</Button>
            </div>
            <div className="text-center p-6 border rounded-lg hover:bg-muted/50 transition-colors">
              <img src={groomingCat} alt="Premium Grooming" className="w-20 h-20 mx-auto mb-4 rounded-full object-cover" />
              <h4 className="font-medium mb-2">Premium Grooming</h4>
              <p className="text-sm text-muted-foreground mb-4">Full service + styling, teeth cleaning</p>
              <p className="text-lg font-bold text-premium">$75</p>
              <Button className="mt-4 w-full" onClick={handleBookGrooming}>Book Now</Button>
            </div>
            <div className="text-center p-6 border rounded-lg hover:bg-muted/50 transition-colors">
              <img src={groomingCat} alt="Deluxe Grooming" className="w-20 h-20 mx-auto mb-4 rounded-full object-cover" />
              <h4 className="font-medium mb-2">Deluxe Spa</h4>
              <p className="text-sm text-muted-foreground mb-4">Premium + massage, aromatherapy</p>
              <p className="text-lg font-bold text-accent">$120</p>
              <Button className="mt-4 w-full" variant="outline" onClick={handleBookGrooming}>Book Now</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}