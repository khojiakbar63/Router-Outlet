import "./style.scss";
import Container from "../../components/layouts/container";
import ThreeCards from "../../components/three-card";
import EasyGuy from "../../assets/images/guy.svg";
import City from "../../assets/images/city.svg"
import Wallet from "../../assets/images/wallet.svg"
import Apple from "../../assets/icons/apple.svg"
import Google from "../../assets/icons/google.svg"
import OrangreButton from "../../components/buttons"
import SectionTitle from "../../components/ui/section-title"
import Paragraph from "../../components/ui/p-style"

const index = () => {
  return (
    <>
      {/* ------------------ Intro ------------------ */}
      <div id="intro"
        style={{
          position: "relative",
          width: "100%",
          minHeight: "70vh",
          zIndex: 0,
          marginTop: "96px",
        }}>
        <Container>
          <div className="flex flex-col justify-center h-[70vh]">
            <h1 className="font-bold text-[56px] text-[#fff] max-w-[550px]">
              Scooter sharing made simple
            </h1>
            <p className="max-w-[525px] mt-[40px] mb-[50px] text-[#fff] text-[15px]">
              Scoot takes the hassle out of urban mobility. Our bikes are placed
              in convenient locations in each of our cities. Use our app to
              locate the nearest bike, unlock it with a tap, and you’re away!
            </p>
            <OrangreButton>Get Scootin</OrangreButton>
          </div>
        </Container>
      </div>
      {/*  ------------------ Three ------------------ */}
      <div id="main" style={{ width: "100%", zIndex: 0 }}>
        <Container>
          <div className="py-32 flex lg:flex-start">
            <ThreeCards />
          </div>
        </Container>
      </div>
      {/*  ------------------ Easy ------------------ */}
      <div id="easy" style={{ width: "100%", zIndex: 0, marginBottom: "160px" }}>
        <div className="flex flex-col lg:flex-row ">
          <Container>
            <div className="max-w-[510px] mx-auto mb-20 lg:mb-0">
              <SectionTitle>Easy to use riding telemetry</SectionTitle>
              <Paragraph text=" The Scoot app is available with riding telemetry. This means it
                can show you your average speed, how long you've been using the
                scooter, your traveling distance, and many more things all in an
                easy to use app." marginTop={20} marginBottom={100}/>
               
              <OrangreButton>Learn More</OrangreButton>
            </div>
          </Container>
          <img src={EasyGuy} alt="guy" />
        </div>
      </div>
      {/*  ------------------ City ------------------ */}
      <div id="city" style={{ width: "100%", zIndex: 0, marginBottom: "160px" }}>
        <div className="flex lg:flex-row flex-col-reverse ">
        <img src={City} alt="guy" />
          <Container>
            <div className="max-w-[510px] mx-auto">
              <SectionTitle>Coming to a city near you</SectionTitle>
              <Paragraph marginTop={20} marginBottom={100} text="Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year." />
              <OrangreButton>
                Learn More
              </OrangreButton>
            </div>
          </Container>
        </div>
      </div>
      {/*  ------------------ Wallet ------------------ */}
      <div id="wallet" style={{ width: "100%", zIndex: 0, marginBottom: "160px" }}>
        <div className="flex flex-col lg:flex-row">
          <Container>
            <div className="max-w-[510px] mx-auto">
              <SectionTitle>Zero hassle payments</SectionTitle>
              <Paragraph text="Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year." marginTop={20} marginBottom={100} />
              <OrangreButton>
                Learn More
              </OrangreButton>
            </div>
          </Container>
          <img src={Wallet} alt="wallet" />
        </div>
      </div>
      {/*  ------------------ Bottom ------------------ */}
      <div id="bottom" className="mb-[96px] bg-[#495567] py-[102px]" style={{ width: "100%", zIndex: 0 }}>
        <Container>
          <div className="flex justify-between flex-col lg:flex-row">
            <h1 className="text-[48px] max-w-[455px] font-bold text-white">Sign up and Scoot off today</h1>
            <div className="flex gap-5 items-center">
              <div className="hover:shadow-2xl active:scale-105 duration-150">
                <img className="h-[56px] " src={Apple} alt="Apple" />
              </div>
              <div className="hover:shadow-2xl active:scale-105 duration-150">
                <img className="h-[56px]" src={Google} alt="google" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default index;
