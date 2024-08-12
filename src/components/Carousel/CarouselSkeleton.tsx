const CarouselSkeleton = () => {
    return (
        <div className="w-full h-[300px] mx-auto flex justify-center items-center space-x-4">
            {[...Array(4)].map((_, index) => (
                <div key={index} className="bg-gray-300 rounded-lg w-[780px] h-full animate-pulse"></div>
            ))}
        </div>
    )
}

export default CarouselSkeleton;
