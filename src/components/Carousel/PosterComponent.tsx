import { useRef, useState } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import useEmblaCarousel from 'embla-carousel-react' 
import { Play } from "lucide-react"

const PosterComponent = ({title, movies}: any) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [mouseHover, setMouseHover] = useState({ index: "", hover: false })
    const hoverRef = useRef(null)

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
                    <CarouselContent className="flex w-full space-x-1  ">
                        {
                            movies.map((movie: any, index: number) => (
                                <CarouselItem onMouseOver={() => handleMouseEnter(String(index))} onMouseLeave={() => handleMouseLeave()}  key={index} className="flex rounded-lg max-w-[240px]">
                                    <div className="rounded-lg shadow-md hover:border-b-4 hover:border-2 border-yellow-400 cursor-pointer relative">
                                        <img className="rounded-lg object-cover w-full" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                                        {
                                            mouseHover && (mouseHover.index == String(index)) && (
                                                <>
                                                    <div className='absolute bg-gradient-to-t from-[rgba(0,0,0,0.87)] z-10 w-full h-1/2 bottom-0 flex justify-start items-end p-5 gap-8'>
                                                        <div className="">
                                                            <Play size={30} className="text-[rgb(202,218,44)] mt-1 fill-[rgb(202,218,44)]" />
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        }
                                        <div ref={hoverRef} className="absolute hidden inset-0 bg-black opacity-30 rounded-lg"></div>
                                        <div className="absolute bottom-0 w-full font-semibold text-sm bg-[rgb(220,236,24)] flex items-center justify-center rounded-b-lg">NEW SEASON</div>
                                    </div>
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                    <CarouselPrevious className="absolute size-10 text-3xl left-0 top-1/2 transform -translate-y-1/2 text-white bg-black/80  transition-opacity duration-300 opacity-0 group-hover:opacity-100 hover:bg-black/80 hover:text-white" />
                    <CarouselNext className="absolute size-10 right-10 top-1/2 transform -translate-y-1/2 text-white bg-black/80  transition-opacity duration-300 opacity-0 group-hover:opacity-100 hover:bg-black/80 hover:text-white" />
                </Carousel>
            </div>
        </div>
    )
}

export default PosterComponent