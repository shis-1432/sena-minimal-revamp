import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const InitiativesSection = () => {
  const initiatives = [
    {
      image: "https://shivsena.zaplontech.com/wp-content/uploads/2025/05/website-photo4.1.jpg",
      title: "मुख्यमंत्री माझी लाडकी बहीण योजना",
      description: "माझी लेक, माझा अभिमान 'मुख्यमंत्री माझी लाडकी बहिण योजना' मधून महिलांना मिळतोय दरमहा ₹1500 चा सन्मान!"
    },
    {
      image: "https://shivsena.zaplontech.com/wp-content/uploads/2025/05/website-photo2.1.jpg",
      title: "१₹ पीक विमा",
      description: "केवळ ₹1 शेतकऱ्यांसाठी पीक विमा सुरक्षा सरकारची शेतकऱ्यांसाठी मोठी मदत!"
    },
    {
      image: "https://shivsena.zaplontech.com/wp-content/uploads/2025/05/website-photo1.1.jpg",
      title: "युवांसाठी श्रीकांत शिंदे क्रिकेट स्पर्धा",
      description: "शिवसेना खासदार डॉ. श्रीकांत शिंदे यांच्या पुढाकाराने ठाणे आणि आसपासच्या भागात युवकांसाठी भव्य क्रिकेट स्पर्धेचे आयोजन करण्यात आले."
    },
    {
      image: "https://shivsena.zaplontech.com/wp-content/uploads/2025/05/website-photo3.jpg",
      title: "देशी गायींना 'राज्यमाता-गोमाता' चा मान",
      description: "देशी गायींना 'राज्यमाता-गोमाता' चा मान — महाराष्ट्र सरकारकडून संस्कृती, कृषी आणि आरोग्याच्या महत्त्वाची मान्यता!"
    }
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            आमचे मुख्य उपक्रम
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            महाराष्ट्राच्या विकासासाठी आणि जनकल्याणासाठी राबवलेले प्रमुख उपक्रम
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {initiatives.map((initiative, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-orange transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={initiative.image} 
                  alt={initiative.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                  {initiative.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed line-clamp-3">
                  {initiative.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="default" size="lg">
            सर्व उपक्रम पहा
          </Button>
        </div>
      </div>
    </section>
  )
}

export default InitiativesSection