import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, Download, Heart, Plus, Share2 } from "lucide-react";
import realDog from "@/assets/real-dog.png";
import realCat from "@/assets/real-cat.png";
import realRabbit from "@/assets/real-rabbit.png";
import groomingCat from "@/assets/grooming-cat.png";
import vetDog from "@/assets/vet-dog.png";

export default function Gallery() {
  const photos = [
    { id: 1, src: realDog, alt: "Bella playing in the park", pet: "Bella", date: "Dec 20, 2024", likes: 12 },
    { id: 2, src: realCat, alt: "Whiskers sleeping", pet: "Whiskers", date: "Dec 18, 2024", likes: 8 },
    { id: 3, src: realRabbit, alt: "Snowball eating hay", pet: "Snowball", date: "Dec 15, 2024", likes: 15 },
    { id: 4, src: groomingCat, alt: "Whiskers after grooming", pet: "Whiskers", date: "Dec 10, 2024", likes: 6 },
    { id: 5, src: vetDog, alt: "Bella at the vet", pet: "Bella", date: "Dec 8, 2024", likes: 4 },
    { id: 6, src: realDog, alt: "Bella's training session", pet: "Bella", date: "Dec 5, 2024", likes: 9 },
  ];

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Pet Photo Gallery</h1>
          <p className="text-muted-foreground">Capture and share your favorite pet moments</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Photo
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="warm-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="h-5 w-5 text-primary" />
              Recent Photos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-2">
              {photos.slice(0, 6).map((photo) => (
                <div key={photo.id} className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src={photo.src} 
                    alt={photo.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                  />
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">View All Photos</Button>
          </CardContent>
        </Card>

        <Card className="warm-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-destructive" />
              Most Loved
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src={realRabbit} 
                  alt="Snowball eating hay"
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-destructive">15 ❤️</Badge>
                </div>
              </div>
              <div>
                <p className="font-medium">Snowball eating hay</p>
                <p className="text-sm text-muted-foreground">Dec 15, 2024</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="warm-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Share2 className="h-5 w-5 text-accent" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full flex items-center gap-2">
              <Camera className="h-4 w-4" />
              Take Photo
            </Button>
            <Button variant="outline" className="w-full flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Upload Photo
            </Button>
            <Button variant="outline" className="w-full flex items-center gap-2">
              <Share2 className="h-4 w-4" />
              Create Album
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <Card key={photo.id} className="warm-glow overflow-hidden group">
            <div className="relative">
              <img 
                src={photo.src} 
                alt={photo.alt}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex gap-2">
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="absolute top-2 left-2">
                <Badge variant="secondary">{photo.pet}</Badge>
              </div>
              <div className="absolute top-2 right-2">
                <Badge className="bg-destructive">{photo.likes} ❤️</Badge>
              </div>
            </div>
            <CardContent className="p-3">
              <p className="font-medium text-sm mb-1">{photo.alt}</p>
              <p className="text-xs text-muted-foreground">{photo.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}