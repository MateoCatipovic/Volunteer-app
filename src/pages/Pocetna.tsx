import { useRef } from "react";
import Button from "@mui/material/Button";
const Pocetna = () => {
  const videoContainerRef = useRef(null);

  const scrollToHello = () => {
    const helloDiv = document.getElementById("hello");
    helloDiv.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="relative">
        <div className="relative z-1 top-0 left-0 right-0 ">
          <video className="h-[920px] w-full object-cover" autoPlay loop muted>
            <source src="bg-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-black bg-opacity-50 w-full h-[920px] flex flex-col justify-center items-center  ">
            <h1 className="text-white text-4xl font-bold mb-8">
              Dobrodošli u aplikaciju za volontiranje{" "}
            </h1>

            <Button
              variant="outlined"
              color="inherit"
              size="large"
              onClick={scrollToHello}
            >
              Saznaj više
            </Button>
          </div>
        </div>

        <div id="hello" className="flex justify-between py-10 px-[200px]">
          <div className="w-[50%] text-left">
            <h1 className="text-2xl mb-6">
              Hello, this is volunteer app for helping people.
            </h1>
            <p className="text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
              metus sit amet sapien finibus consequat in eget est. Sed a luctus
              massa. Sed varius, nulla quis ultricies lobortis, odio metus
              suscipit nunc, a imperdiet enim lacus at sapien. Praesent vel
              sodales erat. Duis tellus arcu, consequat sed ornare sed,
              condimentum id ante. Aliquam a venenatis nunc, non fermentum odio.
              In hac habitasse platea dictumst. Suspendisse porttitor sodales
              lorem nec gravida. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia curae; Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Aliquam erat volutpat.
              Suspendisse porttitor sodales lorem nec gravida. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae; Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Aliquam erat volutpat.
            </p>
          </div>
          <img
            src="profilna.jpg"
            alt="profilna-slika"
            className="h-[500px] rounded-[10px]"
          />
        </div>
      </div>
    </>
  );
};

export default Pocetna;
