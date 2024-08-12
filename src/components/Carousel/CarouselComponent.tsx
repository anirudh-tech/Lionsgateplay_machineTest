import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react'
import { Play } from "lucide-react";
import { useRef, useState } from "react";
import { BsCameraReels } from "react-icons/bs";

const CarouselComponent = ({ movies }: any) => {
    const [emblaRef,_] = useEmblaCarousel({ loop: true })
    const [mouseHover, setMouseHover] = useState({ index: "", hover: false })
    const nextRef = useRef<HTMLButtonElement>(null)
    
    const handleMouseEnter = (index: string) => {
        console.log("hello")
        setMouseHover({ index, hover: true })
    }

    const handleMouseLeave = () => {
        setMouseHover({ index: "", hover: true })
    }


    return (
        <>
            <div className="overflow-hidden mx-auto group relative">
                <Carousel
                    ref={emblaRef}
                    opts={{
                        align: 'center',
                        loop: true,
                        skipSnaps: false,
                        containScroll: 'trimSnaps'
                    }}
                    className="flex justify-center items-center"
                >
                    <CarouselContent className="flex w-full space-x-4 -ml-4">
                        {
                            movies.map((movie: any, index: number) => (
                                <CarouselItem onMouseOver={() => handleMouseEnter(String(index))} onMouseLeave={() => handleMouseLeave()} key={index} className="flex rounded-lg h-[300px] pl-4 max-w-[780px] ">
                                    <div className="rounded-lg shadow-md hover:border-2 border-yellow-400 w-full h-full cursor-pointer relative">
                                        <img className="rounded-lg object-cover w-full h-full" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />
                                        {
                                            mouseHover && (mouseHover.index == String(index)) && (
                                                <>
                                                    <div className='absolute bg-gradient-to-t from-[rgba(0,0,0,0.87)] z-10 w-full h-1/2 bottom-0 flex justify-end items-center p-5 gap-8'>
                                                        <div className="">
                                                            <Play size={44} className="text-[rgb(202,218,44)] mt-1 fill-[rgb(202,218,44)]" />
                                                            <h1 className="text-white">PLAY</h1>
                                                        </div>
                                                        <div className="relative">
                                                            <BsCameraReels className="text-5xl font-light text-[rgb(202,218,44)]"/>
                                                            <h1 className="text-white">TRAILER</h1>
                                                            <div className="absolute top-[40%] left-[20%]"><Play size={10} className="text-[rgb(202,218,44)] fill-[rgb(202,218,44)]" /></div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        }
                                    </div>
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-5 size-10 top-1/2 transform -translate-y-1/2 opacity-0 text-white bg-black/80 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80 hover:text-white" />
                    <CarouselNext ref={nextRef} className="absolute size-10 right-5 top-1/2 transform -translate-y-1/2 opacity-0 text-white bg-black/80 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80 hover:text-white" />
                </Carousel>
            </div>
        </>
    )
}

export default CarouselComponent