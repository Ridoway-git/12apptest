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
      <section className="hero-gradient text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Get Your App Approved on <span className="text-yellow-300">Google Play</span> with 12 Real Testers
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                14 Days | 12 Devices | Human Feedback | Fast Setup
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={whatsappLinks.start}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-colors inline-flex items-center justify-center"
                >
                  <i className="fab fa-whatsapp mr-3 text-xl"></i>Start Testing Now
                </a>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  Learn How It Works
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Multiple smartphones displaying app testing interface" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm">Real Testers</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-yellow-400 text-blue-600 p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">14</div>
                <div className="text-sm">Days Testing</div>
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
      <section id="pricing" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Choose Your Plan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Flexible pricing options for all app sizes and requirements</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Basic Plan */}
            <Card className="border-2 border-gray-200 hover:border-blue-600 transition-colors">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Plan</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">$19.99</div>
                  <div className="text-lg text-gray-500 line-through">$29.99</div>
                  <div className="text-lg font-semibold text-green-600">৳2000</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "App Size: 1 TO 50 MB",
                    "14 Day Testing",
                    "12 Real Testers",
                    "Full App Testing"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <i className="fas fa-check text-green-600 mr-3"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={whatsappLinks.basic}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                >
                  <i className="fab fa-whatsapp mr-2"></i>Start Testing
                </a>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-blue-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white px-4 py-2">Popular</Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro Plan</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">$23.99</div>
                  <div className="text-lg text-gray-500 line-through">$39.99</div>
                  <div className="text-lg font-semibold text-green-600">৳2500</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "App Size: 1 TO 150 MB",
                    "14 Day Testing",
                    "12 Real Testers",
                    "Full App Testing",
                    "Support via AnyDesk",
                    "Bug Report"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <i className="fas fa-check text-green-600 mr-3"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={whatsappLinks.pro}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                >
                  <i className="fab fa-whatsapp mr-2"></i>Start Testing
                </a>
              </CardContent>
            </Card>

            {/* Max Plan */}
            <Card className="border-2 border-gray-200 hover:border-blue-600 transition-colors">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Max Plan</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">$26.99</div>
                  <div className="text-lg text-gray-500 line-through">$49.99</div>
                  <div className="text-lg font-semibold text-green-600">৳2800</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "App Size: 1 TO 250 MB",
                    "14 Day Testing",
                    "12 Real Testers",
                    "Full App Testing",
                    "Additional Support",
                    "Bug Report",
                    "AnyDesk Help"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <i className="fas fa-check text-green-600 mr-3"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={whatsappLinks.max}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                >
                  <i className="fab fa-whatsapp mr-2"></i>Start Testing
                </a>
              </CardContent>
            </Card>

            {/* Bulk Plan */}
            <Card className="secondary-gradient border-2 border-green-600 text-white relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-yellow-400 text-gray-900 px-4 py-2">Best Value</Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Bulk Purchase</h3>
                  <div className="text-sm opacity-90 mb-2">(Advanced)</div>
                  <div className="text-4xl font-bold mb-2">$34.99+</div>
                  <div className="text-lg font-semibold">৳3500+</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "3 Apps or more",
                    "App Size: 1 TO 500 MB",
                    "All Max Plan Features",
                    "Personalized Support"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <i className="fas fa-check text-yellow-300 mr-3"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                  <li className="flex items-center">
                    <i className="fas fa-star text-yellow-300 mr-3"></i>
                    <span><strong>Bonus:</strong> 1 Multimedia App Source Code</span>
                  </li>
                </ul>
                
                <a 
                  href={whatsappLinks.bulk}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white text-green-600 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  <i className="fab fa-whatsapp mr-2"></i>Start Testing
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Success stories from developers who got their apps approved</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Super easy and reliable. My app got approved on Play Store smoothly.",
                name: "James R.",
                role: "App Developer",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
              },
              {
                text: "Great service. Daily activity updates were super helpful!",
                name: "Emily S.",
                role: "Mobile App Developer",
                image: "https://images.unsplash.com/photo-1494790108755-2616b332c100?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
              },
              {
                text: "I struggled before, but their 12 testers made my launch smooth.",
                name: "Mike T.",
                role: "Startup Founder",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-8">
                <CardContent className="p-0">
                  <div className="text-yellow-400 text-2xl mb-4">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image}
                      alt={`${testimonial.name} - ${testimonial.role}`}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-gray-500 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
