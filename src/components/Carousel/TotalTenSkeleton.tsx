const TotalTenSkeleton = () => {
    return (
        <div className="flex flex-col gap-4 pl-10">
            <div className="w-1/3 h-8 bg-gray-300 rounded-md animate-pulse"></div>
            <div className="flex space-x-4">
                {[...Array(10)].map((_, index) => (
                    <div key={index} className="w-[330px] h-[290px] bg-gray-300 rounded-lg animate-pulse"></div>
                ))}
            </div>
        </div>
    )
}

export default TotalTenSkeleton;
