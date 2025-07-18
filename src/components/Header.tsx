import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [{
    name: "मुखपृष्ठ",
    href: "#home"
  }, {
    name: "पक्षाविषयी",
    href: "#about",
    subItems: [{
      name: "इतिहास आणि वारसा",
      href: "#history"
    }, {
      name: "दृष्टीकोन आणि ध्येय",
      href: "#vision"
    }, {
      name: "संगठन रचना",
      href: "#organization"
    }]
  }, {
    name: "नेतृत्व",
    href: "#leadership",
    subItems: [{
      name: "बाळासाहेब ठाकरे",
      href: "#balasaheb"
    }, {
      name: "आनंद दिघे",
      href: "#anand-dighe"
    }, {
      name: "एकनाथ शिंदे",
      href: "#eknath-shinde"
    }]
  }, {
    name: "आमचे कार्य",
    href: "#work",
    subItems: [{
      name: "उपक्रम आणि प्रकल्प",
      href: "#initiatives"
    }, {
      name: "यशोगाथा आणि ठळक कामगिरी",
      href: "#achievements"
    }]
  }, {
    name: "बातम्या व माध्यमे",
    href: "#news"
  }, {
    name: "संपर्क",
    href: "#contact"
  }];
  return <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="https://shivsena.zaplontech.com/wp-content/uploads/2025/05/Shivsena-logo-3.png" alt="शिवसेना" className="h-10 w-auto" />
            
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map(item => <div key={item.name} className="relative group">
                <a href={item.href} className="text-foreground hover:text-primary transition-colors duration-200 py-2">
                  {item.name}
                </a>
                {item.subItems && <div className="absolute top-full left-0 mt-1 w-64 bg-card border border-border rounded-lg shadow-soft opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.subItems.map(subItem => <a key={subItem.name} href={subItem.href} className="block px-4 py-3 text-sm text-card-foreground hover:bg-muted hover:text-primary transition-colors">
                        {subItem.name}
                      </a>)}
                  </div>}
              </div>)}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden absolute top-16 left-0 right-0 bg-card border-b border-border shadow-lg">
            <nav className="px-4 py-4 space-y-2">
              {menuItems.map(item => <div key={item.name}>
                  <a href={item.href} className="block px-4 py-3 text-card-foreground hover:bg-muted hover:text-primary transition-colors rounded-md" onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </a>
                  {item.subItems && <div className="ml-4 space-y-1">
                      {item.subItems.map(subItem => <a key={subItem.name} href={subItem.href} className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                          {subItem.name}
                        </a>)}
                    </div>}
                </div>)}
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;