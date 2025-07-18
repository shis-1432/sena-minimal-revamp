import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-hero text-primary-foreground">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2240%22%20height=%2240%22%20viewBox=%220%200%2040%2040%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22white%22%20fill-opacity=%220.1%22%3E%3Cpath%20d=%22M20%2020c0%2011.046-8.954%2020-20%2020s-20-8.954-20-20%208.954-20%2020-20%2020%208.954%2020%2020z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                शिवसेना
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium">
                आमचे प्रेरणास्थान
              </p>
              <p className="text-lg text-primary-foreground/80 max-w-2xl leading-relaxed">
                मराठी मनाची ताकद, शिवसंकल्पनेचा वणवा - बाळासाहेबांची दूरदृष्टी, दिघे साहेबांची कार्यनिष्ठा आणि शिंदे साहेबांचं जनतेशी जोडलेलं बळ.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                आमच्या कार्याबद्दल अधिक जाणून घ्या
              </Button>
              <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
                संपर्क करा
              </Button>
            </div>
          </div>

          {/* Right side - Leaders */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Balasaheb Thackeray */}
              <div className="text-center space-y-3">
                <div className="relative mx-auto w-24 h-24 rounded-full overflow-hidden bg-white/10 backdrop-blur">
                  <img 
                    src="https://shivsena.zaplontech.com/wp-content/uploads/2025/05/bal-thackery4-621x414-1.jpg" 
                    alt="बाळासाहेब ठाकरे"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-white">हिंदू हृदयसम्राट</h3>
                  <p className="text-sm text-white/80">बाळासाहेब ठाकरे</p>
                </div>
              </div>

              {/* Anand Dighe */}
              <div className="text-center space-y-3">
                <div className="relative mx-auto w-24 h-24 rounded-full overflow-hidden bg-white/10 backdrop-blur">
                  <img 
                    src="https://shivsena.zaplontech.com/wp-content/uploads/2025/05/Anand-dighe-web-new.jpg" 
                    alt="आनंद दिघे"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-white">धर्मवीर</h3>
                  <p className="text-sm text-white/80">आनंद दिघे साहेब</p>
                </div>
              </div>

              {/* Eknath Shinde */}
              <div className="text-center space-y-3">
                <div className="relative mx-auto w-24 h-24 rounded-full overflow-hidden bg-white/10 backdrop-blur">
                  <img 
                    src="https://shivsena.zaplontech.com/wp-content/uploads/2025/05/website-photo4.1.jpg" 
                    alt="एकनाथ शिंदे"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-white">मुख्यमंत्री</h3>
                  <p className="text-sm text-white/80">एकनाथ शिंदे</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero