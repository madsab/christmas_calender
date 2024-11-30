// Your method
function WeatherCard({
    city,
    favorites,
    setFavorites,
    width = null,
    display,
  }: {
    city: string;
    favorites: string[];
    setFavorites: any;
    width?: string | null;
    display: any;
  }) {

    // return (
    // ... rest of the code
    // )
  }

// Method 2
interface WeatherCardProps {
    city: string;
    favorites: string[];
    setFavorites: any;
    width?: string | null;
    display: any;
  }

  function NewWeatherCard({city, favorites, setFavorites, width, display}: WeatherCardProps){
    // return (
    // ... rest of the code
    // )
  }