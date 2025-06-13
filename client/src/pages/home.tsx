import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (faqId: string) => {
    setOpenFaq(openFaq === faqId ? null : faqId);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappBase = "https://wa.me/8801845978534";
  
  const whatsappLinks = {
    general: `${whatsappBase}?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20app%20testing%20service`,
    start: `${whatsappBase}?text=Hi,%20I%20want%20to%20start%20testing%20my%20app%20now`,
    basic: `${whatsappBase}?text=Hi,%20I%20want%20to%20purchase%20the%20Basic%20Plan%20for%20app%20testing.`,
    pro: `${whatsappBase}?text=Hi,%20I%20want%20to%20purchase%20the%20Pro%20Plan%20for%20app%20testing.`,
    max: `${whatsappBase}?text=Hi,%20I%20want%20to%20purchase%20the%20Max%20Plan%20for%20app%20testing.`,
    bulk: `${whatsappBase}?text=Hi,%20I%20want%20to%20purchase%20the%20Bulk%20Purchase%20plan%20for%20app%20testing.`,
    help: `${whatsappBase}?text=Hi,%20I%20need%20help%20with%20app%20testing%20service`
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <i className="fas fa-mobile-alt text-2xl text-blue-600"></i>
              <h1 className="text-2xl font-bold text-blue-600">12 App Testers</h1>
            </div>
            <div className="hidden sm:flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                FAQ
              </button>
              <a 
                href={whatsappLinks.general}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <i className="fab fa-whatsapp mr-2"></i>Contact
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 lg:py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-yellow-300 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-400 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <Badge className="bg-green-600 text-white px-4 py-2 text-sm font-bold mb-4 inline-block pulse-animation">
                  ✅ 500+ Apps Successfully Approved
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Get Your App Approved on <span className="text-yellow-300 underline decoration-wavy">Google Play</span> with 12 Real Testers
              </h1>
              <p className="text-xl lg:text-2xl mb-6 text-blue-100">
                🚀 14 Days | 📱 12 Devices | 👥 Human Feedback | ⚡ Fast Setup
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8 text-center">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-300">99%</div>
                  <div className="text-sm">Success Rate</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-300">24h</div>
                  <div className="text-sm">Quick Start</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={whatsappLinks.start}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <i className="fab fa-whatsapp mr-3 text-xl"></i>Start Testing Now
                </a>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <i className="fas fa-tags mr-3"></i>View Pricing
                </button>
              </div>
              <div className="mt-6 flex items-center text-blue-100">
                <i className="fas fa-shield-alt mr-2"></i>
                <span className="text-sm">100% Money-Back Guarantee • No Risk</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Multiple smartphones displaying app testing interface" 
                className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-300"
              />
              {/* Floating stats cards */}
              <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-4 rounded-xl shadow-lg pulse-animation">
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm">Real Testers</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-yellow-400 text-blue-600 p-4 rounded-xl shadow-lg pulse-animation">
                <div className="text-2xl font-bold">14</div>
                <div className="text-sm">Days Testing</div>
              </div>
              <div className="absolute top-1/2 -left-4 bg-purple-600 text-white p-3 rounded-lg shadow-lg">
                <div className="text-lg font-bold">✓</div>
                <div className="text-xs">Approved</div>
              </div>
              {/* Floating testimonial */}
              <div className="absolute bottom-16 -right-8 bg-white text-gray-800 p-4 rounded-lg shadow-xl max-w-xs">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400 text-sm">★★★★★</div>
                </div>
                <p className="text-sm italic">"Got approved in just 10 days!"</p>
                <p className="text-xs text-gray-600 mt-1">- Sarah M., Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Simple 4-step process to get your app approved on Google Play Store</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Place Order",
                description: "Pay via bKash and choose your testing plan",
                icon: "fas fa-credit-card",
                color: "bg-blue-600"
              },
              {
                step: 2,
                title: "Get Tester Emails",
                description: "Receive 12 real tester email addresses",
                icon: "fas fa-envelope",
                color: "bg-blue-600"
              },
              {
                step: 3,
                title: "Submit Testing Link",
                description: "Share your closed testing link with us",
                icon: "fas fa-link",
                color: "bg-blue-600"
              },
              {
                step: 4,
                title: "App Gets Approved",
                description: "Your app passes Google Play requirements",
                icon: "fas fa-check-circle",
                color: "bg-green-600"
              }
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className={`${item.color} text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <i className={`${item.icon} text-3xl ${item.step === 4 ? 'text-green-600' : 'text-blue-600'}`}></i>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The most reliable app testing service for Google Play Store approval</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-users",
                title: "12 Real Human Testers",
                description: "Genuine users with real devices, not bots or emulators",
                color: "text-blue-600"
              },
              {
                icon: "fas fa-calendar-alt",
                title: "14-Day Full Testing",
                description: "All app pages tested daily for complete coverage",
                color: "text-blue-600"
              },
              {
                icon: "fas fa-chart-line",
                title: "Daily Reports",
                description: "Receive progress updates and testing activity reports",
                color: "text-blue-600"
              },
              {
                icon: "fas fa-mobile-alt",
                title: "Device Compatibility",
                description: "Testing across multiple Android devices and versions",
                color: "text-blue-600"
              },
              {
                icon: "fas fa-hand-paper",
                title: "100% Manual Testing",
                description: "No automation - real human interaction with your app",
                color: "text-blue-600"
              },
              {
                icon: "fas fa-money-bill-wave",
                title: "Money-Back Guarantee",
                description: "Full refund if testing is not completed properly",
                color: "text-green-600"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className={`${feature.color} text-4xl mb-4`}>
                    <i className={feature.icon}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose Your <span className="text-blue-600">Perfect Plan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transparent pricing with no hidden fees. Get your app approved faster than ever!
            </p>
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold">
              <i className="fas fa-shield-alt"></i>
              <span>100% Money-Back Guarantee</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Basic Plan */}
            <Card className="pricing-card border-2 border-gray-200 hover:border-blue-600 transition-all duration-300 bg-white">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-rocket text-2xl text-blue-600"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Plan</h3>
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-blue-600 mb-1">$19.99</div>
                    <div className="text-lg text-gray-500 line-through mb-1">$29.99</div>
                    <div className="text-lg font-semibold text-green-600">৳2,499</div>
                  </div>
                  <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Save $10
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {[
                    { text: "App Size: 1 TO 50 MB", icon: "fas fa-mobile-alt" },
                    { text: "14 Day Testing", icon: "fas fa-calendar-check" },
                    { text: "12 Real Testers", icon: "fas fa-users" },
                    { text: "Full App Testing", icon: "fas fa-check-circle" }
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <i className={`${feature.icon} text-green-600 mr-3 w-5`}></i>
                      <span className="text-gray-700">{feature.text}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={whatsappLinks.basic}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <i className="fab fa-whatsapp mr-2 text-xl"></i>Start Testing Now
                </a>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="pricing-card border-2 border-blue-600 relative bg-white floating-card">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white px-6 py-2 text-sm font-bold pulse-animation">
                  🔥 MOST POPULAR
                </Badge>
              </div>
              <CardContent className="p-8 h-full flex flex-col">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 feature-icon-bg rounded-full flex items-center justify-center">
                    <i className="fas fa-star text-2xl text-white"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Pro Plan</h3>
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-blue-600 mb-1">$23.99</div>
                    <div className="text-lg text-gray-500 line-through mb-1">$39.99</div>
                    <div className="text-lg font-semibold text-green-600">৳2,999</div>
                  </div>
                  <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Save $16
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {[
                    { text: "App Size: 1 TO 150 MB", icon: "fas fa-mobile-alt" },
                    { text: "14 Day Testing", icon: "fas fa-calendar-check" },
                    { text: "12 Real Testers", icon: "fas fa-users" },
                    { text: "Full App Testing", icon: "fas fa-check-circle" },
                    { text: "Support via AnyDesk", icon: "fas fa-desktop" },
                    { text: "Bug Report", icon: "fas fa-bug" }
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <i className={`${feature.icon} text-green-600 mr-3 w-5`}></i>
                      <span className="text-gray-700">{feature.text}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={whatsappLinks.pro}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <i className="fab fa-whatsapp mr-2 text-xl"></i>Start Testing Now
                </a>
              </CardContent>
            </Card>

            {/* Max Plan */}
            <Card className="pricing-card border-2 border-gray-200 hover:border-purple-600 transition-all duration-300 bg-white">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-crown text-2xl text-purple-600"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Max Plan</h3>
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-purple-600 mb-1">$26.99</div>
                    <div className="text-lg text-gray-500 line-through mb-1">$49.99</div>
                    <div className="text-lg font-semibold text-green-600">৳3,374</div>
                  </div>
                  <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Save $23
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {[
                    { text: "App Size: 1 TO 250 MB", icon: "fas fa-mobile-alt" },
                    { text: "14 Day Testing", icon: "fas fa-calendar-check" },
                    { text: "12 Real Testers", icon: "fas fa-users" },
                    { text: "Full App Testing", icon: "fas fa-check-circle" },
                    { text: "Additional Support", icon: "fas fa-headset" },
                    { text: "Bug Report", icon: "fas fa-bug" },
                    { text: "AnyDesk Help", icon: "fas fa-desktop" }
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <i className={`${feature.icon} text-green-600 mr-3 w-5`}></i>
                      <span className="text-gray-700">{feature.text}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={whatsappLinks.max}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-purple-600 text-white py-4 rounded-xl font-semibold hover:bg-purple-700 transition-colors inline-flex items-center justify-center text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <i className="fab fa-whatsapp mr-2 text-xl"></i>Start Testing Now
                </a>
              </CardContent>
            </Card>

            {/* Bulk Plan */}
            <Card className="pricing-card premium-gradient border-2 border-green-600 text-white relative floating-card">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-yellow-400 text-gray-900 px-6 py-2 text-sm font-bold">
                  💎 ENTERPRISE
                </Badge>
              </div>
              <CardContent className="p-8 h-full flex flex-col">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <i className="fas fa-gem text-2xl text-yellow-300"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Bulk Purchase</h3>
                  <div className="text-sm opacity-90 mb-4">(Advanced Plan)</div>
                  <div className="mb-4">
                    <div className="text-4xl font-bold mb-1">$34.99+</div>
                    <div className="text-lg font-semibold text-yellow-300">৳4,374+</div>
                  </div>
                  <div className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Best Value
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {[
                    { text: "3+ Apps Testing", icon: "fas fa-layer-group" },
                    { text: "App Size: Up to 500 MB", icon: "fas fa-expand-arrows-alt" },
                    { text: "All Max Plan Features", icon: "fas fa-check-double" },
                    { text: "Personalized Support", icon: "fas fa-user-tie" }
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <i className={`${feature.icon} text-yellow-300 mr-3 w-5`}></i>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                  <li className="flex items-start pt-2 border-t border-white border-opacity-20">
                    <i className="fas fa-gift text-yellow-300 mr-3 w-5 mt-1"></i>
                    <span><strong className="text-yellow-300">BONUS:</strong> 1 Premium App Source Code</span>
                  </li>
                </ul>
                
                <a 
                  href={whatsappLinks.bulk}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white text-purple-600 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <i className="fab fa-whatsapp mr-2 text-xl"></i>Start Testing Now
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Additional Trust Elements */}
          <div className="mt-16 text-center">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <i className="fas fa-shield-alt text-2xl text-green-600"></i>
                <span className="text-gray-700 font-semibold">Money-Back Guarantee</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <i className="fas fa-clock text-2xl text-blue-600"></i>
                <span className="text-gray-700 font-semibold">24/7 Support Available</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <i className="fas fa-users text-2xl text-purple-600"></i>
                <span className="text-gray-700 font-semibold">500+ Apps Approved</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Real Success Stories from <span className="text-blue-600">Happy Developers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join hundreds of developers who got their apps approved with our testing service
            </p>
            <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full font-semibold">
              <i className="fas fa-star"></i>
              <span>4.9/5 Average Rating from 150+ Reviews</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Super easy and reliable. My app got approved on Play Store smoothly. The daily reports were incredibly detailed and helped me understand exactly what Google was looking for.",
                name: "James Rodriguez",
                role: "Mobile App Developer",
                company: "TechStart Inc.",
                rating: 5,
                appType: "Social Media App",
                approvalTime: "8 days",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
              },
              {
                text: "Great service. Daily activity updates were super helpful! After 3 rejections on my own, these guys got my gaming app approved in just 12 days.",
                name: "Emily Chen",
                role: "Indie Game Developer", 
                company: "PixelCraft Studios",
                rating: 5,
                appType: "Gaming App",
                approvalTime: "12 days",
                image: "https://images.unsplash.com/photo-1494790108755-2616b332c100?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
              },
              {
                text: "I struggled before, but their 12 testers made my launch smooth. Professional service with real human feedback. Worth every penny for the peace of mind.",
                name: "Michael Thompson",
                role: "Startup Founder",
                company: "EduTech Solutions",
                rating: 5,
                appType: "Education App",
                approvalTime: "10 days",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="testimonial-card p-8 h-full">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-yellow-400 text-lg">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                    <Badge className="bg-green-100 text-green-800 text-xs">
                      Approved in {testimonial.approvalTime}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-700 mb-6 italic text-lg leading-relaxed flex-grow">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex items-center mb-3">
                      <img 
                        src={testimonial.image}
                        alt={`${testimonial.name} - ${testimonial.role}`}
                        className="w-14 h-14 rounded-full mr-4 border-2 border-blue-200"
                      />
                      <div>
                        <div className="font-bold text-gray-900">{testimonial.name}</div>
                        <div className="text-blue-600 text-sm font-semibold">{testimonial.role}</div>
                        <div className="text-gray-500 text-xs">{testimonial.company}</div>
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 text-center">
                      <div className="text-sm text-gray-600">App Category</div>
                      <div className="font-semibold text-gray-800">{testimonial.appType}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600 text-sm">Apps Approved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">99%</div>
                <div className="text-gray-600 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">24h</div>
                <div className="text-gray-600 text-sm">Quick Start</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">4.9★</div>
                <div className="text-gray-600 text-sm">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our testing service</p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                id: "faq1",
                question: "Are the testers real people?",
                answer: "Yes, all our testers are real human beings with genuine Android devices. We do not use bots, emulators, or fake accounts. Each tester is verified and uses their personal device for testing."
              },
              {
                id: "faq2",
                question: "What if my app is rejected?",
                answer: "If your app gets rejected after our testing, we'll provide a detailed report and work with you to resolve the issues. We offer one free re-testing cycle if the rejection is related to testing requirements."
              },
              {
                id: "faq3",
                question: "How long before testing starts?",
                answer: "Testing begins within 2-4 hours after payment confirmation and receiving your closed testing link. Our testers are available 24/7 to ensure quick turnaround times."
              },
              {
                id: "faq4",
                question: "Will testers use emulators?",
                answer: "No, absolutely not. We strictly use real Android devices. Google Play can detect emulator usage, which could harm your app's approval chances. All our testers use their personal smartphones and tablets."
              },
              {
                id: "faq5",
                question: "Do I get refund if something goes wrong?",
                answer: "Yes, we offer a 100% money-back guarantee if we fail to complete the testing properly or if there are issues on our end. Your satisfaction and app's success are our top priorities."
              },
              {
                id: "faq6",
                question: "What payment methods do you accept?",
                answer: "Currently, we accept bKash Personal payments (01845978534). We're working on adding more payment options including international methods. Contact us for alternative payment arrangements."
              }
            ].map((faq) => (
              <Card key={faq.id} className="bg-gray-50 overflow-hidden">
                <button 
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <i className={`fas fa-chevron-down text-blue-600 transform transition-transform ${openFaq === faq.id ? 'rotate-180' : ''}`}></i>
                </button>
                {openFaq === faq.id && (
                  <div className="px-8 py-6 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">Support available 24/7. We're always here to help.</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8 text-center">
                <i className="fab fa-whatsapp text-4xl mb-4"></i>
                <h3 className="text-xl font-semibold mb-4">WhatsApp</h3>
                <p className="mb-4 text-blue-100">Get instant support and place orders</p>
                <a 
                  href={whatsappLinks.help}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors inline-flex items-center"
                >
                  <i className="fab fa-whatsapp mr-2"></i>+8801845978534
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8 text-center">
                <i className="fas fa-envelope text-4xl mb-4"></i>
                <h3 className="text-xl font-semibold mb-4">Email</h3>
                <p className="mb-4 text-blue-100">Send us detailed inquiries</p>
                <a 
                  href="mailto:contact@codelagbe.store" 
                  className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  <i className="fas fa-envelope mr-2"></i>contact@codelagbe.store
                </a>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Payment Information</h3>
              <p className="text-blue-100 mb-4">We accept bKash Personal for quick and secure payments</p>
              <div className="text-lg font-semibold">
                <i className="fas fa-mobile-alt mr-2"></i>bKash: 01845978534
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <i className="fas fa-mobile-alt text-2xl text-blue-600"></i>
                <h3 className="text-xl font-bold">12 App Testers</h3>
              </div>
              <p className="text-gray-400">Professional app testing service for Google Play Store approval with real human testers.</p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('pricing')} className="text-gray-400 hover:text-white transition-colors">Pricing</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="text-gray-400 hover:text-white transition-colors">FAQ</button></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  <i className="fab fa-whatsapp mr-2"></i>+8801845978534
                </li>
                <li className="text-gray-400">
                  <i className="fas fa-envelope mr-2"></i>contact@codelagbe.store
                </li>
                <li className="text-gray-400">
                  <i className="fas fa-globe mr-2"></i>12apptesters.codelagbe.store
                </li>
              </ul>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white text-2xl transition-colors">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-2xl transition-colors">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-2xl transition-colors">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8">
            <div className="text-center text-gray-400">
              <p className="mb-2">12AppTesters is an independent third-party service. We are not affiliated with Google LLC.</p>
              <p>&copy; 2024 12 App Testers. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
