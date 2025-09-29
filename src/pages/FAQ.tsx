import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, HelpCircle, Mail, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I add my first pet to PetCare Planner?",
      answer: "After signing in, click the 'Add Pet' button on your dashboard. Fill in your pet's basic information like name, species, breed, and age. You can always update this information later as your pet grows."
    },
    {
      question: "Can I track multiple pets with one account?",
      answer: "Absolutely! PetCare Planner supports unlimited pets per account. Each pet gets their own profile with separate health records, schedules, and photo galleries."
    },
    {
      question: "How do I set up medication reminders?",
      answer: "Go to your pet's health section and click 'Add Medication'. Enter the medication details, dosage, and frequency. The system will automatically create reminders and send notifications to keep you on track."
    },
    {
      question: "Is my pet's data secure and private?",
      answer: "Yes, we take privacy seriously. All data is encrypted and stored securely. We never share your pet's information with third parties, and you maintain full control over your data."
    },
    {
      question: "Can I share access with my family or vet?",
      answer: "Yes! You can invite family members to view and manage your pet's information. For veterinarians, you can generate secure reports to share during appointments."
    },
    {
      question: "How do I upload and organize photos?",
      answer: "Visit the Gallery section for your pet and click 'Upload Photos'. You can organize photos by creating albums, tagging special moments, and adding descriptions to create a beautiful timeline of memories."
    },
    {
      question: "What if I forget to log an activity or medication?",
      answer: "No worries! You can backdate entries by selecting a previous date when logging activities. The system also sends gentle reminders to help you stay consistent with your pet's care routine."
    },
    {
      question: "Can I export my pet's health records?",
      answer: "Yes, you can export comprehensive health reports in PDF format. This is perfect for vet visits, travel, or keeping backup records of your pet's medical history."
    },
    {
      question: "How do I cancel my account?",
      answer: "We're sorry to see you go! You can cancel your account in Settings > Account > Delete Account. All your data will be permanently removed within 30 days of cancellation."
    },
    {
      question: "Do you offer customer support?",
      answer: "Absolutely! We offer email support for all users. Premium users also get priority support with faster response times. You can reach us through the contact page or directly from the app."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <HelpCircle className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about PetCare Planner. Can't find what you're looking for? 
            <Link to="/contact" className="text-primary hover:underline ml-1">Contact us</Link> for help.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Common Questions</CardTitle>
            <CardDescription>
              Everything you need to know about using PetCare Planner effectively
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Help Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Still Need Help?
              </CardTitle>
              <CardDescription>
                Our support team is here to help you get the most out of PetCare Planner.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/contact">
                <Button className="w-full">Contact Support</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Feature Request?
              </CardTitle>
              <CardDescription>
                Have an idea for a new feature? We'd love to hear from you!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/contact">
                <Button variant="outline" className="w-full">Share Your Ideas</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Quick Tips */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Quick Tips for New Users</CardTitle>
            <CardDescription>
              Get started faster with these helpful tips
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Start with the basics</h4>
                <p className="text-sm text-muted-foreground">Add your pet's basic info first, then gradually build up their health records and schedules.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Set up reminders early</h4>
                <p className="text-sm text-muted-foreground">Enable notifications so you never miss important care tasks or appointments.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Take photos regularly</h4>
                <p className="text-sm text-muted-foreground">Build beautiful memories by uploading photos of your pet's milestones and special moments.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Keep records updated</h4>
                <p className="text-sm text-muted-foreground">Regular updates help you spot patterns and provide better information to your vet.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;