class UberPriceCalculator {
    constructor(distance, duration, serviceType) {
      this.distance = distance; // in kilometers
      this.duration = duration; // in minutes
      this.serviceType = serviceType; // 'uberX', 'uberBlack', etc.
    }
  
    calculatePrice() {
      // Simplified pricing calculation based on distance and duration
      const baseFare = 5; // Base fare for any ride
      const distanceRate = 1.5; // Rate per kilometer
      const durationRate = 0.2; // Rate per minute of the trip
  
      // Additional factors based on service type
      let serviceMultiplier = 1;
      switch (this.serviceType) {
        case 'uberBlack':
          serviceMultiplier = 1.5;
          break;
        // Add more cases for other service types if needed
  
        default:
          // Default to regular uberX
          serviceMultiplier = 1;
      }
  
      // Calculate the total fare
      const totalFare = baseFare + (this.distance * distanceRate) + (this.duration * durationRate * serviceMultiplier);
  
      return totalFare;
    }
  }
  
  // Example usage:
  const uberRide = new UberPriceCalculator(10, 20, 'uberX');
  const price = uberRide.calculatePrice();
  console.log(`Estimated Uber price: $${price}`);
  