import "./style.scss"
import PhoneImg from '../../assets/icons/phone-icon.svg'
import ScooterImg from '../../assets/icons/scooter-icon.svg'
import RiderImg from '../../assets/icons/rider-icon.svg'


const index = () => {
    return (
        <>
        <div className="cards flex gap-[30px] flex-col lg:flex-row text-center lg:text-start mx-auto">

            <div className="card max-w-[350px] flex flex-col items-center lg:items-start">
                <div className="phone w-20 h-20 rounded-full bg-[#FCB72B] flex items-center justify-center ">
                    <img className="duration-150" src={PhoneImg} alt="phone" />
                </div>
                <h3 className="text-[#495567] font-bold text-[24px] mt-[40px] mb-[27px]">Locate with app</h3>
                <p className="text-[15px] font-normal text-[#939CAA] leading-7">Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. </p>
            </div>

            <div className="card max-w-[350px] flex flex-col items-center lg:items-start">
                <div className="scooter w-20 h-20 rounded-full bg-[#FCB72B] flex items-center justify-center ">
                    <img className="duration-150" src={ScooterImg} alt="phone" />
                </div>
                <h3 className="text-[#495567] font-bold text-[24px] mt-[40px] mb-[27px]">Locate with app</h3>
                <p className="text-[15px] font-normal text-[#939CAA] leading-7">Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. </p>
            </div>

            <div className="card max-w-[350px] flex flex-col items-center lg:items-start">
                <div className="rider w-20 h-20 rounded-full bg-[#FCB72B] flex items-center justify-center ">
                    <img className="duration-150" src={RiderImg} alt="phone" />
                </div>
                <h3 className="text-[#495567] font-bold text-[24px] mt-[40px] mb-[27px]">Locate with app</h3>
                <p className="text-[15px] font-normal text-[#939CAA] leading-7">Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. </p>
            </div>

        </div>
        
        </>
    );
};

export default index;