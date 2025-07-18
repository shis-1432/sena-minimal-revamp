import { Card, CardContent } from "@/components/ui/card"
import { Heart, Target, Users, Shield } from "lucide-react"

const ValuesSection = () => {
  const values = [
    {
      icon: Heart,
      title: "मराठी अस्मिता",
      description: "मराठी अस्मिता ही महाराष्ट्राच्या आत्म्याचं मूर्त स्वरूप आहे, जे आपल्या अंतरात्म्यात अखंड तेवत आहे. आपली समृद्ध सांस्कृतिक परंपरा, भाषा, कला आणि आपली ओळख जपण्यासाठी शिवसेना सदैव कटिबद्ध आहे."
    },
    {
      icon: Target,
      title: "शब्दांपेक्षा कृतीला प्राधान्य",
      description: "आमची ताकद तळागाळातील लोकांशी असलेले आमचे संबंध आणि वास्तविक परिणाम साध्य करण्याच्या आमच्या वचनबद्धतेमध्ये आहे. महाराष्ट्रात सकारात्मक बदल घडवणाऱ्या ठोस विकासकामांना आम्ही प्राधान्य देतो."
    },
    {
      icon: Users,
      title: "लोकहित प्रथम",
      description: "महाराष्ट्राची खरी ताकद म्हणजे प्रत्येक नागरिकाचा आवाज. आमचा उद्देश लोकहिताला प्राधान्य देणे आहे, जिथे प्रत्येक आवाजाला महत्व आहे आणि प्रत्येक नागरिकाचे कल्याण हेच आमचे प्रमुख ध्येय आहे."
    },
    {
      icon: Shield,
      title: "निर्भय नेतृत्व",
      description: "हिंदुहृदयसम्राट स्व. बाळासाहेबांच्या वारशाने प्रेरित होऊन, आम्ही महाराष्ट्रातील जनतेच्या हितासाठी धाडसी निर्णय आणि अटळ बांधिलकीने वाटचाल करत आहोत."
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            मराठी मनाची ताकद
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            शिवसेना ही महाराष्ट्राच्या अस्मितेचा बुलंद आवाज आहे. मराठी अभिमान, सामाजिक न्याय आणि निःस्वार्थ सेवाभाव या मूल्यांवर आधारलेली शिवसेना, महाराष्ट्राच्या इतिहासात महत्त्वपूर्ण योगदान देत आली आहे.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-orange transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-orange rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValuesSection