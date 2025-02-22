import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

const images = [
	{ src: "https://cdn.dribbble.com/userupload/17036137/file/original-aeb39f75a9c1f60cbd4021d1b94388ea.png?resize=1024x768&vertical=center"},
  { src: "https://cdn.dribbble.com/userupload/32373444/file/original-7faa0217ad6de8a80e606a00076ab4a0.png?resize=1504x1128&vertical=center"},
  { src: "https://cdn.dribbble.com/userupload/33091798/file/original-15cab2b3bf2bc1a53aa1d7e4509714a5.jpg?resize=1504x1128&vertical=center"}
];

const Slider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollState = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", updateScrollState);
    updateScrollState();
  }, [emblaApi, updateScrollState]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 transition-transform  ">
          {images.concat(images).map((item, index) => (
            <div
              key={index}
              className={clsx(
                "md:min-w-[50%] lg:min-w-[40%] p-4 transition-transform duration-1000",
                index % images.length === selectedIndex ? "scale-110 shadow-xl" : "scale-90 opacity-80"
              )}
            >
              <div className="relative bg-white rounded-xl overflow-hidden shadow-md transition-all duration-1000">
                <img src={item.src} className="w-full h-72 object-cover transition-transform duration-1000" />
  
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <div key={index} className={clsx("w-3 h-3 rounded-full transition-all duration-1000 ", index === selectedIndex ? "bg-gray-800" : "bg-gray-400 opacity-50")}></div>
        ))}
      </div>
      <Button
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-800 p-2 rounded-full transition-transform duration-500 hover:scale-110"
        onClick={() => emblaApi && emblaApi.scrollPrev()}
      >
        <ChevronLeft className="text-white" />
      </Button>
      <Button
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-800 p-2 rounded-full transition-transform duration-500 hover:scale-110"
        onClick={() => emblaApi && emblaApi.scrollNext()}
      >
        <ChevronRight className="text-white" />
      </Button>
    </div>
  );
};

export default Slider;
