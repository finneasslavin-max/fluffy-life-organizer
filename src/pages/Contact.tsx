import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MessageCircle, ArrowLeft, Heart, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import contactDog from "@/assets/contact-dog.png";
import realCat from "@/assets/real-cat.png";
import realRabbit from "@/assets/real-rabbit.png";

const Contact = () => {
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
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Contact Us
                </h1>
                <p className="text-muted-foreground font-medium">We'd love to hear from you! 🐾</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section with Contact Dog */}
          <Card className="warm-glow border-2 border-primary/20 cozy-gradient p-12 mb-12 text-center relative overflow-hidden">
            <div className="absolute right-8 top-8">
              <img 
                src={contactDog} 
                alt="Friendly contact dog" 
                className="w-32 h-32 rounded-2xl shadow-xl object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4 opacity-20">
              <img src={realCat} alt="Cat" className="w-16 h-16 rounded-full" />
            </div>
            <div className="absolute top-4 left-8 opacity-15">
              <img src={realRabbit} alt="Rabbit" className="w-14 h-14 rounded-full" />
            </div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent mb-6">
                Let's Connect! 💫
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Have questions about Pet Care Planner? Need support? Want to share feedback? 
                We're here to help you and your furry friends!
              </p>
            </div>
          </Card>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="warm-glow border-2 border-success/20 p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-success/20 to-success/10 flex items-center justify-center">
                <Phone className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Call Us</h3>
              <p className="text-muted-foreground mb-6">Speak directly with our pet care specialists</p>
              <div className="space-y-3">
                <div className="text-lg font-semibold text-foreground">
                  📞 +1 (555) 123-PETS
                </div>
                <div className="text-lg font-semibold text-foreground">
                  📱 +1 (555) PET-CARE
                </div>
              </div>
              <Badge variant="secondary" className="mt-4">
                <Clock className="h-3 w-3 mr-1" />
                Mon-Fri 9AM-6PM EST
              </Badge>
            </Card>

            <Card className="warm-glow border-2 border-primary/20 p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Email Us</h3>
              <p className="text-muted-foreground mb-6">Send us your questions or feedback</p>
              <div className="space-y-3">
                <div className="text-lg font-semibold text-foreground">
                  ✉️ finn@petcareplanner.com
                </div>
                <div className="text-lg font-semibold text-foreground">
                  🆘 support@petcareplanner.com
                </div>
              </div>
              <Badge variant="secondary" className="mt-4">
                <MessageCircle className="h-3 w-3 mr-1" />
                24-48 hour response
              </Badge>
            </Card>

            <Card className="warm-glow border-2 border-accent/20 p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Visit Us</h3>
              <p className="text-muted-foreground mb-6">Stop by our pet-friendly office</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Pet Care Planner HQ</div>
                <div>123 Furry Friends Lane</div>
                <div>Pet Paradise, PP 12345</div>
              </div>
              <Badge variant="secondary" className="mt-4">
                <Heart className="h-3 w-3 mr-1" />
                Pets Welcome!
              </Badge>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="warm-glow border-2 border-premium/20 p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Heart className="h-6 w-6 text-premium" />
                What to Expect
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-success"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Quick Response</h4>
                    <p className="text-muted-foreground text-sm">We typically respond within 24 hours during business days</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Personal Touch</h4>
                    <p className="text-muted-foreground text-sm">Every message is read by Finn personally</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Pet-Friendly Support</h4>
                    <p className="text-muted-foreground text-sm">We understand pet parent challenges firsthand</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="warm-glow border-2 border-warning/20 p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <MessageCircle className="h-6 w-6 text-warning" />
                Emergency Support
              </h3>
              <p className="text-muted-foreground mb-6">
                While we're here to help with app-related questions, please contact your veterinarian 
                immediately for any pet health emergencies.
              </p>
              <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">🚨 Pet Emergency?</h4>
                <p className="text-muted-foreground text-sm">
                  Call your local emergency vet clinic or pet poison control hotline immediately. 
                  Your pet's health and safety come first!
                </p>
              </div>
            </Card>
          </div>

          {/* Back to App CTA */}
          <div className="text-center mt-12">
            <Link to="/">
              <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-all duration-300">
                <Heart className="h-5 w-5" />
                Back to Pet Care Planner
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;