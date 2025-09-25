import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, MapPin, Phone, Star, Clock, Stethoscope } from "lucide-react";
import vetDog from "@/assets/vet-dog.png";

export default function Vets() {
  const vets = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "General Practice",
      rating: 4.8,
      reviews: 124,
      phone: "(555) 123-4567",
      address: "123 Pet Care St, Petville",
      hours: "Mon-Fri 8AM-6PM",
      emergency: true,
      distance: "0.8 miles"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Exotic Animals",
      rating: 4.9,
      reviews: 89,
      phone: "(555) 234-5678",
      address: "456 Animal Ave, Petville",
      hours: "Mon-Sat 9AM-7PM",
      emergency: false,
      distance: "1.2 miles"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Emergency Care",
      rating: 4.7,
      reviews: 156,
      phone: "(555) 999-0000",
      address: "789 Emergency Blvd, Petville",
      hours: "24/7",
      emergency: true,
      distance: "2.1 miles"
    },
  ];

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Veterinarians</h1>
          <p className="text-muted-foreground">Find trusted veterinary care for your pets</p>
        </div>
        <Button className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          Book Appointment
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="warm-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-primary" />
              Quick Stats
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Nearest Vet</span>
              <Badge variant="outline">0.8 miles</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>Emergency Care</span>
              <Badge className="bg-destructive">24/7 Available</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>Avg Rating</span>
              <Badge className="bg-warning">4.8 ⭐</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="warm-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-accent" />
              Next Appointments
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <div>
                <p className="font-medium">Bella - Dr. Johnson</p>
                <p className="text-sm text-muted-foreground">Dec 30, 2024 at 10:00 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <div className="h-2 w-2 rounded-full bg-warning"></div>
              <div>
                <p className="font-medium">Whiskers - Dr. Smith</p>
                <p className="text-sm text-muted-foreground">Jan 12, 2025 at 2:00 PM</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="warm-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-destructive" />
              Emergency Contacts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-destructive/10 rounded-lg border border-destructive/20">
              <p className="font-medium text-destructive">24/7 Emergency</p>
              <p className="text-sm">(555) 999-0000</p>
            </div>
            <div className="p-3 bg-warning/10 rounded-lg border border-warning/20">
              <p className="font-medium text-warning">Poison Control</p>
              <p className="text-sm">(555) 888-7777</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Nearby Veterinarians</h2>
        <div className="grid gap-4">
          {vets.map((vet) => (
            <Card key={vet.id} className="warm-glow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={vetDog} alt={vet.name} />
                    <AvatarFallback>{vet.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{vet.name}</h3>
                        <p className="text-muted-foreground">{vet.specialty}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-warning text-warning" />
                            <span className="text-sm font-medium">{vet.rating}</span>
                            <span className="text-sm text-muted-foreground">({vet.reviews} reviews)</span>
                          </div>
                          {vet.emergency && (
                            <Badge className="bg-destructive">24/7 Emergency</Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm">
                          <Calendar className="h-4 w-4 mr-2" />
                          Book
                        </Button>
                        <Button size="sm" variant="outline">
                          <Phone className="h-4 w-4 mr-2" />
                          Call
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>{vet.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{vet.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{vet.hours}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 pt-2 border-t">
                      <Badge variant="outline">{vet.distance}</Badge>
                      <span className="text-sm text-muted-foreground">
                        Available for online consultations
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}