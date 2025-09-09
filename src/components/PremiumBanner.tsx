import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Sparkles, Crown, Zap } from "lucide-react";

interface PremiumBannerProps {
  onUpgrade?: () => void;
}

export function PremiumBanner({ onUpgrade }: PremiumBannerProps) {
  return (
    <Card className="relative overflow-hidden border-premium bg-gradient-to-r from-premium/10 via-primary/5 to-accent/10 p-6">
      <div className="absolute top-0 right-0 w-32 h-32 bg-premium/10 rounded-full blur-xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/20 rounded-full blur-lg" />
      
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-premium/20 flex items-center justify-center">
            <Crown className="h-6 w-6 text-premium" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-lg">Upgrade to Premium</h3>
              <Badge className="bg-premium text-premium-foreground">
                <Sparkles className="h-3 w-3 mr-1" />
                Pro
              </Badge>
            </div>
            <p className="text-muted-foreground">
              Unlock advanced scheduling, health tracking, and personalized care recommendations
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Zap className="h-3 w-3" />
              Starting at $9.99/month
            </div>
          </div>
          <Button 
            onClick={onUpgrade}
            className="bg-premium hover:bg-premium/90 text-premium-foreground"
          >
            <Star className="h-4 w-4 mr-2" />
            Upgrade Now
          </Button>
        </div>
      </div>
    </Card>
  );
}