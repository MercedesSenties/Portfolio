import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

const ImageCarousel = ({ images, width, height }) => {
  return (
    <div>
      <Carousel className="items-center">
        {images.map((item, i) => {
          if (item.type === "image") {
            return (
              <div className="duration-700 ease-in-out" key={i}>
                <Image
                  src={item.src}
                  className="block"
                  alt="alt"
                  width={width}
                  height={height}
                />
              </div>
            );
          } else if (item.type === "video") {
            return (
              <div className="duration-700 ease-in-out" key={i}>
                <iframe
                  className="w-full aspect-video"
                  src={`https://www.youtube-nocookie.com/embed/${item.src}`}
                  title="YouTube video player"
                ></iframe>
              </div>
            );
          }
        })}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
