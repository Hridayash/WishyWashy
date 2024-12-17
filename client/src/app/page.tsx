
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Droplets, Building, Home, Star } from 'lucide-react'
import Logo from "../components/Logo"

export default function WindowCleaningPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      {/* Header */}
      <header className="bg-[#1e3a8a] text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Logo />
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li><a href="#services" className="hover:text-yellow-300">Services</a></li>
                <li><a href="#about" className="hover:text-yellow-300">About</a></li>
                <li><a href="#testimonials" className="hover:text-yellow-300">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
              </ul>
            </nav>
            {/* <Button variant="outline" size="sm" className="md:hidden">Menu</Button> */}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Window Cleaning Services</h1>
          <p className="text-xl mb-8">Making Your Windows Sparkle, One Pane at a Time</p>
          <a href="tel:2505746433">
          <Button size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
            Get a Free Quote
          </Button>
          </a>
         
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#1e3a8a]">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-yellow-400">
              <CardContent className="p-6">
                <Home className="w-12 h-12 text-[#1e3a8a] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#1e3a8a]">Residential</h3>
                <p className="text-gray-600">Expert window cleaning for homes of all sizes.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-yellow-400">
              <CardContent className="p-6">
                <Building className="w-12 h-12 text-[#1e3a8a] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#1e3a8a]">Commercial</h3>
                <p className="text-gray-600">Keep your business looking professional with spotless windows.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-yellow-400">
              <CardContent className="p-6">
                <Droplets className="w-12 h-12 text-[#1e3a8a] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#1e3a8a]">Special Projects</h3>
                <p className="text-gray-600">Custom solutions for unique window cleaning needs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-r from-blue-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4a631f23-7ac1-48cd-9113-0cc9fe74eb2c-B94zOdx3XTVMXtDuAVeQwLHHnQlspF.jpeg"
                alt="Eric cleaning windows with a smile"
                width={400}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold mb-4 text-[#1e3a8a]">About Eric</h2>
              <p className="mb-4 text-gray-700">
                Hi there! I'm Eric, your dedicated window cleaning professional. With years of experience, I've been bringing clarity and shine to homes and businesses across our community.
              </p>
              <p className="mb-4 text-gray-700">
                My commitment to quality and attention to detail ensures that every window I clean sparkles. I believe in providing personalized service and using professional techniques to deliver the best results.
              </p>
              <p className="text-gray-700">
                I use eco-friendly cleaning solutions and professional-grade equipment to ensure your windows shine while we take care of our environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#1e3a8a]">What Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-yellow-400">
              <CardContent className="p-6">
                <Star className="w-8 h-8 text-yellow-400 mb-4" />
                <p className="mb-4 text-gray-700">"Eric is a true professional. His attention to detail is outstanding!"</p>
                <p className="font-semibold text-[#1e3a8a]">- Sarah T.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-yellow-400">
              <CardContent className="p-6">
                <Star className="w-8 h-8 text-yellow-400 mb-4" />
                <p className="mb-4 text-gray-700">"Prompt, professional, and perfect results. Eric's service is top-notch!"</p>
                <p className="font-semibold text-[#1e3a8a]">- John R.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#1e3a8a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-8">Ready for crystal clear windows? Contact Eric for a free quote!</p>
          <div className="flex flex-col items-center space-y-4">
            <p>Phone: 250-574-6433</p>
            <Button size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
              Schedule Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Crystal Clear Windows by Eric. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

