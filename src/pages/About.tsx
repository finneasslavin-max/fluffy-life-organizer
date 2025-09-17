import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Code, Coffee, Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import realDog from "@/assets/real-dog.png";
import realCat from "@/assets/real-cat.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border cozy-gradient backdrop-blur-sm sticky top-0 z-50 warm-glow">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary via-accent to-success flex items-center justify-center shadow-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  About the Creator
                </h1>
                <p className="text-muted-foreground font-medium">Meet Finn Slavin ✨</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <Card className="warm-glow border-2 border-primary/20 cozy-gradient p-12 mb-12 text-center relative overflow-hidden">
            <div className="absolute top-4 right-4 opacity-20">
              <img src={realDog} alt="Cute dog" className="w-20 h-20 rounded-full" />
            </div>
            <div className="absolute bottom-4 left-4 opacity-15">
              <img src={realCat} alt="Cute cat" className="w-16 h-16 rounded-full" />
            </div>
            <div className="relative z-10">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent mb-6">
                Hi, I'm Finn Slavin! 👋
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Passionate developer and pet lover who created this app to help fellow pet parents 
                keep their furry friends happy, healthy, and well-cared for.
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Code className="h-4 w-4 mr-2" />
                  Full Stack Developer
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Heart className="h-4 w-4 mr-2" />
                  Pet Enthusiast
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Coffee className="h-4 w-4 mr-2" />
                  Coffee Lover
                </Badge>
              </div>
            </div>
          </Card>

          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="warm-glow border-2 border-accent/20 p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Star className="h-6 w-6 text-accent" />
                My Story
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a lifelong pet owner, I understand the challenges of keeping track of vet appointments, 
                grooming schedules, and daily care routines. After struggling with scattered notes and 
                missed appointments, I decided to build the solution I wished existed.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Pet Care Planner was born from my love for both technology and animals, combining 
                intuitive design with practical functionality to make pet care easier for everyone.
              </p>
            </Card>

            <Card className="warm-glow border-2 border-success/20 p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Heart className="h-6 w-6 text-success" />
                My Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To create tools that strengthen the bond between pets and their humans by making 
                care management simple, enjoyable, and stress-free.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every feature is designed with real pet parents in mind, because our furry friends 
                deserve the best care possible - and you deserve peace of mind knowing everything 
                is organized and on track.
              </p>
            </Card>
          </div>

          {/* Values Section */}
          <Card className="warm-glow border-2 border-premium/20 cozy-gradient p-10">
            <h3 className="text-3xl font-bold text-center text-foreground mb-8">
              Why I Built This 💝
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Love for Pets</h4>
                <p className="text-muted-foreground">Every pet deserves the best care, and every owner deserves tools that make it easier.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                  <Code className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Clean Code</h4>
                <p className="text-muted-foreground">Built with modern technologies and best practices for a smooth, reliable experience.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-success/20 to-success/10 flex items-center justify-center">
                  <Star className="h-8 w-8 text-success" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">User First</h4>
                <p className="text-muted-foreground">Every feature is designed with real pet parents' needs and feedback in mind.</p>
              </div>
            </div>
          </Card>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <Link to="/contact">
              <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-all duration-300">
                <Heart className="h-5 w-5" />
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;