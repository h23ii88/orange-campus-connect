import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, ExternalLink, Tag, ShoppingBag, Laptop, Book, Coffee, Headphones, Gamepad2 } from "lucide-react";
import Navigation from "@/components/Navigation";

// Mock discount data - will be moved to database later
const discountOffers = [
  {
    id: "1",
    brand: "Amazon Prime Student",
    title: "50% Off Prime Membership",
    description: "Get Amazon Prime at half price with student verification. Free shipping, Prime Video, and exclusive deals.",
    discount: "50% OFF",
    category: "Shopping",
    originalPrice: "₹1,499/year",
    studentPrice: "₹749/year",
    validUntil: "2024-12-31",
    logo: "🛒",
    color: "orange"
  },
  {
    id: "2",
    brand: "Adobe Creative Cloud",
    title: "Student Creative Suite",
    description: "Access to Photoshop, Illustrator, Premiere Pro and more with student pricing.",
    discount: "60% OFF",
    category: "Software",
    originalPrice: "₹1,675/month",
    studentPrice: "₹670/month",
    validUntil: "2024-12-31",
    logo: "🎨",
    color: "red"
  },
  {
    id: "3",
    brand: "Spotify Premium",
    title: "Student Music Plan",
    description: "Ad-free music streaming with offline downloads and premium features.",
    discount: "50% OFF",
    category: "Entertainment",
    originalPrice: "₹119/month",
    studentPrice: "₹59/month",
    validUntil: "2024-12-31",
    logo: "🎵",
    color: "green"
  },
  {
    id: "4",
    brand: "Microsoft Office 365",
    title: "Education Edition",
    description: "Complete Office suite including Word, Excel, PowerPoint, and OneDrive storage.",
    discount: "FREE",
    category: "Software",
    originalPrice: "₹489/month",
    studentPrice: "FREE",
    validUntil: "Valid during studies",
    logo: "💼",
    color: "blue"
  },
  {
    id: "5",
    brand: "Netflix",
    title: "Student Mobile Plan",
    description: "Mobile-only Netflix plan with access to full content library.",
    discount: "Mobile Plan",
    category: "Entertainment",
    originalPrice: "₹199/month",
    studentPrice: "₹149/month",
    validUntil: "2024-12-31",
    logo: "📺",
    color: "red"
  },
  {
    id: "6",
    brand: "Coursera Plus",
    title: "Student Annual Plan",
    description: "Access to 7,000+ courses, certificates, and guided projects from top universities.",
    discount: "40% OFF",
    category: "Education",
    originalPrice: "₹5,000/year",
    studentPrice: "₹3,000/year",
    validUntil: "2024-12-31",
    logo: "📚",
    color: "blue"
  },
  {
    id: "7",
    brand: "Flipkart Plus",
    title: "Student Benefits",
    description: "Free delivery, early access to sales, and exclusive student discounts.",
    discount: "FREE Plus",
    category: "Shopping",
    originalPrice: "₹500/year",
    studentPrice: "FREE",
    validUntil: "2024-12-31",
    logo: "🛍️",
    color: "blue"
  },
  {
    id: "8",
    brand: "Canva Pro",
    title: "Student Design Suite",
    description: "Premium design tools, templates, and brand kit for students.",
    discount: "FREE",
    category: "Design",
    originalPrice: "₹399/month",
    studentPrice: "FREE",
    validUntil: "Valid during studies",
    logo: "🎨",
    color: "purple"
  },
  {
    id: "9",
    brand: "GitHub Pro",
    title: "Student Developer Pack",
    description: "Free GitHub Pro account plus access to developer tools and cloud credits.",
    discount: "FREE",
    category: "Development",
    originalPrice: "$4/month",
    studentPrice: "FREE",
    validUntil: "Valid during studies",
    logo: "💻",
    color: "black"
  },
  {
    id: "10",
    brand: "Zomato Pro",
    title: "Student Food Delivery",
    description: "Free delivery, exclusive restaurant discounts, and priority support.",
    discount: "30% OFF",
    category: "Food",
    originalPrice: "₹300/month",
    studentPrice: "₹210/month",
    validUntil: "2024-12-31",
    logo: "🍕",
    color: "red"
  }
];

const StudentDiscounts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredOffers = discountOffers.filter((offer) => {
    const matchesSearch = offer.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         offer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         offer.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || offer.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const categories = ["all", ...Array.from(new Set(discountOffers.map(o => o.category)))];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Shopping": return <ShoppingBag className="h-4 w-4" />;
      case "Software": return <Laptop className="h-4 w-4" />;
      case "Entertainment": return <Headphones className="h-4 w-4" />;
      case "Education": return <Book className="h-4 w-4" />;
      case "Food": return <Coffee className="h-4 w-4" />;
      case "Development": return <Laptop className="h-4 w-4" />;
      case "Design": return <Tag className="h-4 w-4" />;
      default: return <Tag className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Student <span className="text-primary">Discounts & Offers</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Exclusive deals and discounts for Indian students on brands you love
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search brands and offers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full md:w-[200px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  <div className="flex items-center gap-2">
                    {category !== "all" && getCategoryIcon(category)}
                    {category === "all" ? "All Categories" : category}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredOffers.length} of {discountOffers.length} offers
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOffers.map((offer) => (
            <Card key={offer.id} className="group hover:shadow-lg transition-all duration-200 border-l-4 border-l-primary">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{offer.logo}</div>
                    <div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {offer.brand}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {offer.title}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary" className="shrink-0">
                    <div className="flex items-center gap-1">
                      {getCategoryIcon(offer.category)}
                      {offer.category}
                    </div>
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {offer.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Student Price:</span>
                    <span className="font-semibold text-primary">{offer.studentPrice}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Regular Price:</span>
                    <span className="text-sm line-through text-muted-foreground">{offer.originalPrice}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Valid Until:</span>
                    <span className="text-sm">{offer.validUntil}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <Badge variant="default" className="text-xs font-semibold">
                    {offer.discount}
                  </Badge>
                  <Button size="sm" className="gap-2">
                    Get Offer
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredOffers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No offers found matching your criteria.</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setCategoryFilter("all");
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-12 p-6 bg-muted/50 rounded-lg">
          <h3 className="font-semibold mb-2">How to claim student discounts:</h3>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• Verify your student status with a valid college ID or enrollment document</li>
            <li>• Some offers require .edu email address or UNiDAYS verification</li>
            <li>• Discounts are typically valid for the duration of your studies</li>
            <li>• Terms and conditions may vary by brand and offer</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentDiscounts;