use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { TrendingUp, Users, Award, Sparkles } from "lucide-react";

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/7679642/pexels-photo-7679642.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Businesswoman using smartphone at desk with laptop and coffee cup."},
  {"id":"feature-1-image","url":"https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Flatlay of a business analytics report, keyboard, pen, and smartphone on a wooden desk."},
  {"id":"feature-2-image","url":"https://images.pexels.com/photos/7108590/pexels-photo-7108590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Multicultural team discussing financial data and graphs in a modern office setting."},
  {"id":"product-1-image","url":"https://images.pexels.com/photos/7897470/pexels-photo-7897470.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Elegant beige cylindrical podiums for a sleek and minimal design presentation."},
  {"id":"pricing-image","url":"https://images.pexels.com/photos/7948060/pexels-photo-7948060.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Person analyzing financial charts and graphs on a laptop with colorful documents, showcasing market analysis."}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <NavbarLayoutFloatingInline
            navItems={[
              { name: "Features", id: "features" },
              { name: "Pricing", id: "pricing" },
              { name: "About", id: "about" },
              { name: "Contact", id: "contact" }
            ]}
            brandName="Webild"
          />
        </div>
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Our SaaS Solution"
            description="Revolutionize your productivity with our innovative platform."
            tag="New"
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url || "/public/images/placeholder.webp"}
            buttons={[
              { text: "Get Started", href: "https://example.com" },
              { text: "Learn More", href: "about" }
            ]}
          />
        </div>
      </div>
      <div id="features" data-section="features" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            features={[
              {
                title: "Advanced Analytics",
                description: "Gain insights with our comprehensive analytical tools.",
                icon: TrendingUp,
                imageSrc: assetMap.find(a => a.id === "feature-1-image")?.url || "/public/images/placeholder.webp"
              },
              {
                title: "Seamless Collaboration",
                description: "Work together with your team like never before.",
                icon: Users,
                imageSrc: assetMap.find(a => a.id === "feature-2-image")?.url || "/public/images/placeholder.webp"
              }
            ]}
            carouselMode="buttons"
            title="Our Features"
            description="Explore the key features of our SaaS platform."
          />
        </div>
      </div>
      <div id="products" data-section="products" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardOne
            products={[
              {
                id: "1",
                name: "Productivity Pro",
                price: "$29.00",
                imageSrc: assetMap.find(a => a.id === "product-1-image")?.url || "/public/images/placeholder.webp"
              },
              {
                id: "2",
                name: "Enterprise Suite",
                price: "$59.00",
                imageSrc: assetMap.find(a => a.id === "product-1-image")?.url || "/public/images/placeholder.webp"
              },
              {
                id: "3",
                name: "Starter Pack",
                price: "$19.00",
                imageSrc: assetMap.find(a => a.id === "product-1-image")?.url || "/public/images/placeholder.webp"
              }
            ]}
            title="Our Products"
          />
        </div>
      </div>
      <div id="pricing" data-section="pricing" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <PricingCardOne
            title="Choose Your Plan"
            description="Flexible pricing options for all business sizes."
            plans={[
              {
                id: "basic",
                badge: "Best Value",
                price: "$29/mo",
                subtitle: "For small teams",
                features: ["10 users", "Priority support"],
                badgeIcon: Sparkles
              },
              {
                id: "premium",
                badge: "Recommended",
                price: "$59/mo",
                subtitle: "For larger companies",
                features: ["Unlimited users", "Dedicated support"],
                badgeIcon: Award
              }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Newsletter"
            title="Stay Updated"
            description="Sign up for our newsletter for the latest news."
            inputPlaceholder="Your email address"
            buttonText="Sign Up"
            termsText="We respect your privacy. Unsubscribe anytime."
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              {
                title: "Product",
                items: [
                  { label: "Features", href: "features" },
                  { label: "Pricing", href: "pricing" }
                ]
              },
              {
                title: "Company",
                items: [
                  { label: "About", href: "about" },
                  { label: "Contact", href: "contact" }
                ]
              }
            ]}
            copyrightText="© 2025 | Webild"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
