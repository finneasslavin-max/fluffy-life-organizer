import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Bella from "./pages/pets/Bella";
import Whiskers from "./pages/pets/Whiskers";
import Snowball from "./pages/pets/Snowball";
import Health from "./pages/Health";
import Grooming from "./pages/Grooming";
import Training from "./pages/Training";
import Gallery from "./pages/Gallery";
import Vets from "./pages/Vets";
import Supplies from "./pages/Supplies";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
              <header className="h-12 flex items-center border-b bg-background">
                <SidebarTrigger className="ml-2" />
              </header>
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/pets/bella" element={<Bella />} />
                  <Route path="/pets/whiskers" element={<Whiskers />} />
                  <Route path="/pets/snowball" element={<Snowball />} />
                  <Route path="/health" element={<Health />} />
                  <Route path="/grooming" element={<Grooming />} />
                  <Route path="/training" element={<Training />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/vets" element={<Vets />} />
                  <Route path="/supplies" element={<Supplies />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
