import banner from "../../assets/banner.jpg"
export default function HeroSection() {
    return (
        <>
            <div className="hero container m-auto lg:py-10 lg:mt-10 mt-5 px-5">
                <div className=" flex  items-center flex-col lg:flex-row justify-between gap-10">
                    <div className="flex-1/2">
                        <img
                            src={banner}
                            className=" w-full rounded-lg shadow-2xl"
                        />
                    </div>

                    <div className="flex-1/2">
                        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">Find Your Perfect Keyboard – Mechanical, Wireless & More</h1>
                        <p className="py-6">
                            Explore our wide selection of high-performance keyboards designed for gamers, professionals, and everyday users. From sleek wireless options to tactile mechanical models, discover the ideal keyboard that matches your style and workflow.


                        </p>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}