import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Shield, TrendingUp, Users, Wallet, Play } from 'lucide-react';
import NFTCard from '@/components/ui/nft-card';
import Navigation from '@/components/layout/Navigation';
import heroImage from '@/assets/neuraldao.jpg';
import pic2 from '@/assets/pic2.jpg';
import pic3 from '@/assets/pic3.jpg';
import pic4 from '@/assets/pic4.jpg';
const Index = () => {
  const featuredNFTs = [
    {
      id: '1',
      name: 'Ethereal Dreams #001',
      image: 'https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?w=400',
      price: '3.5',
      rentalPrice: '0.15',
      currency: 'ETH',
      collection: 'Ethereal Collection',
      creator: 'DigitalArtist',
    },
    {
      id: '2',
      name: 'Neon Genesis #256',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400',
      price: '2.8',
      rentalPrice: '0.12',
      currency: 'ETH',
      collection: 'Genesis Series',
      creator: 'NeonCreator',
    },
    {
      id: '3',
      name: 'Cosmic Voyage #078',
      image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400',
      price: '4.2',
      rentalPrice: '0.18',
      currency: 'ETH',
      collection: 'Cosmic Collection',
      creator: 'SpaceArt',
    },
  ];

  return (
    <div className="min-h-screen bg-background" data-page="index">
      <Navigation />
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-animated-gradient">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Rent & Own
            </span>
            <br />
            <span className="text-foreground">Premium Digital Assets</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Professional marketplace for NFT rentals and ownership. Test assets before purchase or generate revenue from your collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 shine-on-hover glow-on-hover">
              <Link to="/marketplace" className="flex items-center">
                Explore Marketplace
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 border-primary shine-on-hover glow-on-hover">
              <Play className="mr-2 w-5 h-5" />
              View Demo
            </Button>
          </div>
        </div>
      </section>
      {/* 2) Features section with background image */}
      <section className="relative py-20 bg-muted/50 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Professional NFT Rental Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced features designed for secure and efficient digital asset management
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-glow transition-all duration-300 border-gradient tilt-on-hover glass-effect-jade">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Test Before Purchase</h3>
              <p className="text-muted-foreground">
                Evaluate NFT functionality through cost-effective rental periods prior to acquisition.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-glow transition-all duration-300 border-gradient tilt-on-hover glass-effect-jade">
              <div className="w-16 h-16 bg-success/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Revenue Generation</h3>
              <p className="text-muted-foreground">
                Monetize your digital assets through structured rental agreements while maintaining ownership rights.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-glow transition-all duration-300 border-gradient tilt-on-hover glass-effect-jade">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Blockchain Security</h3>
              <p className="text-muted-foreground">
                Smart contract technology provides transparent, trustless rental transactions for all parties.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 3) Premium Collection section with background image */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${pic4})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Premium Collection</h2>
              <p className="text-xl text-muted-foreground">
                Curated digital assets available for rental and ownership
              </p>
            </div>
            <Button variant="outline" className="border-primary shine-on-hover glow-on-hover" asChild>
              <Link to="/marketplace">
                View Complete Collection
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredNFTs.map((nft) => (
              <div className="tilt-on-hover">
                <NFTCard key={nft.id} nft={nft} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 4) Final section (stats + CTA) with background image */}
      <section className="relative py-20 bg-muted/50 overflow-hidden">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `url(${pic2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center mb-20">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">10K+</div>
              <div className="text-muted-foreground">Digital Assets</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-success mb-2">2.5K+</div>
              <div className="text-muted-foreground">Active Contracts</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-muted-foreground">Verified Creators</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-warning mb-2">1.2M+</div>
              <div className="text-muted-foreground">Transaction Volume</div>
            </div>
          </div>
          <div className="text-center">
          <div className="bg-secondary rounded-2xl p-12 max-w-4xl mx-auto border border-border border-gradient glow-on-hover backdrop-blur-lg glass-effect-jade">

              <h2 className="text-4xl font-bold mb-6">
                Launch Your Digital Asset Strategy
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join the professional network of creators and collectors in the NFT rental economy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" className="border-primary shine-on-hover glow-on-hover" asChild>
                  <Link to="/login">
                    <Wallet className="mr-2 w-5 h-5" />
                    Connect Wallet
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;