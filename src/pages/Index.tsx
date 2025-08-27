import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Cake, Sparkles, Gift, Music, Camera, Users, Clock, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ParallaxScrollSecond } from '@/components/ui/parallax-scroll';
import { Button } from '@/components/ui/button';
import MagicalConfetti from '@/components/MagicalConfetti';
import FloatingBalloons from '@/components/FloatingBalloons';
import { StackSwipeGallery } from '@/components/ui/stack-swipe-gallery';

// Import all the magical images
import heroPortrait from '@/assets/wishes-img/wishes-imgs/IMG_20250827_210424.png'
import birthdayCake from '@/assets/birthday-cake.jpg';
import balloons from '@/assets/balloons.jpg';
import memory1 from '@/assets/memory-1.jpg';
import memory2 from '@/assets/memory-2.jpg';
import flowers from '@/assets/flowers.jpg';
import sunset from '@/assets/sunset.jpg';
import img1 from '@/assets/wishes-img/wishes-imgs/IMG_20250827_210424.png'
import img2 from '@/assets/wishes-img/wishes-imgs/IMG_20250827_222914.png'
import img3 from '@/assets/wishes-img/wishes-imgs/IMG_20250827_223016.png'
import img4 from '@/assets/wishes-img/wishes-imgs/IMG_20250827_223108.png'
import img5 from '@/assets/wishes-img/wishes-imgs/IMG_20250827_223330.jpg'
import img6 from '@/assets/wishes-img/wishes-imgs/IMG_20250827_223345.png'
import img7 from '@/assets/wishes-img/wishes-imgs/IMG_20250827_223406.png'
import img8 from '@/assets/wishes-img/wishes-imgs/IMG_20250827_224356.jpg'
import img9 from '@/assets/wishes-img/wishes-imgs/IMG_20250827_224415.jpg'
import img10 from '@/assets/wishes-img/wishes-imgs/Screenshot_2025-08-27-20-30-26-91_1c337646f29875672b5a61192b9010f9.jpg'
import img11 from '@/assets/wishes-img/wishes-imgs/Screenshot_2025-08-27-20-40-10-92_1c337646f29875672b5a61192b9010f9.png'
import img12 from '@/assets/wishes-img/wishes-imgs/IMG_20250827_224346.jpg'
import img13 from '@/assets/wishes-img/wishes-imgs/IMG_20250827_224356.jpg'
import img14 from '@/assets/wishes-img/wishes-imgs/IMG_20250827_224346.jpg'

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(true);

  const allGalleryImages = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img5, img2
  ];

  // Filter out specific indexes: 1, 4, 6, and last index
  const excludedIndexes = [1, 4, 6, allGalleryImages.length - 1];
  const galleryImages = allGalleryImages.filter((_, index) => !excludedIndexes.includes(index));

  // Additional filter for parallax: exclude indexes 6 and 7
  const parallaxExcludedIndexes = [9,10];
  const parallaxImages = allGalleryImages.filter((_, index) => !parallaxExcludedIndexes.includes(index));

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
              [Twisha]
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
          
          {/* Scroll down tutorial */}
          <motion.div 
            className="absolute bottom-8 left-0 right-0 mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 2,
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <div className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30 inline-block">
              <p className="text-sm text-primary font-medium flex items-center gap-2 justify-center">
                <span className="animate-bounce">↓</span>
                Scroll down to explore more
                <span className="animate-bounce">↓</span>
              </p>
            </div>
          </motion.div>
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
          
          {/* Mobile swipe stack */}
          <div className="md:hidden mb-8 flex justify-center">
            <StackSwipeGallery images={galleryImages} />
          </div>

          {/* Desktop parallax experience */}
          <div className="hidden md:block mb-8">
            <ParallaxScrollSecond images={parallaxImages} />
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
              Wishing you endless joy, love  💖
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
              size="default" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 text-md rounded-full magical-shadow animate-magical-bounce"
            >
              🎉 Once Again Happy Birthday Teacher ! 🎉
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
