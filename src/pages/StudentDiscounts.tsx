import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, ExternalLink, Tag, ShoppingBag, Laptop, Book, Coffee, Headphones, Gamepad2 } from "lucide-react";
import Navigation from "@/components/Navigation";

// Comprehensive discount data for Indian students
const discountOffers = [
  // Shopping & E-commerce
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
    id: "11",
    brand: "Flipkart Plus",
    title: "Student Cashback Program",
    description: "Earn extra cashback on every purchase through EarnKaro affiliate links. Free delivery and early sale access.",
    discount: "Up to 8%",
    category: "Shopping",
    originalPrice: "Regular prices",
    studentPrice: "Extra 8% cashback",
    validUntil: "2025-01-31",
    logo: "🛍️",
    color: "orange"
  },

  // Software & Development Tools
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
    id: "21",
    brand: "JetBrains",
    title: "All Products Pack Student",
    description: "Free access to IntelliJ IDEA, PyCharm, WebStorm, and all professional IDEs.",
    discount: "FREE",
    category: "Development",
    originalPrice: "$249/year",
    studentPrice: "FREE",
    validUntil: "Valid during studies",
    logo: "⚡",
    color: "blue"
  },
  {
    id: "22",
    brand: "Figma",
    title: "Student Team Plan",
    description: "Professional design tools for students. Unlimited files, version history, and team features.",
    discount: "FREE",
    category: "Design",
    originalPrice: "$12/month",
    studentPrice: "FREE",
    validUntil: "Valid during studies",
    logo: "🎨",
    color: "purple"
  },

  // Cloud Services & Credits
  {
    id: "23",
    brand: "AWS Educate",
    title: "Cloud Credits Program",
    description: "Get $100 in AWS credits plus access to cloud training content and career resources.",
    discount: "$100 Credits",
    category: "Cloud Services",
    originalPrice: "$100 value",
    studentPrice: "FREE Credits",
    validUntil: "Valid during studies",
    logo: "☁️",
    color: "orange"
  },
  {
    id: "24",
    brand: "Google Cloud",
    title: "Student Credits",
    description: "$300 in Google Cloud credits for students. Perfect for learning cloud computing and AI/ML.",
    discount: "$300 Credits",
    category: "Cloud Services",
    originalPrice: "$300 value",
    studentPrice: "FREE Credits",
    validUntil: "Valid during studies",
    logo: "☁️",
    color: "blue"
  },
  {
    id: "25",
    brand: "Microsoft Azure",
    title: "Student Starter Pack",
    description: "$100 Azure credits plus free access to developer tools and learning resources.",
    discount: "$100 Credits",
    category: "Cloud Services",
    originalPrice: "$100 value",
    studentPrice: "FREE Credits",
    validUntil: "Valid during studies",
    logo: "☁️",
    color: "blue"
  },
  {
    id: "26",
    brand: "DigitalOcean",
    title: "Student Droplets",
    description: "$200 in platform credits for 1 year. Perfect for hosting projects and learning DevOps.",
    discount: "$200 Credits",
    category: "Cloud Services",
    originalPrice: "$200 value",
    studentPrice: "FREE Credits",
    validUntil: "1 year",
    logo: "🌊",
    color: "blue"
  },

  // Startup Fellowship & Funding
  {
    id: "27",
    brand: "Startup India",
    title: "Student Entrepreneur Fund",
    description: "Government funding up to ₹10 lakhs for student startups. Includes mentorship and incubation support.",
    discount: "Up to ₹10L",
    category: "Startup Funding",
    originalPrice: "Equity/Loan",
    studentPrice: "Grant/Loan",
    validUntil: "Ongoing",
    logo: "🚀",
    color: "green"
  },
  {
    id: "28",
    brand: "NASSCOM 10,000 Startups",
    title: "Student Startup Program",
    description: "Funding, mentorship, and market access for student-led tech startups. Up to ₹25 lakhs funding.",
    discount: "Up to ₹25L",
    category: "Startup Funding",
    originalPrice: "Market Rate",
    studentPrice: "Subsidized",
    validUntil: "Ongoing",
    logo: "💡",
    color: "purple"
  },
  {
    id: "29",
    brand: "BIRAC BIG Scheme",
    title: "Biotechnology Student Grants",
    description: "Funding for biotechnology and life sciences student startups. Up to ₹50 lakhs for promising ideas.",
    discount: "Up to ₹50L",
    category: "Startup Funding",
    originalPrice: "Market Rate",
    studentPrice: "Grant",
    validUntil: "Ongoing",
    logo: "🧬",
    color: "green"
  },
  {
    id: "30",
    brand: "AICTE IDEA Lab",
    title: "Student Innovation Fund",
    description: "₹20 lakhs funding for student innovations. Includes prototype development and market validation support.",
    discount: "Up to ₹20L",
    category: "Startup Funding",
    originalPrice: "Investment",
    studentPrice: "Grant",
    validUntil: "Ongoing",
    logo: "🔬",
    color: "blue"
  },
  {
    id: "31",
    brand: "Google for Startups",
    title: "Student Accelerator",
    description: "$20K equity-free grant plus mentorship for student-led startups. Access to Google's network.",
    discount: "$20K Grant",
    category: "Startup Funding",
    originalPrice: "Equity Required",
    studentPrice: "Equity-Free",
    validUntil: "Applications Open",
    logo: "🏃",
    color: "blue"
  },

  // Education & Learning
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
    id: "32",
    brand: "Udemy",
    title: "Student Course Bundle",
    description: "Access to premium courses with additional student discounts. Perfect for skill development.",
    discount: "Up to 80% OFF",
    category: "Education",
    originalPrice: "₹3,000/course",
    studentPrice: "₹599/course",
    validUntil: "2024-12-31",
    logo: "🎓",
    color: "purple"
  },
  {
    id: "33",
    brand: "edX",
    title: "Verified Certificate Program",
    description: "Free audit courses plus discounted verified certificates from Harvard, MIT, and other top universities.",
    discount: "50% OFF Certificates",
    category: "Education",
    originalPrice: "$99/certificate",
    studentPrice: "$49/certificate",
    validUntil: "Valid during studies",
    logo: "🏛️",
    color: "blue"
  },
  {
    id: "34",
    brand: "Pluralsight",
    title: "Student Tech Skills",
    description: "Free access to technology courses, skill assessments, and learning paths.",
    discount: "FREE",
    category: "Education",
    originalPrice: "$29/month",
    studentPrice: "FREE",
    validUntil: "Valid during studies",
    logo: "💻",
    color: "orange"
  },

  // Entertainment & Media
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
    id: "35",
    brand: "YouTube Premium",
    title: "Student Subscription",
    description: "Ad-free YouTube, YouTube Music, and offline downloads at student pricing.",
    discount: "40% OFF",
    category: "Entertainment",
    originalPrice: "₹129/month",
    studentPrice: "₹79/month",
    validUntil: "Valid during studies",
    logo: "📹",
    color: "red"
  },
  {
    id: "36",
    brand: "Disney+ Hotstar",
    title: "Student Entertainment Pack",
    description: "Access to Disney, Marvel, Star Wars content plus live sports and Indian shows.",
    discount: "20% OFF",
    category: "Entertainment",
    originalPrice: "₹1,499/year",
    studentPrice: "₹1,199/year",
    validUntil: "2024-12-31",
    logo: "🏰",
    color: "blue"
  },

  // Design & Creative Tools
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
    id: "37",
    brand: "Sketch",
    title: "Student Design License",
    description: "Professional design software for Mac with student pricing. Perfect for UI/UX design.",
    discount: "50% OFF",
    category: "Design",
    originalPrice: "$99/year",
    studentPrice: "$49/year",
    validUntil: "Valid during studies",
    logo: "💎",
    color: "orange"
  },

  // Food & Delivery
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
  },
  {
    id: "20",
    brand: "Swiggy Student",
    title: "Food Delivery Cashback",
    description: "Order your favorite meals with extra cashback. Perfect for late-night study sessions and group orders.",
    discount: "Up to 4%",
    category: "Food",
    originalPrice: "Regular delivery charges",
    studentPrice: "Extra 4% cashback",
    validUntil: "2025-01-31",
    logo: "🍔",
    color: "orange"
  },

  // Fashion & Beauty
  {
    id: "12",
    brand: "Myntra Student",
    title: "Fashion Cashback Deals",
    description: "Shop the latest fashion trends and earn cashback on every purchase. Special student collections available.",
    discount: "Up to 10%",
    category: "Fashion",
    originalPrice: "Regular prices",
    studentPrice: "Extra 10% cashback",
    validUntil: "2025-01-31",
    logo: "👕",
    color: "pink"
  },
  {
    id: "13",
    brand: "Nykaa Beauty",
    title: "Beauty & Cosmetics Cashback",
    description: "Get cashback on all beauty and cosmetics purchases. Access to exclusive beauty tutorials and tips.",
    discount: "Up to 12%",
    category: "Beauty",
    originalPrice: "Regular prices",
    studentPrice: "Extra 12% cashback",
    validUntil: "2025-01-31",
    logo: "💄",
    color: "purple"
  },

  // Travel & Transportation
  {
    id: "15",
    brand: "MakeMyTrip Student",
    title: "Travel Cashback Program",
    description: "Plan your trips with extra savings. Get cashback on flights, hotels, and holiday packages.",
    discount: "Up to 6%",
    category: "Travel",
    originalPrice: "Regular prices",
    studentPrice: "Extra 6% cashback",
    validUntil: "2025-01-31",
    logo: "✈️",
    color: "green"
  },
  {
    id: "38",
    brand: "Ola Student",
    title: "Campus Ride Discounts",
    description: "Special discounts on Ola rides for students. Perfect for daily commute and weekend trips.",
    discount: "15% OFF",
    category: "Travel",
    originalPrice: "Regular fare",
    studentPrice: "15% discount",
    validUntil: "2024-12-31",
    logo: "🚗",
    color: "green"
  },
  {
    id: "39",
    brand: "Uber Student",
    title: "Campus Commute Program",
    description: "Student discounts on Uber rides plus priority booking during peak hours.",
    discount: "10% OFF",
    category: "Travel",
    originalPrice: "Regular fare",
    studentPrice: "10% discount",
    validUntil: "2024-12-31",
    logo: "🚙",
    color: "black"
  },

  // Finance & Banking
  {
    id: "17",
    brand: "Axis Bank Cards",
    title: "Student Credit Card Benefits",
    description: "Special cashback rates for students on Axis Bank credit cards. Build your credit history while earning rewards.",
    discount: "Up to 5%",
    category: "Finance",
    originalPrice: "Standard rates",
    studentPrice: "Enhanced cashback",
    validUntil: "2025-01-31",
    logo: "💳",
    color: "red"
  },
  {
    id: "40",
    brand: "SBI Student Banking",
    title: "Zero Balance Account",
    description: "Student savings account with zero minimum balance requirement and free debit card.",
    discount: "FREE Banking",
    category: "Finance",
    originalPrice: "₹1,000 minimum",
    studentPrice: "₹0 minimum",
    validUntil: "Valid during studies",
    logo: "🏦",
    color: "blue"
  },
  {
    id: "41",
    brand: "HDFC Student Loan",
    title: "Education Loan Benefits",
    description: "Competitive interest rates on education loans with flexible repayment options.",
    discount: "0.5% Rate Reduction",
    category: "Finance",
    originalPrice: "Market rates",
    studentPrice: "Reduced rates",
    validUntil: "Ongoing",
    logo: "📚",
    color: "red"
  },

  // Grocery & Daily Needs
  {
    id: "19",
    brand: "BigBasket Student",
    title: "Grocery Cashback Program",
    description: "Save on daily essentials and groceries. Perfect for hostel students and those living away from home.",
    discount: "Up to 7%",
    category: "Grocery",
    originalPrice: "Regular prices",
    studentPrice: "Extra 7% cashback",
    validUntil: "2025-01-31",
    logo: "🛒",
    color: "orange"
  },
  {
    id: "42",
    brand: "Grofers/Blinkit",
    title: "Student Delivery Pass",
    description: "Free delivery on groceries and essentials with student verification. Quick 10-minute delivery.",
    discount: "FREE Delivery",
    category: "Grocery",
    originalPrice: "₹25 per delivery",
    studentPrice: "FREE",
    validUntil: "2024-12-31",
    logo: "🥬",
    color: "green"
  },

  // Hardware & Technology
  {
    id: "43",
    brand: "Apple Education",
    title: "Student Hardware Discounts",
    description: "Special pricing on MacBook, iPad, and other Apple products for students and educators.",
    discount: "Up to ₹6,000 OFF",
    category: "Hardware",
    originalPrice: "Regular prices",
    studentPrice: "Student pricing",
    validUntil: "Ongoing",
    logo: "🍎",
    color: "gray"
  },
  {
    id: "44",
    brand: "Dell Student Store",
    title: "Laptop & Desktop Deals",
    description: "Exclusive discounts on Dell laptops and desktops for students. Perfect for coding and design work.",
    discount: "Up to 15% OFF",
    category: "Hardware",
    originalPrice: "Regular prices",
    studentPrice: "Student discount",
    validUntil: "Ongoing",
    logo: "💻",
    color: "blue"
  },
  {
    id: "45",
    brand: "Lenovo Education",
    title: "ThinkPad Student Series",
    description: "Business-grade laptops at student-friendly prices. Includes extended warranty and support.",
    discount: "Up to 20% OFF",
    category: "Hardware",
    originalPrice: "Regular prices",
    studentPrice: "Education pricing",
    validUntil: "Ongoing",
    logo: "🖥️",
    color: "red"
  },

  // Internet & Connectivity
  {
    id: "46",
    brand: "Jio Student Plans",
    title: "Campus Connectivity Pack",
    description: "High-speed internet plans designed for students with extra data and validity.",
    discount: "25% OFF",
    category: "Telecom",
    originalPrice: "₹599/month",
    studentPrice: "₹449/month",
    validUntil: "2024-12-31",
    logo: "📱",
    color: "blue"
  },
  {
    id: "47",
    brand: "Airtel Student",
    title: "Campus Internet Plans",
    description: "Student-specific data plans with extended validity and free subscriptions to streaming apps.",
    discount: "30% OFF",
    category: "Telecom",
    originalPrice: "₹699/month",
    studentPrice: "₹489/month",
    validUntil: "2024-12-31",
    logo: "📶",
    color: "red"
  },

  // Research & Academic Tools
  {
    id: "48",
    brand: "IEEE Xplore",
    title: "Student Research Access",
    description: "Free access to IEEE research papers and technical documents. Essential for engineering students.",
    discount: "FREE Access",
    category: "Research",
    originalPrice: "$1,980/year",
    studentPrice: "FREE",
    validUntil: "Valid during studies",
    logo: "📊",
    color: "blue"
  },
  {
    id: "49",
    brand: "Mendeley",
    title: "Reference Manager Pro",
    description: "Advanced reference management and collaboration tools for research projects.",
    discount: "FREE Premium",
    category: "Research",
    originalPrice: "$55/year",
    studentPrice: "FREE",
    validUntil: "Valid during studies",
    logo: "📖",
    color: "green"
  },
  {
    id: "50",
    brand: "Grammarly Premium",
    title: "Student Writing Assistant",
    description: "Advanced grammar checking, plagiarism detection, and writing suggestions for academic work.",
    discount: "50% OFF",
    category: "Academic Tools",
    originalPrice: "$144/year",
    studentPrice: "$72/year",
    validUntil: "Valid during studies",
    logo: "✍️",
    color: "green"
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
      case "Fashion": return <Tag className="h-4 w-4" />;
      case "Beauty": return <Tag className="h-4 w-4" />;
      case "Travel": return <Tag className="h-4 w-4" />;
      case "Finance": return <Tag className="h-4 w-4" />;
      case "Grocery": return <ShoppingBag className="h-4 w-4" />;
      case "Startup Funding": return <Tag className="h-4 w-4" />;
      case "Cloud Services": return <Tag className="h-4 w-4" />;
      case "Hardware": return <Laptop className="h-4 w-4" />;
      case "Telecom": return <Tag className="h-4 w-4" />;
      case "Research": return <Book className="h-4 w-4" />;
      case "Academic Tools": return <Book className="h-4 w-4" />;
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