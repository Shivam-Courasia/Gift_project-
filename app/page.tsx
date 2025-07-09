"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import GiftLoader from "@/components/gift-loader"
import {
  Heart,
  Gift,
  MessageCircle,
  Clock,
  Star,
  Phone,
  Mail,
  Instagram,
  Facebook,
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  Receipt,
  Filter,
  X,
  Palette,
  Youtube,
  Sparkles,
} from "lucide-react"

interface CartItem {
  id: number
  name: string
  price: number
  originalPrice: number
  quantity: number
  image: string
  category: string
}

interface BillDetails {
  subtotal: number
  urgentFee: number
  anonymousFee: number
  advancePayment: number
  total: number
}

interface GiftItem {
  id: number
  name: string
  price: number
  originalPrice: number
  image: string
  rating: number
  category: string
  description: string
  videoUrl?: string
}

export default function GiftWebsite() {
  const [isLoading, setIsLoading] = useState(true)
  const [isClient, setIsClient] = useState(false)
  const [deliveryOption, setDeliveryOption] = useState("5-7")
  const [giftMessage, setGiftMessage] = useState("")
  const [recipientName, setRecipientName] = useState("")
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [cart, setCart] = useState<CartItem[]>([])
  const [showCart, setShowCart] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [showFilters, setShowFilters] = useState(false)
  const [customizeProduct, setCustomizeProduct] = useState<GiftItem | null>(null)
  const [customizationMessage, setCustomizationMessage] = useState("")
  const [showQuickChatDialog, setShowQuickChatDialog] = useState(false)

  // Ensure client-side rendering
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Replace with your actual WhatsApp number
  const whatsappNumber = "9171527146"

  const giftCategories = [
    {
      id: "handmade-box-cards",
      name: "Handmade Box Cards",
      icon: "📦",
      description: "Beautiful handcrafted box cards",
    },
    {
      id: "customized-scrapbooks",
      name: "Customized Scrapbooks",
      icon: "📖",
      description: "Personalized memory books",
    },
    {
      id: "chocolate-bouquets",
      name: "Chocolate Bouquets & Gifts",
      icon: "🍫",
      description: "Sweet chocolate arrangements",
    },
    {
      id: "creative-chocolate-hampers",
      name: "Creative Chocolate Hampers",
      icon: "🎨",
      description: "Artistic chocolate collections",
    },
    {
      id: "designer-cakes",
      name: "Designer Cakes & Chocolate Cakes",
      icon: "🧁",
      description: "Custom designer cakes",
    },
    {
      id: "paper-art-teddies",
      name: "Paper Art Teddy Bears",
      icon: "🐻",
      description: "Handcrafted paper teddy bears",
    },
    {
      id: "paper-roses-crafts",
      name: "Paper Roses & Flower Crafts",
      icon: "🌹",
      description: "Beautiful paper flower crafts",
    },
    { id: "customize", name: "Customize", icon: "🎨", description: "Make it uniquely yours" },
  ]

  const allGifts: GiftItem[] = [
    // Handmade Box Cards (20% discount applied)
    {
      id: 1,
      name: "Chocolate Box Card",
      originalPrice: 749,
      price: 599,
      image: "/Chocolate Box Card.jpg?height=300&width=300",
      rating: 5,
      category: "handmade-box-cards",
      description: "Handmade box card with chocolate surprises inside",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 2,
      name: "Bouquet Box Card",
      originalPrice: 999,
      price: 799,
      image: "/Bouquet Box Card.jpg?height=300&width=300",
      rating: 5,
      category: "handmade-box-cards",
      description: "Beautiful box card with mini bouquet arrangement",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 3,
      name: "Photos Box Card",
      originalPrice: 624,
      price: 499,
      image: "/Photos Box Card.jpg?height=300&width=300",
      rating: 4,
      category: "handmade-box-cards",
      description: "Personalized photo box card with memories",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 4,
      name: "Ghibli Photos Box Card",
      originalPrice: 874,
      price: 699,
      image: "/Ghibli Photos Box Card.jpg?height=300&width=300",
      rating: 5,
      category: "handmade-box-cards",
      description: "Studio Ghibli themed photo box card",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 5,
      name: "Message Box Card",
      originalPrice: 561,
      price: 449,
      image: "/Message Box Card.jpg?height=300&width=300",
      rating: 4,
      category: "handmade-box-cards",
      description: "Special message box card with hidden notes",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },

    // Customized Scrapbooks (20% discount applied)
    {
      id: 6,
      name: "Anniversary Scrapbook",
      originalPrice: 1249,
      price: 999,
      image: "/Anniversary Scrapbook.jpg?height=300&width=300",
      rating: 5,
      category: "customized-scrapbooks",
      description: "Romantic anniversary memory scrapbook",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 7,
      name: "Birthday Wishes Scrapbook",
      originalPrice: 1124,
      price: 899,
      image: "/Birthday Wishes Scrapbook.jpg?height=300&width=300",
      rating: 5,
      category: "customized-scrapbooks",
      description: "Birthday celebration memory book",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 8,
      name: "Mini Memories Scrapbook",
      originalPrice: 936,
      price: 749,
      image: "/Mini Memories Scrapbook.jpg?height=300&width=300",
      rating: 4,
      category: "customized-scrapbooks",
      description: "Compact memory scrapbook for special moments",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 9,
      name: "Baby Shower Scrapbook",
      originalPrice: 1499,
      price: 1199,
      image: "/BABY shower.jpg?height=300&width=300",
      rating: 5,
      category: "customized-scrapbooks",
      description: "Baby shower celebration memory book",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 10,
      name: "Engagement Scrapbook",
      originalPrice: 1374,
      price: 1099,
      image: "/Engagement Scrapbook.jpg?height=300&width=300",
      rating: 5,
      category: "customized-scrapbooks",
      description: "Engagement celebration memory album",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },

    // Chocolate Bouquets & Gifts (20% discount applied)
    {
      id: 11,
      name: "Chocolate Bouquet",
      originalPrice: 1874,
      price: 1499,
      image: "/Chocolate Boquet.jpg?height=300&width=300",
      rating: 5,
      category: "chocolate-bouquets",
      description: "Beautiful chocolate flower bouquet arrangement",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 12,
      name: "Customized Gifts Bouquet",
      originalPrice: 1624,
      price: 1299,
      image: "/Customized Gifts Bouquet.jpg?height=300&width=300",
      rating: 5,
      category: "chocolate-bouquets",
      description: "Personalized gift bouquet with chocolates",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 13,
      name: "Paper Flowers Bouquet",
      originalPrice: 1249,
      price: 999,
      image: "/Paper Flowers Bouquet.jpg?height=300&width=300",
      rating: 4,
      category: "chocolate-bouquets",
      description: "Paper flowers bouquet with chocolate treats",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 14,
      name: "Photos Bouquet",
      originalPrice: 999,
      price: 799,
      image: "/Photos Bouquet.jpg?height=300&width=300",
      rating: 5,
      category: "chocolate-bouquets",
      description: "Photo memory bouquet with chocolate gifts",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },

    // Creative Chocolate Hampers (20% discount applied)
    {
      id: 15,
      name: "Chocolate Cake Hamper",
      originalPrice: 1749,
      price: 1399,
      image: "/Chocolate Cake Hamper.jpg?height=300&width=300",
      rating: 5,
      category: "creative-chocolate-hampers",
      description: "Delicious chocolate cake with treats hamper",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 16,
      name: "Mini Gift Hamper Handmade",
      originalPrice: 1124,
      price: 899,
      image: "/Mini Gift Hamper Handmade.jpg?height=300&width=300",
      rating: 5,
      category: "creative-chocolate-hampers",
      description: "Handcrafted mini gift hamper with chocolates",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 17,
      name: "Mini Bouquet Handmade",
      originalPrice: 936,
      price: 749,
      image: "/Mini Bouquet Handmade.jpg?height=300&width=300",
      rating: 4,
      category: "creative-chocolate-hampers",
      description: "Handmade mini bouquet with chocolate surprises",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },

    // Designer Cakes & Chocolate Cakes (20% discount applied)
    {
      id: 18,
      name: "Designer Chocolate Cake",
      originalPrice: 1999,
      price: 1599,
      image: "/Designer Chocolate Cake.jpg?height=300&width=300",
      rating: 5,
      category: "designer-cakes",
      description: "Custom designer chocolate cake",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 19,
      name: "Themed Designer Cake",
      originalPrice: 1749,
      price: 1399,
      image: "/Themed Designer Cake.jpg?height=300&width=300",
      rating: 5,
      category: "designer-cakes",
      description: "Custom themed designer cake",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 20,
      name: "Chocolate Art Cake",
      originalPrice: 1624,
      price: 1299,
      image: "/Chocolate Art Cake.jpg?height=300&width=300",
      rating: 5,
      category: "designer-cakes",
      description: "Artistic chocolate cake design",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },

    // Paper Art Teddy Bears (20% discount applied)
    {
      id: 21,
      name: "Classic Paper Art Teddy",
      originalPrice: 749,
      price: 599,
      image: "/Classic Paper Art Teddy.jpg?height=300&width=300",
      rating: 5,
      category: "paper-art-teddies",
      description: "Handcrafted paper art teddy bear",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 22,
      name: "Personalized Paper Teddy",
      originalPrice: 1249,
      price: 999,
      image: "/Personalized Paper Teddy.jpg?height=300&width=300",
      rating: 5,
      category: "paper-art-teddies",
      description: "Custom name paper art teddy bear",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 23,
      name: "Couple Paper Teddy Set",
      originalPrice: 1499,
      price: 1199,
      image: "/Couple Paper Teddy Set.jpg?height=300&width=300",
      rating: 5,
      category: "paper-art-teddies",
      description: "Romantic couple paper teddy bear set",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },

    // Paper Roses & Flower Crafts (20% discount applied)
    {
      id: 24,
      name: "Paper Rose Bouquet",
      originalPrice: 999,
      price: 799,
      image: "/Paper Rose Bouquet.jpg?height=300&width=300",
      rating: 5,
      category: "paper-roses-crafts",
      description: "Handcrafted paper rose bouquet",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 25,
      name: "Mixed Paper Flower Craft",
      originalPrice: 874,
      price: 699,
      image: "/Mixed Paper Flower Craft.jpg?height=300&width=300",
      rating: 4,
      category: "paper-roses-crafts",
      description: "Beautiful mixed paper flower arrangement",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 26,
      name: "Paper Lily Craft",
      originalPrice: 1124,
      price: 899,
      image: "/Paper Lily Craft.jpg?height=300&width=300",
      rating: 5,
      category: "paper-roses-crafts",
      description: "Elegant paper lily flower craft",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },

    // Frame Collection
    {
      id: 27,
      name: "Customized Frame",
      originalPrice: 749,
      price: 599,
      image: "/Customized Frame.jpg?height=300&width=300",
      rating: 5,
      category: "handmade-box-cards",
      description: "Personalized custom photo frame",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 28,
      name: "Photo Frame",
      originalPrice: 624,
      price: 499,
      image: "/Photo Frame.jpg?height=300&width=300",
      rating: 4,
      category: "handmade-box-cards",
      description: "Beautiful decorative photo frame",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 29,
      name: "Memories Frame",
      originalPrice: 874,
      price: 699,
      image: "/Memories Frame.jpg?height=300&width=300",
      rating: 5,
      category: "handmade-box-cards",
      description: "Special memories photo frame collection",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 30,
      name: "Print Frame",
      originalPrice: 561,
      price: 449,
      image: "/Print Frame.jpg?height=300&width=300",
      rating: 4,
      category: "handmade-box-cards",
      description: "Custom print photo frame",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ]

  const filteredGifts =
    selectedCategory === "all"
      ? allGifts
      : selectedCategory === "customize"
        ? allGifts
        : allGifts.filter((gift) => gift.category === selectedCategory)

  const addToCart = (gift: GiftItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === gift.id)
      if (existingItem) {
        return prevCart.map((item) => (item.id === gift.id ? { ...item, quantity: item.quantity + 1 } : item))
      } else {
        return [...prevCart, { ...gift, quantity: 1 }]
      }
    })
  }

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== id))
    } else {
      setCart((prevCart) => prevCart.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const calculateBill = (): BillDetails => {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const urgentFee = deliveryOption === "1-2" ? Math.round(subtotal * 0.2) : 0
    const anonymousFee = isAnonymous ? 79 : 0
    const total = subtotal + urgentFee + anonymousFee
    const advancePayment = Math.round(total * 0.4)

    return {
      subtotal,
      urgentFee,
      anonymousFee,
      advancePayment,
      total,
    }
  }

  const generateWhatsAppMessage = () => {
    if (cart.length === 0) {
      return encodeURIComponent("Hi, I'd like to browse your gift collection! 🎁")
    }

    const bill = calculateBill()
    const deliveryText = deliveryOption === "1-2" ? "1-2 days (Urgent)" : "5-7 days (Standard)"

    let message = `🎁 *NEW GIFT ORDER* 🎁\n\n`
    message += `📦 *ITEMS ORDERED:*\n`

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} x${item.quantity} - ₹${item.price * item.quantity}\n`
    })

    message += `\n💰 *BILL SUMMARY:*\n`
    message += `Subtotal: ₹${bill.subtotal}\n`

    if (bill.urgentFee > 0) {
      message += `Urgent Delivery (20%): ₹${bill.urgentFee}\n`
    }

    if (bill.anonymousFee > 0) {
      message += `Anonymous Gift: ₹${bill.anonymousFee}\n`
    }

    message += `*Total: ₹${bill.total}*\n`
    message += `*Advance Payment (40%): ₹${bill.advancePayment}*\n\n`

    message += `🚚 Delivery: ${deliveryText}\n`

    if (recipientName) {
      message += `👤 Recipient: ${recipientName}\n`
    }

    if (isAnonymous) {
      message += `🤫 Anonymous Gift: Yes\n`
    }

    if (giftMessage) {
      message += `💌 Message: ${giftMessage}\n`
    }

    message += `\nPlease confirm this order and share payment details! 💖`

    return encodeURIComponent(message)
  }

  const generateCustomizationMessage = () => {
    if (!customizeProduct) return ""

    let message = `🎨 *CUSTOMIZATION REQUEST* 🎨\n\n`
    message += `📦 *PRODUCT:* ${customizeProduct.name}\n`
    message += `💰 *Base Price:* ₹${customizeProduct.price}\n\n`
    message += `✨ *CUSTOMIZATION DETAILS:*\n${customizationMessage}\n\n`
    message += `Please let me know the additional cost and timeline for this customization. Thank you! 💖`

    return encodeURIComponent(message)
  }

  const handleWhatsAppClick = () => {
    const message = generateWhatsAppMessage()
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
    // Clear cart and reset bill-related state
    setCart([])
    setGiftMessage("")
    setRecipientName("")
    setIsAnonymous(false)
    setDeliveryOption("5-7")
  }

  const handleCustomizationSend = () => {
    const message = generateCustomizationMessage()
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
    setCustomizeProduct(null)
    setCustomizationMessage("")
  }

  const handleQuickChat = () => {
    const message = encodeURIComponent("Hi")
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
    setShowQuickChatDialog(true)
    setTimeout(() => setShowQuickChatDialog(false), 3000)
  }

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId)
    if (categoryId !== "customize") {
      document.getElementById("featured-gifts")?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleVideoClick = (videoUrl: string) => {
    window.open(videoUrl, "_blank")
  }

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/our_little_knots?igsh=MTRzMGIxdXI0Mmp2NQ==", "_blank")
  }

  const bill = calculateBill()
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const selectedCategoryName =
    selectedCategory === "all"
      ? "All Gifts"
      : selectedCategory === "customize"
        ? "Customize Your Gift"
        : giftCategories.find((cat) => cat.id === selectedCategory)?.name || "All Gifts"

  // Show loader while loading and only on client side
  if (isLoading && isClient) {
    return <GiftLoader onLoadingComplete={handleLoadingComplete} />
  }

  // Show a simple loading state during SSR
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
            GiftLove
          </h1>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent script-font">
              Our little knots
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="border-pink-300 text-pink-600 hover:bg-pink-50"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button
              onClick={() => setShowCart(!showCart)}
              variant="outline"
              className="relative border-pink-300 text-pink-600 hover:bg-pink-50"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Cart
              {cartItemsCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-1.5 py-0.5">
                  {cartItemsCount}
                </Badge>
              )}
            </Button>
            <Button onClick={handleQuickChat} className="bg-green-500 hover:bg-green-600 text-white">
              <MessageCircle className="w-4 h-4 mr-2" />
              Quick Chat
            </Button>
          </div>
        </div>
      </header>

      {/* Quick Chat Dialog */}
      <Dialog open={showQuickChatDialog} onOpenChange={setShowQuickChatDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-green-600">✅ Message Sent!</DialogTitle>
          </DialogHeader>
          <div className="text-center py-6">
            <MessageCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <p className="text-lg font-semibold text-gray-800 mb-2">Connecting you with our team!</p>
            <p className="text-gray-600">Our team will respond as soon as possible. Thank you for reaching out! 💖</p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Customization Dialog */}
      <Dialog open={!!customizeProduct} onOpenChange={() => setCustomizeProduct(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Palette className="w-5 h-5 mr-2 text-pink-600" />
              Customize Your Gift
            </DialogTitle>
          </DialogHeader>
          {customizeProduct && (
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-pink-50 rounded-lg">
                <img
                  src={customizeProduct.image || "/placeholder.svg"}
                  alt={customizeProduct.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{customizeProduct.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500 line-through">₹{customizeProduct.originalPrice}</span>
                    <span className="text-lg font-bold text-pink-600">₹{customizeProduct.price}</span>
                    <Badge className="bg-green-100 text-green-800 text-xs">20% OFF</Badge>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Describe your customization requirements:
                </label>
                <Textarea
                  placeholder="Tell us how you'd like to customize this gift... (e.g., add name, change color, special message, etc.)"
                  value={customizationMessage}
                  onChange={(e) => setCustomizationMessage(e.target.value)}
                  className="border-pink-200 focus:border-pink-400"
                  rows={4}
                />
              </div>

              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-700">
                  💡 <strong>Tip:</strong> Be specific about colors, text, sizes, or any special requirements. Our team
                  will provide you with customization options and pricing.
                </p>
              </div>

              <div className="flex space-x-3">
                <Button
                  onClick={handleCustomizationSend}
                  disabled={!customizationMessage.trim()}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Send to WhatsApp
                </Button>
                <Button onClick={() => setCustomizeProduct(null)} variant="outline" className="flex-1">
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Filter Sidebar */}
      {showFilters && (
        <div className="fixed inset-0 bg-black/50 z-50 flex">
          <div className="bg-white w-full max-w-sm h-full overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Filter Gifts</h2>
                <Button onClick={() => setShowFilters(false)} variant="ghost" size="sm">
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-700">Categories</h3>
                <div className="space-y-2">
                  <Button
                    onClick={() => {
                      setSelectedCategory("all")
                      setShowFilters(false)
                    }}
                    variant={selectedCategory === "all" ? "default" : "outline"}
                    className="w-full justify-start"
                  >
                    All Gifts ({allGifts.length})
                  </Button>
                  {giftCategories.map((category) => {
                    const categoryCount =
                      category.id === "customize"
                        ? allGifts.length
                        : allGifts.filter((gift) => gift.category === category.id).length
                    return (
                      <Button
                        key={category.id}
                        onClick={() => {
                          setSelectedCategory(category.id)
                          setShowFilters(false)
                        }}
                        variant={selectedCategory === category.id ? "default" : "outline"}
                        className="w-full justify-start"
                      >
                        {category.icon} {category.name} ({categoryCount})
                      </Button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
          <div className="bg-white w-full max-w-md h-full overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
                <Button onClick={() => setShowCart(false)} variant="ghost" size="sm">
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <Card key={item.id} className="p-4">
                        <div className="flex items-center space-x-4">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg bg-pink-100"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-sm">{item.name}</h3>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-gray-500 line-through">₹{item.originalPrice}</span>
                              <span className="text-pink-600 font-bold">₹{item.price}</span>
                              <Badge className="bg-green-100 text-green-800 text-xs">20% OFF</Badge>
                            </div>
                            <div className="flex items-center space-x-2 mt-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 p-0"
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 p-0"
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 hover:text-red-700 ml-2"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>

                  {/* Bill Summary in Cart */}
                  <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <Receipt className="w-5 h-5 mr-2" />
                        Bill Summary
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>₹{bill.subtotal}</span>
                      </div>
                      {bill.urgentFee > 0 && (
                        <div className="flex justify-between text-orange-600">
                          <span>Urgent Fee (20%):</span>
                          <span>₹{bill.urgentFee}</span>
                        </div>
                      )}
                      {bill.anonymousFee > 0 && (
                        <div className="flex justify-between text-purple-600">
                          <span>Anonymous Gift:</span>
                          <span>₹{bill.anonymousFee}</span>
                        </div>
                      )}
                      <Separator />
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total:</span>
                        <span>₹{bill.total}</span>
                      </div>
                      <div className="flex justify-between text-green-600 font-semibold">
                        <span>Advance (40%):</span>
                        <span>₹{bill.advancePayment}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Button
                    onClick={() => {
                      setShowCart(false)
                      document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
                  >
                    Proceed to Checkout
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 text-lg mb-4">
                <Sparkles className="w-4 h-4 mr-2" />🎉 MEGA SALE - 20% OFF ON ALL GIFTS! 🎉
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Send Love. Send Gifts.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Create magical moments with our curated gift collection.
              <br />
              <span className="text-pink-500 font-semibold">Express your love in the most beautiful way! 💖</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 text-lg"
                onClick={() => document.getElementById("featured-gifts")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Heart className="w-5 h-5 mr-2" />
                Shop Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg bg-transparent"
                onClick={() => document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Categories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">🎁 Gift Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {giftCategories.map((category) => {
              const categoryCount =
                category.id === "customize"
                  ? allGifts.length
                  : allGifts.filter((gift) => gift.category === category.id).length
              return (
                <Card
                  key={category.id}
                  className={`hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-pink-100 cursor-pointer ${
                    category.id === "customize"
                      ? "border-2 border-pink-300 bg-gradient-to-br from-pink-50 to-purple-50"
                      : ""
                  }`}
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="font-semibold text-gray-800 mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                    <Badge variant="secondary" className="text-xs">
                      {category.id === "customize" ? "All items" : `${categoryCount} items`}
                    </Badge>
                    {category.id === "customize" && (
                      <div className="mt-2">
                        <Badge className="bg-pink-500 text-white text-xs">✨ NEW</Badge>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Gifts Section */}
      <section id="featured-gifts" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold text-gray-800">✨ {selectedCategoryName}</h2>
            {selectedCategory !== "all" && (
              <Button
                onClick={() => setSelectedCategory("all")}
                variant="outline"
                className="border-pink-300 text-pink-600 hover:bg-pink-50"
              >
                <X className="w-4 h-4 mr-2" />
                Clear Filter
              </Button>
            )}
          </div>

          <div className="text-center mb-8">
            <p className="text-gray-600">
              {selectedCategory === "customize" ? (
                <>
                  Choose any product below and customize it to your liking! 🎨
                  <br />
                  <span className="text-pink-600 font-semibold">All products available for customization</span>
                </>
              ) : (
                <>
                  Showing {filteredGifts.length} gift{filteredGifts.length !== 1 ? "s" : ""}
                  {selectedCategory !== "all" && ` in ${selectedCategoryName}`}
                </>
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGifts.map((gift) => (
              <Card
                key={gift.id}
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-pink-100 h-full flex flex-col"
              >
                <CardContent className="p-4 flex flex-col h-full">
                  <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                    <img
                      src={gift.image || "/placeholder.svg?height=300&width=300"}
                      alt={gift.name}
                      className="w-full h-full object-cover rounded-lg"
                      loading="lazy"
                    />
                    <Badge className="absolute top-2 right-2 bg-green-500 text-white text-xs">20% OFF</Badge>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <div className="mb-2">
                      <Badge variant="outline" className="text-xs mb-2">
                        {giftCategories.find((cat) => cat.id === gift.category)?.icon}{" "}
                        {giftCategories.find((cat) => cat.id === gift.category)?.name}
                      </Badge>
                    </div>

                    <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[3rem]">{gift.name}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-1">{gift.description}</p>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex flex-col">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500 line-through">₹{gift.originalPrice}</span>
                          <span className="text-lg font-bold text-pink-600">₹{gift.price}</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < gift.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Video Button */}
                    {gift.videoUrl && (
                      <Button
                        onClick={() => handleVideoClick(gift.videoUrl!)}
                        variant="outline"
                        size="sm"
                        className="w-full mb-2 border-red-300 text-red-600 hover:bg-red-50"
                      >
                        <Youtube className="w-4 h-4 mr-2" />
                        See in Video
                      </Button>
                    )}

                    <div className="flex space-x-2 mt-auto">
                      <Button
                        onClick={() => addToCart(gift)}
                        className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                      {selectedCategory === "customize" && (
                        <Button
                          onClick={() => setCustomizeProduct(gift)}
                          variant="outline"
                          className="border-pink-300 text-pink-600 hover:bg-pink-50"
                        >
                          <Palette className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredGifts.length === 0 && (
            <div className="text-center py-12">
              <Gift className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No gifts found in this category</p>
              <Button
                onClick={() => setSelectedCategory("all")}
                className="mt-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
              >
                View All Gifts
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Order Form Section */}
      <section id="order-form" className="py-16 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Order Form */}
              <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-pink-200">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">🎁 Complete Your Order</h2>
                    <p className="text-gray-600">Fill in the details and send via WhatsApp!</p>
                  </div>

                  <div className="space-y-6">
                    {/* Delivery Options */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Clock className="w-4 h-4 inline mr-2" />
                        Choose delivery option
                      </label>
                      <Select value={deliveryOption} onValueChange={setDeliveryOption}>
                        <SelectTrigger className="w-full border-pink-200 focus:border-pink-400">
                          <SelectValue placeholder="Select delivery option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5-7">5-7 days - Standard delivery</SelectItem>
                          <SelectItem value="1-2">1-2 days - Urgent delivery (+20% fee)</SelectItem>
                        </SelectContent>
                      </Select>
                      {deliveryOption === "1-2" && (
                        <p className="text-sm text-orange-600 mt-1">⚡ Urgent delivery includes 20% additional fee</p>
                      )}
                    </div>

                    {/* Recipient Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Recipient Name (Optional)</label>
                      <Input
                        placeholder="Who is this gift for?"
                        value={recipientName}
                        onChange={(e) => setRecipientName(e.target.value)}
                        className="border-pink-200 focus:border-pink-400"
                      />
                    </div>

                    {/* Anonymous Gift Option */}
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="anonymous"
                        checked={isAnonymous}
                        onCheckedChange={(checked) => setIsAnonymous(checked === true)}
                        className="border-pink-300"
                      />
                      <label htmlFor="anonymous" className="text-sm font-medium text-gray-700">
                        Send as Anonymous Gift (+₹79)
                      </label>
                    </div>

                    {/* Gift Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Special Message (Optional)</label>
                      <Textarea
                        placeholder="Add a personal touch to your gift..."
                        value={giftMessage}
                        onChange={(e) => setGiftMessage(e.target.value)}
                        className="border-pink-200 focus:border-pink-400"
                        rows={3}
                      />
                    </div>

                    {/* WhatsApp Button */}
                    <Button
                      onClick={handleWhatsAppClick}
                      className="w-full bg-green-500 hover:bg-green-600 text-white py-4 text-lg font-semibold"
                      size="lg"
                      disabled={cart.length === 0}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      {cart.length === 0 ? "Add items to cart first" : "Send Order via WhatsApp"}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      By clicking above, you'll be redirected to WhatsApp with your complete order and bill details.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Bill Generator */}
              <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-pink-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-gray-800 flex items-center justify-center">
                    <Receipt className="w-6 h-6 mr-2" />
                    Order Bill
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {cart.length === 0 ? (
                    <div className="text-center py-8">
                      <Receipt className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">Add items to see your bill</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {/* Items List */}
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-3">Items:</h3>
                        <div className="space-y-2">
                          {cart.map((item) => (
                            <div key={item.id} className="flex justify-between text-sm">
                              <span>
                                {item.name} x{item.quantity}
                              </span>
                              <span>₹{item.price * item.quantity}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      {/* Bill Calculation */}
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Subtotal:</span>
                          <span>₹{bill.subtotal}</span>
                        </div>

                        {bill.urgentFee > 0 && (
                          <div className="flex justify-between text-orange-600">
                            <span>Urgent Delivery (20%):</span>
                            <span>₹{bill.urgentFee}</span>
                          </div>
                        )}

                        {bill.anonymousFee > 0 && (
                          <div className="flex justify-between text-purple-600">
                            <span>Anonymous Gift:</span>
                            <span>₹{bill.anonymousFee}</span>
                          </div>
                        )}

                        <Separator />

                        <div className="flex justify-between font-bold text-lg">
                          <span>Total Amount:</span>
                          <span>₹{bill.total}</span>
                        </div>

                        <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                          <div className="flex justify-between text-green-700 font-semibold">
                            <span>Advance Payment (40%):</span>
                            <span>₹{bill.advancePayment}</span>
                          </div>
                          <p className="text-xs text-green-600 mt-1">Pay this amount to confirm your order</p>
                        </div>

                        <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                          <div className="flex justify-between text-blue-700">
                            <span>Remaining Amount:</span>
                            <span>₹{bill.total - bill.advancePayment}</span>
                          </div>
                          <p className="text-xs text-blue-600 mt-1">Pay on delivery</p>
                        </div>
                      </div>

                      {/* Delivery Info */}
                      <div className="bg-pink-50 p-3 rounded-lg border border-pink-200">
                        <p className="text-sm text-pink-700">
                          <strong>Delivery:</strong>{" "}
                          {deliveryOption === "1-2" ? "1-2 days (Urgent)" : "5-7 days (Standard)"}
                        </p>
                        {isAnonymous && (
                          <p className="text-sm text-purple-700 mt-1">
                            <strong>Anonymous Gift:</strong> Recipient won't know who sent it
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <Gift className="w-5 h-5 text-pink-600" />
                </div>
                <span className="text-xl font-bold">Our little knots </span>
              </div>
              <p className="text-pink-100">
               ✨ “सही उपहार वही है जो दिल को छू जाए… उसकी कीमत नहीं, उसकी अहमियत मायने रखती है।” 💖
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-pink-100">
                <li>
                  <a href="#categories" className="hover:text-white transition-colors">
                    Gift Categories
                  </a>
                </li>
                <li>
                  <a href="#featured-gifts" className="hover:text-white transition-colors">
                    Featured Gifts
                  </a>
                </li>
                <li>
                  <a href="#order-form" className="hover:text-white transition-colors">
                    Send a Gift
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-pink-300 text-pink-100 hover:bg-white hover:text-pink-600 bg-transparent"
                  onClick={handleQuickChat}
                >
                  <MessageCircle className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-pink-300 text-pink-100 hover:bg-white hover:text-pink-600 bg-transparent"
                  onClick={handleInstagramClick}
                >
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-pink-300 text-pink-100 hover:bg-white hover:text-pink-600 bg-transparent"
                >
                  <Facebook className="w-4 h-4" />
                </Button>
              </div>
              <div className="space-y-2 text-pink-100 text-sm">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+91 {whatsappNumber}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-pink-400 mt-8 pt-8 text-center text-pink-100">
            <p>&copy; 2025 Our little knots. 🌸 प्यार और खुशियाँ बाँटने के लिए दिल से बनाया गया। ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
