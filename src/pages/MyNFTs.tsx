import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, TrendingUp, Clock, Wallet, DollarSign, AlertCircle } from 'lucide-react';
import NFTCard from '@/components/ui/nft-card';
import Navigation from '@/components/layout/Navigation';
import pic12 from '@/assets/pic12.jpg';
import pic11 from '@/assets/pic11.jpg';

const MyNFTs = () => {
  // Mock user data - replace with API calls
  const userStats = {
    totalNFTs: 12,
    totalValue: '45.2 ETH',
    activeListings: 3,
    totalRentals: 8,
  };

  const ownedNFTs = [
    {
      id: '1',
      name: 'My Cosmic Art #124',
      image: 'https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?w=400',
      price: '2.8',
      rentalPrice: '0.12',
      currency: 'ETH',
      collection: 'Personal Collection',
      creator: 'You',
      status: 'listed',
    },
    {
      id: '2',
      name: 'Digital Portrait #89',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400',
      currency: 'ETH',
      collection: 'Art Collection',
      creator: 'You', 
      status: 'unlisted',
    },
  ];

  const rentedNFTs = [
    {
      id: '3',
      name: 'Borrowed Dreams #256',
      image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400',
      rentalPrice: '0.08',
      currency: 'ETH',
      collection: 'Dream Series',
      creator: 'ArtistX',
      timeLeft: '3d 12h',
      isRented: true,
      rentalExpires: '2024-01-15T18:30:00Z', // ISO timestamp
      canSell: true,
    },
    {
      id: '4',
      name: 'Neon Future #89',
      image: 'https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?w=400',
      rentalPrice: '0.15',
      currency: 'ETH',
      collection: 'Future Collection',
      creator: 'TechArtist',
      timeLeft: '1d 4h',
      isRented: true,
      rentalExpires: '2024-01-13T10:00:00Z',
      canSell: true,
    },
    {
      id: '5',
      name: 'Abstract Waves #42',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400',
      rentalPrice: '0.06',
      currency: 'ETH',
      collection: 'Wave Series',
      creator: 'OceanArt',
      timeLeft: '6h 30m',
      isRented: true,
      rentalExpires: '2024-01-12T16:30:00Z',
      canSell: false, // Cannot sell if less than 24h remaining
    },
  ];

  // State to track the active tab
  const [activeTab, setActiveTab] = useState('owned');

  // Function to handle selling a rented NFT
  const handleSellRentedNFT = (nftId: string) => {
    // TODO: Implement sell functionality
    console.log(`Selling rented NFT: ${nftId}`);
    // This would typically open a modal or navigate to a sell page
  };

  // Function to calculate time remaining
  const getTimeRemaining = (expiresAt: string) => {
    const now = new Date();
    const expiry = new Date(expiresAt);
    const diff = expiry.getTime() - now.getTime();
    
    if (diff <= 0) return 'Expired';
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (days > 0) return `${days}d ${hours}h`;
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  };

  return (
    <div className="min-h-screen bg-background" data-page="mynfts" style={{
      backgroundImage: `url(${pic12})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 ">
        {/* Header */}
        <div className="mb-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border border-card-border rounded-xl p-4 bg-gradient-to-r from-teal-500/40 to-cyan-500/40">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
              My Collection
            </h1>
            <p className="text-muted-foreground">
              Manage your NFTs and rental activities
            </p>
          </div>
          <Button className="bg-gradient-primary hover:bg-gradient-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Create Listing
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-card border border-card-border rounded-xl p-6" style={{
            backgroundImage: `url(${pic11})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total NFTs</p>
                <p className="text-2xl font-bold text-foreground">{userStats.totalNFTs}</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Wallet className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>

          <div className="bg-card border border-card-border rounded-xl p-6" style={{
            backgroundImage: `url(${pic11})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Value</p>
                <p className="text-2xl font-bold text-foreground">{userStats.totalValue}</p>
              </div>
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
            </div>
          </div>

          <div className="bg-card border border-card-border rounded-xl p-6" style={{
            backgroundImage: `url(${pic11})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Listings</p>
                <p className="text-2xl font-bold text-foreground">{userStats.activeListings}</p>
              </div>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Badge className="w-6 h-6 bg-accent text-accent-foreground" />
              </div>
            </div>
          </div>

          <div className="bg-card border border-card-border rounded-xl p-6" style={{
            backgroundImage: `url(${pic11})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Rentals</p>
                <p className="text-2xl font-bold text-foreground">{userStats.totalRentals}</p>
              </div>
              <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-warning" />
              </div>
            </div>
          </div>
        </div>

        {/* NFT Tabs */}
        <Tabs defaultValue="owned" className="w-full" onValueChange={setActiveTab}>
  <TabsList className="grid w-full grid-cols-3 mb-8 border border-card-border rounded-lg">
    <TabsTrigger value="owned" className={activeTab === 'owned' ? 'bg-gradient-to-r from-teal-500/50 to-cyan-500/50 rounded-full px-3 py-1' : ''}>Owned NFTs</TabsTrigger>
    <TabsTrigger value="rented" className={activeTab === 'rented' ? 'bg-gradient-to-r from-teal-500/50 to-cyan-500/50 rounded-full px-3 py-1' : ''}>Rented NFTs</TabsTrigger>
    <TabsTrigger value="listings" className={activeTab === 'listings' ? 'bg-gradient-to-r from-teal-500/50 to-cyan-500/50 rounded-full px-3 py-1' : ''}>My Listings</TabsTrigger>
  </TabsList>

          <TabsContent value="owned" className={`space-y-6 border-2 border-primary rounded-lg p-4 bg-card/80 ${activeTab === 'owned' ? 'bg-gradient-to-br from-teal-500/30 to-cyan-500/30' : ''}`}>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent p-2 rounded">
                Your NFT Collection
              </h2>
              <div className="flex gap-2">
                <Badge variant="outline">
                  {ownedNFTs.length} NFTs
                </Badge>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {ownedNFTs.map((nft) => (
                <div key={nft.id} className="relative border border-card-border rounded-lg overflow-hidden">
                  <NFTCard nft={nft} showRentOption={false} />
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant={nft.status === 'listed' ? 'default' : 'secondary'}
                      className={nft.status === 'listed' ? 'bg-success text-success-foreground' : ''}
                    >
                      {nft.status === 'listed' ? 'Listed' : 'Unlisted'}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="rented" className={`space-y-6 border border-card-border rounded-lg p-4 bg-card/80 ${activeTab === 'rented' ? 'bg-gradient-to-br from-teal-500/30 to-cyan-500/30' : ''}`}>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent p-2 rounded">
                Currently Renting
              </h2>
              <div className="flex gap-2">
                <Badge variant="outline">
                  {rentedNFTs.length} Active Rentals
                </Badge>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {rentedNFTs.map((nft) => (
                <div key={nft.id} className="relative border border-card-border rounded-lg overflow-hidden bg-card/90 backdrop-blur-sm">
                  <NFTCard nft={nft} showRentOption={false} />
                  
                  {/* Rental Time Remaining Overlay */}
                  <div className="absolute top-4 left-4">
                    <Badge 
                      variant="secondary" 
                      className="bg-warning/20 text-warning border-warning/30 backdrop-blur-sm"
                    >
                      <Clock className="w-3 h-3 mr-1" />
                      {getTimeRemaining(nft.rentalExpires)}
                    </Badge>
                  </div>

                  {/* Sell Button Overlay */}
                  <div className="absolute top-4 right-4">
                    {nft.canSell ? (
                      <Button
                        size="sm"
                        variant="default"
                        className="bg-gradient-primary hover:bg-gradient-primary/90 text-white shadow-lg"
                        onClick={() => handleSellRentedNFT(nft.id)}
                      >
                        <DollarSign className="w-3 h-3 mr-1" />
                        Sell
                      </Button>
                    ) : (
                      <Badge 
                        variant="outline" 
                        className="bg-destructive/20 text-destructive border-destructive/30 backdrop-blur-sm"
                      >
                        <AlertCircle className="w-3 h-3 mr-1" />
                        Cannot Sell
                      </Badge>
                    )}
                  </div>

                  {/* Rental Info Footer */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center justify-between text-white">
                      <div className="text-sm">
                        <span className="text-muted-foreground">Rental Price:</span>
                        <span className="font-semibold ml-1">{nft.rentalPrice} {nft.currency}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        by {nft.creator}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="listings" className={`space-y-6 border border-card-border rounded-lg p-4 bg-card/80 ${activeTab === 'listings' ? 'bg-gradient-to-br from-teal-500/30 to-cyan-500/30' : ''}`}>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent p-2 rounded">
                Your Active Listings
              </h2>
              <Button variant="outline">
                Manage All Listings
              </Button>
            </div>
            
            <div className="text-center py-12 border border-card-border rounded-lg">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-2">No active listings</h3>
              <p className="text-muted-foreground mb-4">Start earning by listing your NFTs for sale or rent</p>
              <Button>Create Your First Listing</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MyNFTs;