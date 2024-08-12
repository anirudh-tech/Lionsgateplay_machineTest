import CarouselComponent from "@/components/Carousel/CarouselComponent";
import CarouselSkeleton from "@/components/Carousel/CarouselSkeleton";
import PosterComponent from "@/components/Carousel/PosterComponent";
import PosterSkeleton from "@/components/Carousel/PosterSkeleton";
import TotalTenComponent from "@/components/Carousel/TotalTenComponent";
import TotalTenSkeleton from "@/components/Carousel/TotalTenSkeleton";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
    const apikey = import.meta.env.VITE_REACT_APP_API_KEY
    const [movies, setMovies] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true);

    const searchMovies = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}`);
            setMovies(response.data.results)
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching movie data:", error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        searchMovies();
    }, []);

    if (isLoading) {
        return (
            <div className="w-full mt-5">
                <CarouselSkeleton />
                <PosterSkeleton />
                <PosterSkeleton />
                <TotalTenSkeleton />
                <PosterSkeleton />
                <PosterSkeleton />
                <PosterSkeleton />
                <PosterSkeleton />
            </div>
        );
    }

    return (
        <div className="w-full pt-5">
            <CarouselComponent movies={movies} />
            <PosterComponent title={"Premieres Of Lionsgate Play"} movies={movies} />
            <PosterComponent title={"Debutants Showcase"} movies={movies} />
            <TotalTenComponent title={"Top 10 in India"} movies={movies} />
            <PosterComponent title={"Watch Next"} movies={movies} />
            <PosterComponent title={"Trending This Week"} movies={movies} />
            <PosterComponent title={"Coming Soon on Lionsgate Play"} movies={movies} />
            <PosterComponent title={"Best Actors"} movies={movies} />
        </div>
    )
}

export default Home;