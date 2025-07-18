import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
const Footer = () => {
  const quickLinks = [{
    name: "मुखपृष्ठ",
    href: "#home"
  }, {
    name: "पक्षाविषयी",
    href: "#about"
  }, {
    name: "नेतृत्व",
    href: "#leadership"
  }, {
    name: "आमचे कार्य",
    href: "#work"
  }, {
    name: "बातम्या व माध्यमे",
    href: "#news"
  }, {
    name: "संपर्क",
    href: "#contact"
  }];
  const socialLinks = [{
    icon: Facebook,
    href: "#",
    label: "Facebook"
  }, {
    icon: Twitter,
    href: "#",
    label: "Twitter"
  }, {
    icon: Instagram,
    href: "#",
    label: "Instagram"
  }, {
    icon: Youtube,
    href: "#",
    label: "YouTube"
  }];
  return <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src="https://shivsena.zaplontech.com/wp-content/uploads/2025/05/Shivsena-logo-3.png" alt="शिवसेना" className="h-12 w-auto" />
              
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-lg">
              शिवसेना ही महाराष्ट्राच्या अस्मितेचा बुलंद आवाज आहे. मराठी अभिमान, सामाजिक न्याय आणि निःस्वार्थ सेवाभाव या मूल्यांवर आधारलेली शिवसेना, महाराष्ट्राच्या इतिहासात महत्त्वपूर्ण योगदान देत आली आहे.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => <Button key={index} variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground" asChild>
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>)}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">द्रुत लिंक्स</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">संपर्क माहिती</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    शिवसेना भवन,<br />
                    दादर, मुंबई,<br />
                    महाराष्ट्र ४०० ०२८
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">+91 22 2444 6000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">info@shivsena.org</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © २०२५ शिवसेना. सर्व हक्क राखीव.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              गोपनीयता धोरण
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              अटी आणि शर्ती
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;