import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import useEmblaCarousel from 'embla-carousel-react'
import { Play } from "lucide-react"
import { useState } from "react"
import image1 from '../../assets/1.png';
import image2 from '../../assets/2.png';
import image3 from '../../assets/3.png';
import image4 from '../../assets/4.png';
import image5 from '../../assets/5.png';
import image6 from '../../assets/6.png';
import image7 from '../../assets/7.png';
import image8 from '../../assets/8.png';
import image9 from '../../assets/9.png';
import image10 from '../../assets/10.png';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];
const TotalTenComponent = ({ title, movies }: any) => {

    const [emblaRef, _] = useEmblaCarousel({ loop: true })
    const [mouseHover, setMouseHover] = useState({ index: "", hover: false })

    const handleMouseEnter = (index: string) => {
        console.log("hello")
        setMouseHover({ index, hover: true })
    }

    const handleMouseLeave = () => {
        setMouseHover({ index: "", hover: true })
    }

    return (
        <div className="flex flex-col gap-4 pl-10">
            <h1 className="pt-20 text-2xl font-semibold text-white">{title}</h1>
            <div className="relative group">
                <Carousel
                    ref={emblaRef}
                    opts={{
                        align: 'start',
                        loop: true,
                    }}
                    className="flex justify-center items-center"
                >
                    <CarouselContent className="flex w-full space-x-1">
                        {
                            movies.map((movie: any, index: number) => (
                                index < 10 && (
                                    <CarouselItem
                                        onMouseOver={() => handleMouseEnter(String(index))}
                                        onMouseLeave={() => handleMouseLeave()}
                                        key={index}
                                        className="flex rounded-lg max-w-[330px] h-[290px] items-end relative"
                                    >
                                        <img src={images[index]} className="h-48" alt="" />

                                        <div className="w-[55%] h-[90%] absolute right-0 bottom-1">
                                            <div className="size-full hover:border-b-4 hover:border-2 border-yellow-400 cursor-pointer rounded-xl relative">
                                                {
                                                    mouseHover && (mouseHover.index === String(index)) && (
                                                        <div className='absolute bg-gradient-to-t from-[rgba(0,0,0,0.87)] z-10 w-full h-1/2 bottom-0 flex justify-start items-end p-5 gap-8'>
                                                            <div className="">
                                                                <Play size={30} className="text-[rgb(202,218,44)] mt-1 fill-[rgb(202,218,44)]" />
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                <img className="rounded-xl object-cover w-full h-full" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                                                <div className="absolute bottom-0 w-full font-semibold text-sm bg-[rgb(220,236,24)] flex items-center justify-center rounded-b-lg">NEW SEASON</div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                )
                            ))
                        }
                    </CarouselContent>
                    <CarouselPrevious  className="absolute size-10 text-3xl left-0 top-1/2 transform -translate-y-1/2 text-white bg-black/80  transition-opacity duration-300 opacity-0 group-hover:opacity-100 hover:bg-black/80 hover:text-white" />
                    <CarouselNext className="absolute size-10 right-10 top-1/2 transform -translate-y-1/2 text-white bg-black/80  transition-opacity duration-300 opacity-0 group-hover:opacity-100 hover:bg-black/80 hover:text-white" />
                </Carousel>
            </div>
        </div>
    )
}

export default TotalTenComponent