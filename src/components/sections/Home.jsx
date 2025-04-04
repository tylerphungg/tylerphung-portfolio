import { RevealOnScroll } from "../RevealOnScroll";
import { ImageCarousel } from "../ImageCarousel";
import "./ButtonStyles.css"; // Import external CSS for animations
import image1 from "/images/image1.jpg";
import image2 from "/images/image2.jpg";
import image3 from "/images/image3.jpg";
import image4 from "/images/image4.jpg";
import image5 from "/images/image5.jpg";

export const Home = () => {
  const images = [image1, image2, image3, image4, image5];

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center relative overflow-x-hidden px-2 md:px-0"
    >
      <RevealOnScroll>
        <div className="w-full">
          <ImageCarousel images={images} />
        </div>
      </RevealOnScroll>
    </section>
  );
};
