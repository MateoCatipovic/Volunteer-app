const Pocetna = () => {
  return (
    <>
      <div className="">
        <div className="relative z-1 top-0 left-0 right-0 ">
          <video className="h-[695px] w-full object-cover" autoPlay loop muted>
            <source src="bg-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="flex justify-between ">
          <div className="w-[50%]">
            <h1>Hello, this is volunteer app for helping people.</h1>
            <p>
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
            className="h-[300px] rounded-[10px]"
          />
        </div>
      </div>
    </>
  );
};

export default Pocetna;
