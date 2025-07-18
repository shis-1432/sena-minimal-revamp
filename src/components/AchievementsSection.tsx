import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

const AchievementsSection = () => {
  const achievements = [
    {
      image: "https://shivsena.zaplontech.com/wp-content/uploads/2025/05/4.jpg",
      title: "२०२४ विधानसभा निवडणुकांतील दणदणीत विजय",
      description: "शिवसेना (एकनाथ शिंदे गट), भाजप व राष्ट्रवादी काँग्रेस यांच्या महायुतीने एकत्र येत २८८ पैकी २३५ जागांवर विजय मिळवून राज्यात सत्ता कायम ठेवली.",
      year: "२०२४"
    },
    {
      image: "https://shivsena.zaplontech.com/wp-content/uploads/2025/05/5.jpg",
      title: "पक्षाचा विस्तार आणि संघटन बळकटीकरण",
      description: "मुख्यमंत्री एकनाथ शिंदे यांच्या नेतृत्वात शिवसेना महाराष्ट्राबाहेरही पक्षाचा प्रभाव वाढवत आहे.",
      year: "२०२४"
    },
    {
      image: "https://shivsena.zaplontech.com/wp-content/uploads/2025/05/sh.jpg",
      title: "शौर्यगाथेतील कुटुंबांना आर्थिक मदत",
      description: "पहलगाम येथे पर्यटकांचे संरक्षण करताना शहीद झालेले सैयद अदिल हुसेन शहा यांच्या कुटुंबाला ₹५ लाखांची मदत जाहीर केली.",
      year: "२०२४"
    },
    {
      image: "https://shivsena.zaplontech.com/wp-content/uploads/2025/05/h5.jpg",
      title: "ग्रामीण आरोग्य सेवांचा विस्तार: 'आपला दवाखाना' उपक्रम",
      description: "महाराष्ट्र सरकारने राज्यभरात ७०० 'आपला दवाखाना' या नावाने आरोग्य केंद्रे सुरू करण्याचा निर्णय घेतला आहे.",
      year: "२०२४"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            महत्त्वाचे क्षण व ठळक घडामोडी
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            २०२४-२०२५ मधील प्रमुख यशोगाथा आणि ठळक कामगिरी
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-orange transform md:-translate-x-px"></div>
          
          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:items-start`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-2 border-4 border-background z-10"></div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                  <Card className="group hover:shadow-orange transition-all duration-300 hover:-translate-y-1">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <img 
                        src={achievement.image} 
                        alt={achievement.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-white/90 text-primary font-semibold">
                          <Calendar className="w-3 h-3 mr-1" />
                          {achievement.year}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight">
                        {achievement.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AchievementsSection