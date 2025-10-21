"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/9037232/pexels-photo-9037232.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A diverse group gathers to clean the beach, promoting environmental conservation." },
  { "id": "about-image", "url": "https://images.pexels.com/photos/7314658/pexels-photo-7314658.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of multiple hands playing a piano, symbolizing teamwork." },
  { "id": "team-member-1", "url": "https://images.pexels.com/photos/34373994/pexels-photo-34373994.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Young Tibetan Woman, Dege, Sichuan, China" },
  { "id": "team-member-2", "url": "https://images.pexels.com/photos/34319195/pexels-photo-34319195.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "happy diverse group - Photo by Khaliifah  hussein" },
  { "id": "social-logo-1", "url": "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Interior view of Microsoft office with logo on wooden wall in Brussels, Belgium." },
  { "id": "social-logo-2", "url": "https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of a tablet displaying Google's search screen, emphasizing technology and internet browsing." },
  { "id": "social-logo-3", "url": "https://images.pexels.com/photos/544295/pexels-photo-544295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of a black and white Apple logo on a desktop screen with a modern minimalist design." },
  { "id": "social-logo-4", "url": "https://images.pexels.com/photos/9826021/pexels-photo-9826021.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Diverse group of adults supporting Giving Tuesday with enthusiasm indoors." },
  { "id": "social-logo-5", "url": "https://images.pexels.com/photos/9826021/pexels-photo-9826021.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Diverse group of adults supporting Giving Tuesday with enthusiasm indoors." },
  { "id": "social-logo-6", "url": "https://images.pexels.com/photos/11035538/pexels-photo-11035538.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A close-up of a person holding an NGINX sticker with a blurred background." },
  { "id": "social-logo-7", "url": "https://images.pexels.com/photos/9826021/pexels-photo-9826021.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Diverse group of adults supporting Giving Tuesday with enthusiasm indoors." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "home" },
            { name: "About Us", id: "about" },
            { name: "Our Work", id: "work" },
            { name: "Get Involved", id: "involved" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="NGO Example"
          button={{ text: "Donate", href: "donate-section" }}
        />
      </div>
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Empower Communities, Change Lives"
          description="Join our mission to make a meaningful impact in communities across the globe."
          imageSrc={assetMap.find(a => a.id === "hero-image")?.url}
          imageAlt={assetMap.find(a => a.id === "hero-image")?.alt}
          imagePosition="right"
          buttons={[{ text: "Learn More", href: "about" }, { text: "Get Involved", href: "involved" }]}
        />
      </div>
      <div id="about" data-section="about">
        <SplitAbout
          title="About Us"
          description="Learn more about our mission, values, and the impact we aim to achieve."
          imageSrc={assetMap.find(a => a.id === "about-image")?.url}
          bulletPoints={[
            { title: "Community", description: "Fostering local growth", icon: "Users" },
            { title: "Sustainability", description: "Long-term impact", icon: "Leaf" }
          ]}
        />
      </div>
      <div id="team" data-section="team">
        <TeamCardThree
          title="Our Team"
          description="Meet the people who make it all possible"
          members={[
            { id: "1", name: "John Doe", role: "Director", imageSrc: assetMap.find(a => a.id === "team-member-1")?.url },
            { id: "2", name: "Jane Smith", role: "Coordinator", imageSrc: assetMap.find(a => a.id === "team-member-2")?.url }
          ]}
        />
      </div>
      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Our Partners"
          description="Trusted by top organizations and programs"
          logos={[
            assetMap.find(a => a.id === "social-logo-1")?.url,
            assetMap.find(a => a.id === "social-logo-2")?.url,
            assetMap.find(a => a.id === "social-logo-3")?.url,
            assetMap.find(a => a.id === "social-logo-4")?.url,
            assetMap.find(a => a.id === "social-logo-5")?.url,
            assetMap.find(a => a.id === "social-logo-6")?.url,
            assetMap.find(a => a.id === "social-logo-7")?.url
          ]}
        />
      </div>
      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Contact Us"
          description="Get in touch with us to learn more about how you can get involved."
          inputs={[
            { name: "name", type: "text", placeholder: "Name", required: true },
            { name: "email", type: "email", placeholder: "Email", required: true }
          ]}
          textarea={{ name: "message", placeholder: "Your message", rows: 5, required: true }}
          buttonText="Send Message"
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            { title: "Our Work", items: [{ label: "Projects", href: "projects" }] },
            { title: "Get Involved", items: [{ label: "Volunteer", href: "volunteer" }] },
            { title: "Contact Us", items: [{ label: "Email", href: "mailto:contact@ngoexample.org" }] }
          ]}
          copyrightText="© 2025 | NGO Example"
          onPrivacyClick={() => console.log('Privacy clicked')}
        />
      </div>
    </ThemeProvider>
  );
}