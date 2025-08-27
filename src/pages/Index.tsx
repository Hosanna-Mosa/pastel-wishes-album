import { useState, useEffect } from 'react';
import { Heart, Star, Cake, Sparkles, Gift, Music, Camera, Users, Clock, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import MagicalConfetti from '@/components/MagicalConfetti';
import FloatingBalloons from '@/components/FloatingBalloons';

// Import all the magical images
import heroPortrait from '@/assets/hero-portrait.jpg';
import birthdayCake from '@/assets/birthday-cake.jpg';
import balloons from '@/assets/balloons.jpg';
import memory1 from '@/assets/memory-1.jpg';
import memory2 from '@/assets/memory-2.jpg';
import flowers from '@/assets/flowers.jpg';
import sunset from '@/assets/sunset.jpg';

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(true);

  const galleryImages = [
    heroPortrait, birthdayCake, balloons, memory1, memory2, flowers, sunset,
    heroPortrait, birthdayCake, balloons, memory1, memory2, flowers, sunset,
    heroPortrait, birthdayCake
  ];

  const personalWishes = [
    "May your special day be filled with all the joy your heart can hold! 🎂",
    "Wishing you endless happiness, beautiful moments, and dreams come true! ✨",
    "Another year of wonderful you! May this year bring you countless blessings! 💖",
    "On your birthday, I wish you all the love and happiness in the world! 🌟",
    "May your day be as beautiful and magical as you are! Happy Birthday! 🎉",
  ];

  const timelineMemories = [
    { year: "2020", title: "Beautiful Beginnings", images: [memory1, flowers] },
    { year: "2021", title: "Growing Together", images: [memory2, sunset] },
    { year: "2022", title: "Amazing Adventures", images: [balloons, birthdayCake] },
    { year: "2023", title: "Magical Moments", images: [heroPortrait, flowers] },
    { year: "2024", title: "Celebrating You!", images: [birthdayCake, balloons] },
  ];

  const friendsMessages = [
    { name: "Sarah", message: "You bring so much joy to everyone around you! Happy Birthday! 💕", color: "primary" },
    { name: "Emma", message: "Wishing you the most wonderful year ahead filled with love and laughter! 🌸", color: "lavender" },
    { name: "Mom", message: "My dearest daughter, you make every day brighter. Love you always! 💖", color: "gold" },
    { name: "Jessica", message: "Happy Birthday to the most amazing friend! Can't wait to celebrate with you! 🎉", color: "primary" },
    { name: "Dad", message: "Proud of the incredible person you've become. Happy Birthday, sweetheart! 🌟", color: "gold" },
    { name: "Alex", message: "Hope your special day is as wonderful as you are! Enjoy every moment! ✨", color: "lavender" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen hero-gradient overflow-x-hidden">
      {/* Magical Effects */}
      {showConfetti && <MagicalConfetti />}
      <FloatingBalloons />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4">
        <div className="text-center max-w-4xl mx-auto animate-slide-up">
          <div className="mb-8 relative">
            <img 
              src={heroPortrait} 
              alt="Birthday Girl" 
              className="w-64 h-80 object-cover rounded-3xl mx-auto magical-glow animate-float"
            />
            <div className="absolute -top-4 -right-4 animate-sparkle">
              <Sparkles className="w-8 h-8 text-gold" />
            </div>
            <div className="absolute -bottom-4 -left-4 animate-sparkle" style={{ animationDelay: '1s' }}>
              <Heart className="w-8 h-8 text-primary" />
            </div>
          </div>
          
          <h1 className="cursive-font text-6xl md:text-8xl text-primary mb-6 animate-heartbeat">
            Happy Birthday!
          </h1>
          
          <div className="flex items-center justify-center gap-3 mb-8">
            <Star className="w-8 h-8 text-gold animate-sparkle" />
            <h2 className="elegant-font text-4xl md:text-5xl text-secondary">
              [Insert Name]
            </h2>
            <Star className="w-8 h-8 text-gold animate-sparkle" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <div className="flex items-center justify-center gap-4">
            <Cake className="w-6 h-6 text-primary" />
            <p className="text-xl md:text-2xl text-muted-foreground">
              Celebrating another year of wonderful you! 🎉
            </p>
            <Gift className="w-6 h-6 text-accent" />
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Camera className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="cursive-font text-5xl text-primary mb-4">Magical Memories</h2>
            <p className="text-xl text-muted-foreground">A collection of beautiful moments</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {galleryImages.map((image, index) => (
              <Card key={index} className="overflow-hidden magical-shadow hover:magical-glow transition-all duration-500 transform hover:scale-105 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-0">
                  <img 
                    src={image} 
                    alt={`Memory ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Card className="inline-block card-gradient magical-shadow p-6 animate-float">
              <div className="flex items-center gap-4">
                <img 
                  src={galleryImages[currentImageIndex]} 
                  alt="Featured" 
                  className="w-32 h-32 object-cover rounded-full"
                />
                <div>
                  <h3 className="cursive-font text-2xl text-primary mb-2">Featured Moment</h3>
                  <p className="text-muted-foreground">Auto-changing slideshow</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Personal Wishes Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Heart className="w-12 h-12 text-primary mx-auto mb-4 animate-heartbeat" />
            <h2 className="cursive-font text-5xl text-primary mb-4">Heartfelt Wishes</h2>
            <p className="text-xl text-muted-foreground">Special messages just for you</p>
          </div>
          
          <div className="space-y-8">
            {personalWishes.map((wish, index) => (
              <Card key={index} className="card-gradient magical-shadow p-8 animate-slide-up" style={{ animationDelay: `${index * 0.3}s` }}>
                <CardContent className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Sparkles className="w-6 h-6 text-gold animate-sparkle" />
                    <Music className="w-6 h-6 text-lavender" />
                    <Sparkles className="w-6 h-6 text-gold animate-sparkle" style={{ animationDelay: '1s' }} />
                  </div>
                  <p className="text-lg md:text-xl text-foreground leading-relaxed">
                    {wish}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Memories Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="cursive-font text-5xl text-primary mb-4">Journey Through Time</h2>
            <p className="text-xl text-muted-foreground">Beautiful years, beautiful memories</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-lavender to-gold rounded-full"></div>
            
            <div className="space-y-12">
              {timelineMemories.map((memory, index) => (
                <div key={index} className="relative flex items-start gap-8 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center magical-glow text-primary-foreground font-bold text-lg z-10">
                    {memory.year}
                  </div>
                  
                  <Card className="card-gradient magical-shadow flex-1 p-6">
                    <CardContent>
                      <h3 className="cursive-font text-2xl text-primary mb-4">{memory.title}</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {memory.images.map((image, imgIndex) => (
                          <img 
                            key={imgIndex}
                            src={image} 
                            alt={`${memory.title} ${imgIndex + 1}`}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Friends & Family Messages */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="cursive-font text-5xl text-primary mb-4">Love from Everyone</h2>
            <p className="text-xl text-muted-foreground">Messages from those who care about you</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {friendsMessages.map((message, index) => (
              <Card key={index} className="card-gradient magical-shadow p-6 transform rotate-1 hover:rotate-0 transition-all duration-500 animate-slide-up" 
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      transform: `rotate(${(index % 2 === 0 ? 1 : -1) * (Math.random() * 3 + 1)}deg)`
                    }}>
                <CardContent>
                  <div className="flex items-center gap-2 mb-4">
                    <MessageCircle className={`w-5 h-5 text-${message.color}`} />
                    <h4 className="font-semibold text-lg text-foreground">{message.name}</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {message.message}
                  </p>
                  <div className="flex justify-end mt-4">
                    <Heart className={`w-4 h-4 text-${message.color} animate-heartbeat`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ending Section */}
      <section className="py-32 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 animate-slide-up">
            <img 
              src={balloons} 
              alt="Celebration" 
              className="w-96 h-64 object-cover rounded-3xl mx-auto magical-glow animate-float mb-8"
            />
            
            <h2 className="elegant-font text-5xl md:text-6xl text-primary mb-8 animate-heartbeat">
              Wishing you endless joy, love, and success ahead 💖
            </h2>
            
            <div className="flex items-center justify-center gap-6 mb-8">
              <Star className="w-8 h-8 text-gold animate-sparkle" />
              <Sparkles className="w-10 h-10 text-primary animate-sparkle" style={{ animationDelay: '0.5s' }} />
              <Heart className="w-8 h-8 text-lavender animate-heartbeat" />
              <Sparkles className="w-10 h-10 text-primary animate-sparkle" style={{ animationDelay: '1s' }} />
              <Star className="w-8 h-8 text-gold animate-sparkle" style={{ animationDelay: '1.5s' }} />
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              May this new year of life bring you countless beautiful moments,
              amazing adventures, and all the happiness your heart can hold! 🎂✨
            </p>
            
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-xl rounded-full magical-shadow animate-magical-bounce"
            >
              🎉 Happy Birthday Again! 🎉
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
