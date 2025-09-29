import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppSidebar } from "@/components/AppSidebar";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";

import Index from "./pages/Index";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Health from "./pages/Health";
import Grooming from "./pages/Grooming";
import Training from "./pages/Training";
import Gallery from "./pages/Gallery";
import Vets from "./pages/Vets";
import Supplies from "./pages/Supplies";
import Bella from "./pages/pets/Bella";
import Whiskers from "./pages/pets/Whiskers";
import Snowball from "./pages/pets/Snowball";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/auth" element={<Auth />} />
            
            {/* Protected routes */}
            {user ? (
              <>
                <Route path="/" element={
                  <SidebarProvider>
                    <div className="min-h-screen flex w-full">
                      <AppSidebar />
                      <div className="flex-1 flex flex-col">
                        <header className="h-12 flex items-center border-b bg-background">
                          <SidebarTrigger className="ml-2" />
                        </header>
                        <main className="flex-1">
                          <Index />
                        </main>
                      </div>
                    </div>
                  </SidebarProvider>
                } />
                <Route path="/about" element={
                  <SidebarProvider>
                    <div className="min-h-screen flex w-full">
                      <AppSidebar />
                      <div className="flex-1 flex flex-col">
                        <header className="h-12 flex items-center border-b bg-background">
                          <SidebarTrigger className="ml-2" />
                        </header>
                        <main className="flex-1">
                          <About />
                        </main>
                      </div>
                    </div>
                  </SidebarProvider>
                } />
                <Route path="/health" element={
                  <SidebarProvider>
                    <div className="min-h-screen flex w-full">
                      <AppSidebar />
                      <div className="flex-1 flex flex-col">
                        <header className="h-12 flex items-center border-b bg-background">
                          <SidebarTrigger className="ml-2" />
                        </header>
                        <main className="flex-1">
                          <Health />
                        </main>
                      </div>
                    </div>
                  </SidebarProvider>
                } />
                <Route path="/grooming" element={
                  <SidebarProvider>
                    <div className="min-h-screen flex w-full">
                      <AppSidebar />
                      <div className="flex-1 flex flex-col">
                        <header className="h-12 flex items-center border-b bg-background">
                          <SidebarTrigger className="ml-2" />
                        </header>
                        <main className="flex-1">
                          <Grooming />
                        </main>
                      </div>
                    </div>
                  </SidebarProvider>
                } />
                <Route path="/training" element={
                  <SidebarProvider>
                    <div className="min-h-screen flex w-full">
                      <AppSidebar />
                      <div className="flex-1 flex flex-col">
                        <header className="h-12 flex items-center border-b bg-background">
                          <SidebarTrigger className="ml-2" />
                        </header>
                        <main className="flex-1">
                          <Training />
                        </main>
                      </div>
                    </div>
                  </SidebarProvider>
                } />
                <Route path="/gallery" element={
                  <SidebarProvider>
                    <div className="min-h-screen flex w-full">
                      <AppSidebar />
                      <div className="flex-1 flex flex-col">
                        <header className="h-12 flex items-center border-b bg-background">
                          <SidebarTrigger className="ml-2" />
                        </header>
                        <main className="flex-1">
                          <Gallery />
                        </main>
                      </div>
                    </div>
                  </SidebarProvider>
                } />
                <Route path="/vets" element={
                  <SidebarProvider>
                    <div className="min-h-screen flex w-full">
                      <AppSidebar />
                      <div className="flex-1 flex flex-col">
                        <header className="h-12 flex items-center border-b bg-background">
                          <SidebarTrigger className="ml-2" />
                        </header>
                        <main className="flex-1">
                          <Vets />
                        </main>
                      </div>
                    </div>
                  </SidebarProvider>
                } />
                <Route path="/supplies" element={
                  <SidebarProvider>
                    <div className="min-h-screen flex w-full">
                      <AppSidebar />
                      <div className="flex-1 flex flex-col">
                        <header className="h-12 flex items-center border-b bg-background">
                          <SidebarTrigger className="ml-2" />
                        </header>
                        <main className="flex-1">
                          <Supplies />
                        </main>
                      </div>
                    </div>
                  </SidebarProvider>
                } />
                <Route path="/pets/bella" element={
                  <SidebarProvider>
                    <div className="min-h-screen flex w-full">
                      <AppSidebar />
                      <div className="flex-1 flex flex-col">
                        <header className="h-12 flex items-center border-b bg-background">
                          <SidebarTrigger className="ml-2" />
                        </header>
                        <main className="flex-1">
                          <Bella />
                        </main>
                      </div>
                    </div>
                  </SidebarProvider>
                } />
                <Route path="/pets/whiskers" element={
                  <SidebarProvider>
                    <div className="min-h-screen flex w-full">
                      <AppSidebar />
                      <div className="flex-1 flex flex-col">
                        <header className="h-12 flex items-center border-b bg-background">
                          <SidebarTrigger className="ml-2" />
                        </header>
                        <main className="flex-1">
                          <Whiskers />
                        </main>
                      </div>
                    </div>
                  </SidebarProvider>
                } />
                <Route path="/pets/snowball" element={
                  <SidebarProvider>
                    <div className="min-h-screen flex w-full">
                      <AppSidebar />
                      <div className="flex-1 flex flex-col">
                        <header className="h-12 flex items-center border-b bg-background">
                          <SidebarTrigger className="ml-2" />
                        </header>
                        <main className="flex-1">
                          <Snowball />
                        </main>
                      </div>
                    </div>
                  </SidebarProvider>
                } />
                <Route path="*" element={
                  <SidebarProvider>
                    <div className="min-h-screen flex w-full">
                      <AppSidebar />
                      <div className="flex-1 flex flex-col">
                        <header className="h-12 flex items-center border-b bg-background">
                          <SidebarTrigger className="ml-2" />
                        </header>
                        <main className="flex-1">
                          <NotFound />
                        </main>
                      </div>
                    </div>
                  </SidebarProvider>
                } />
              </>
            ) : (
              <Route path="*" element={<Landing />} />
            )}
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;