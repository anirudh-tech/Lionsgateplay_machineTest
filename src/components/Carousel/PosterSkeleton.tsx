const PosterSkeleton = () => {
    return (
        <div className="flex flex-col gap-4 p-10">
            <div className="flex space-x-4">
                {[...Array(6)].map((_, index) => (
                    <div key={index} className="w-[240px] h-[360px] bg-gray-300 rounded-lg animate-pulse"></div>
                ))}
            </div>
        </div>
    )
}

export default PosterSkeleton;
