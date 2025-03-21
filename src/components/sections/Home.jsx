import { RevealOnScroll } from "../RevealOnScroll";
import { ImageCarousel } from "../ImageCarousel";
import "./ButtonStyles.css"; // Import external CSS for animations

export const Home = () => {
  // Using local images from the public/images directory
  const images = [
    "/tylerphung/images/image1.jpg",
    "/tylerphung/images/image2.jpg",
    "/tylerphung/images/image3.jpg",
    "/tylerphung/images/image4.jpg",
    "/tylerphung/images/image5.jpg"
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="z-10">
          <ImageCarousel images={images} />
        </div>
      </RevealOnScroll>
    </section>
  );
};
