export async function fetchCars() {
	const headers ={
			'x-rapidapi-key': '5c5fd18745mshca0b35328a5f0c9p1847f2jsn63719ed6f7ba',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

	const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
		headers: headers,
	});


	const result = await response.json();

	return result;
}

export const calculateCarRent = (
	year: number,
	make?: string,
	model?: string,
	transmission?: string,
	drive?: string
  ) => {
	// Base rental price per day in dollars
	const basePricePerDay = 50;
	
	// Additional rate based on vehicle age
	const ageFactor = 0.15;
	const ageRate = year ? (new Date().getFullYear() - year) * ageFactor : 0;
	
	// Premium brands factor
	const premiumBrands = ["bmw", "mercedes", "audi", "lexus", "porsche", "cadillac", "infiniti", "acura", "lincoln", "genesis"];
	const brandFactor = make && premiumBrands.includes(make.toLowerCase()) ? 15 : 0;
	
	// Model-specific adjustments based on popularity/demand
	const popularModels = ["corolla", "camry", "civic", "accord", "rav4", "cr-v", "f-150", "silverado"];
	const modelFactor = model && popularModels.includes(model.toLowerCase()) ? 5 : 0;
	
	// Transmission factor (automatic costs more)
	const transmissionFactor = transmission && transmission.toLowerCase() === "a" ? 8 : 0;
	
	// Drive factor (AWD costs more than FWD/RWD)
	const driveFactor = drive && drive.toLowerCase() === "awd" ? 12 : 0;
	
	// Calculate total rental rate per day
	const rentalRatePerDay = basePricePerDay + ageRate + brandFactor + modelFactor + transmissionFactor + driveFactor;
	
	return rentalRatePerDay.toFixed(0);
  };

  export const calculateFuelEfficiency = (
	year: number,
	make?: string,
	model?: string,
	transmission?: string,
	drive?: string
  ) => {
	// Base MPG (starting point based on average compact car)
	const baseMPG = 25;
	
	// Year adjustment (newer cars tend to be more efficient)
	const yearFactor = Math.min(15, Math.max(0, (year - 1990) * 0.5));
	
	// Make efficiency factors
	const makeEfficiency: {[key: string]: number} = {
	  "toyota": 3,
	  "honda": 3,
	  "hyundai": 2,
	  "kia": 2,
	  "mazda": 2.5,
	  "ford": 0,
	  "chevrolet": -1,
	  "dodge": -2,
	  "bmw": -1,
	  "mercedes": -1.5,
	  "hummer": -8
	};
	
	const makeAdjustment = make && makeEfficiency[make.toLowerCase()] 
	  ? makeEfficiency[make.toLowerCase()] 
	  : 0;
	
	// Transmission adjustment (manual typically more efficient)
	const transmissionAdjustment = transmission && transmission.toLowerCase() === "m" ? 2 : 0;
	
	// Drive adjustment (FWD typically more efficient than AWD/RWD)
	const driveAdjustment = drive ? (drive.toLowerCase() === "fwd" ? 1 : -1) : 0;
	
	// Calculate final MPG
	const mpg = baseMPG + yearFactor + makeAdjustment + transmissionAdjustment + driveAdjustment;
	
	// Convert to L/100km (optional)
	const litersPer100km = (235.214583 / mpg).toFixed(1);
	
	return {
	  mpg: Math.max(10, Math.round(mpg)),
	  litersPer100km: litersPer100km
	};
  };