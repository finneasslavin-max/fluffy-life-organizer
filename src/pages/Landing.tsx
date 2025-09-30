import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Users, ArrowRight, PawPrint, Calendar, Camera, Bell, FileText, Share2, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PawPrint className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">PetCare Planner</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
            <Link to="/auth">
              <Button variant="outline">Sign In</Button>
            </Link>
          </nav>
          <div className="md:hidden">
            <Link to="/auth">
              <Button size="sm">Sign In</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
        <div className="container mx-auto px-4 max-w-6xl relative">
          <div className="text-center mb-12">
            <Badge className="mb-6 text-base py-2 px-4" variant="secondary">
              🐾 Your Pet's Best Life Starts Here
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent leading-tight">
              Complete Pet Care
              <br />
              Management Platform
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
              Everything you need to keep your pets healthy, happy, and thriving—all in one intuitive platform.
            </p>
            <p className="text-lg text-muted-foreground/80 mb-10 max-w-2xl mx-auto">
              Join pet owners who trust PetCare Planner for health tracking, appointment scheduling, care management, and memory keeping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/auth">
                <Button size="lg" className="gap-2 text-lg h-14 px-8">
                  Start Free Today <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="#features">
                <Button size="lg" variant="outline" className="text-lg h-14 px-8">
                  See How It Works
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 text-center">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">Free to start</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">Secure & private</span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-muted/30" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">COMPREHENSIVE FEATURES</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything Your Pet Needs in One Place</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Designed by pet lovers, for pet lovers. Every feature is built to make pet care easier, more organized, and more joyful.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <Heart className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-xl">Health Records</CardTitle>
                <CardDescription className="text-base">
                  Complete digital health tracking including vaccinations, medications, allergies, and vet visit history. Never lose important medical information again.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <Calendar className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-xl">Smart Scheduling</CardTitle>
                <CardDescription className="text-base">
                  Automated reminders for feeding, walks, grooming, and vet appointments. Set recurring tasks and never miss important care routines.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <Camera className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-xl">Photo Gallery</CardTitle>
                <CardDescription className="text-base">
                  Create a beautiful timeline of memories. Organize photos by pet, add captions, and track growth milestones over time.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <Bell className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-xl">Reminders & Alerts</CardTitle>
                <CardDescription className="text-base">
                  Get timely notifications for medications, appointments, and daily care tasks. Customizable alerts ensure you're always on top of pet care.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <FileText className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-xl">Care Resources</CardTitle>
                <CardDescription className="text-base">
                  Access expert guides on training, grooming, health, and nutrition. Find local vets and pet services all in one place.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <Share2 className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-xl">Multi-Pet Support</CardTitle>
                <CardDescription className="text-base">
                  Manage multiple pets with ease. Each pet gets their own profile, schedule, and health records—all accessible from one dashboard.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">SIMPLE & INTUITIVE</Badge>
            <h2 className="text-4xl font-bold mb-4">Getting Started is Easy</h2>
            <p className="text-xl text-muted-foreground">
              Set up your account and start managing your pet's care in minutes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Create Your Account</h3>
              <p className="text-muted-foreground">
                Sign up for free in seconds. No credit card required to start.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Add Your Pets</h3>
              <p className="text-muted-foreground">
                Create profiles for each pet with photos, details, and health information.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Start Managing Care</h3>
              <p className="text-muted-foreground">
                Track health, schedule tasks, and capture memories—all from your dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20" id="mission">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            We believe every pet deserves the best care possible. Our mission is to empower pet owners 
            with the tools and insights they need to provide exceptional care, build stronger bonds, 
            and create lasting memories with their beloved companions.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Love First</h3>
              <p className="text-sm text-muted-foreground">
                Every feature is designed with the love between pets and their families in mind.
              </p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Privacy & Security</h3>
              <p className="text-sm text-muted-foreground">
                Your pet's data is protected with enterprise-grade security and privacy controls.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Community</h3>
              <p className="text-sm text-muted-foreground">
                Join a community of pet lovers who share tips, stories, and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/20" id="about">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About PetCare Planner</h2>
            <p className="text-muted-foreground">
              Built by pet lovers, for pet lovers. Learn more about our story and values.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
              <p className="text-muted-foreground mb-4">
                Founded in 2024, PetCare Planner was born from the personal experience of pet owners 
                who struggled to keep track of their pets' complex care needs. We realized that 
                traditional methods—scattered notes, multiple apps, and paper records—simply weren't enough.
              </p>
              <p className="text-muted-foreground">
                Today, we're proud to serve thousands of pet families worldwide, helping them provide 
                better care and create stronger bonds with their beloved companions.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Why Choose PetCare Planner?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm">Comprehensive care tracking in one place</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm">Intelligent reminders and scheduling</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm">Secure, private, and always accessible</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm">Built with love by fellow pet owners</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Pet Care?</h2>
            <p className="text-xl text-muted-foreground mb-10">
              Join pet owners who trust PetCare Planner to keep their beloved companions happy, healthy, and thriving.
            </p>
            <Link to="/auth">
              <Button size="lg" className="gap-2 text-lg h-14 px-10">
                Get Started Free <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground mt-6">
              No credit card required • Setup in minutes • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <PawPrint className="h-6 w-6 text-primary" />
                <span className="font-semibold">PetCare Planner</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Comprehensive pet care made simple.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="#features" className="hover:text-foreground transition-colors">Features</Link></li>
                <li><Link to="#mission" className="hover:text-foreground transition-colors">Mission</Link></li>
                <li><Link to="#about" className="hover:text-foreground transition-colors">About</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
                <li><Link to="/faq" className="hover:text-foreground">FAQ</Link></li>
                <li><Link to="#" className="hover:text-foreground">Help Center</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><span className="text-muted-foreground/60 cursor-not-allowed">Privacy Policy</span></li>
                <li><span className="text-muted-foreground/60 cursor-not-allowed">Terms of Service</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 PetCare Planner. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;