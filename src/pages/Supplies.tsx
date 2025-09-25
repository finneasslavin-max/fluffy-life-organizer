import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Package, TrendingUp } from "lucide-react";

export default function Supplies() {
  const categories = [
    { name: "Food & Treats", count: 156, icon: "🍖" },
    { name: "Toys", count: 89, icon: "🎾" },
    { name: "Health & Wellness", count: 67, icon: "💊" },
    { name: "Grooming", count: 45, icon: "✂️" },
    { name: "Beds & Furniture", count: 34, icon: "🛏️" },
    { name: "Training", count: 23, icon: "🎯" },
  ];

  const products = [
    {
      id: 1,
      name: "Premium Dog Food - Chicken & Rice",
      price: 45.99,
      rating: 4.8,
      reviews: 234,
      category: "Food",
      inStock: true,
      image: "🍖"
    },
    {
      id: 2,
      name: "Interactive Puzzle Toy",
      price: 19.99,
      rating: 4.6,
      reviews: 156,
      category: "Toys",
      inStock: true,
      image: "🧩"
    },
    {
      id: 3,
      name: "Orthopedic Pet Bed",
      price: 89.99,
      rating: 4.9,
      reviews: 89,
      category: "Beds",
      inStock: false,
      image: "🛏️"
    },
    {
      id: 4,
      name: "Grooming Kit - Complete Set",
      price: 34.99,
      rating: 4.7,
      reviews: 123,
      category: "Grooming",
      inStock: true,
      image: "✂️"
    },
  ];

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Pet Supplies Store</h1>
          <p className="text-muted-foreground">Everything your pets need, delivered to your door</p>
        </div>
        <Button className="flex items-center gap-2">
          <ShoppingCart className="h-4 w-4" />
          View Cart (3)
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <Card key={category.name} className="warm-glow hover:bg-muted/50 transition-colors cursor-pointer">
            <CardContent className="p-4 text-center">
              <div className="text-3xl mb-2">{category.icon}</div>
              <h3 className="font-medium text-sm mb-1">{category.name}</h3>
              <p className="text-xs text-muted-foreground">{category.count} items</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="warm-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Popular This Week
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <div className="text-2xl">🍖</div>
              <div className="flex-1">
                <p className="font-medium">Premium Dog Food</p>
                <p className="text-sm text-muted-foreground">+15% sales this week</p>
              </div>
              <Badge className="bg-success">Hot</Badge>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <div className="text-2xl">🧩</div>
              <div className="flex-1">
                <p className="font-medium">Puzzle Toys</p>
                <p className="text-sm text-muted-foreground">+8% sales this week</p>
              </div>
              <Badge variant="outline">Trending</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="warm-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5 text-accent" />
              Your Recent Orders
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium">Order #12345</p>
              <p className="text-sm text-muted-foreground">Delivered Dec 20, 2024</p>
              <Badge className="mt-1 bg-success">Delivered</Badge>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium">Order #12344</p>
              <p className="text-sm text-muted-foreground">Expected Dec 28, 2024</p>
              <Badge className="mt-1" variant="outline">In Transit</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="warm-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-warning" />
              Top Rated
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-center">
              <div className="text-4xl mb-2">🛏️</div>
              <p className="font-medium">Orthopedic Pet Bed</p>
              <div className="flex items-center justify-center gap-1 mt-1">
                <Star className="h-4 w-4 fill-warning text-warning" />
                <span className="text-sm font-medium">4.9</span>
                <span className="text-sm text-muted-foreground">(89)</span>
              </div>
              <Button className="w-full mt-3" variant="outline">View Product</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="warm-glow">
              <CardContent className="p-4">
                <div className="text-center mb-4">
                  <div className="text-6xl mb-3">{product.image}</div>
                  <h3 className="font-medium mb-2">{product.name}</h3>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Star className="h-4 w-4 fill-warning text-warning" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    <Badge variant="outline">{product.category}</Badge>
                  </div>
                </div>
                
                {product.inStock ? (
                  <Button className="w-full">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                ) : (
                  <Button className="w-full" variant="outline" disabled>
                    Out of Stock
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="warm-glow">
        <CardHeader>
          <CardTitle>Special Offers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-primary/10 rounded-lg border border-primary/20">
              <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
              <p className="text-muted-foreground mb-4">
                Get free shipping on orders over $50. Limited time offer!
              </p>
              <Button>Shop Now</Button>
            </div>
            <div className="p-6 bg-success/10 rounded-lg border border-success/20">
              <h3 className="text-xl font-bold mb-2">20% Off Premium Food</h3>
              <p className="text-muted-foreground mb-4">
                Save on all premium pet food brands this month.
              </p>
              <Button variant="outline">View Deals</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}