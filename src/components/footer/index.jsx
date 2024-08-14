import "./style.scss"
import Container from '../../components/layouts/container'
import { NavLink } from "react-router-dom";

const index = () => {
    return (
        

<footer className="h-[96px] fixed bottom-0 left-0 z-20 w-full p-8 bg-[#333A44] flex md:items-center lg:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <Container>
        <div className="flex justify-between items-center gap-auto ">
            <ul className="flex flex-wrap items-center mt-3 text-sm dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6 text-[29px] font-bold text-white block">scoot</a>
                </li>
                <li>
                    <NavLink to="/about" className="text-[#939CAA] active:text-[#FCB72B] hover:underline me-4 md:me-6 focus:text-[#FCB72B] focus:text-bold">About</NavLink>
                </li>
                <li>
                    <a href="/location" className="text-[#939CAA] active:text-[#FCB72B] hover:underline me-4 md:me-6 focus:text-[#FCB72B] focus:text-bold">Location</a>
                </li>
                <li>
                    <a href="/careers" className="text-[#939CAA] active:text-[#FCB72B] hover:underline focus:text-[#FCB72B] focus:text-bold">Careers</a>
                </li>
            </ul>

            <ul className="flex gap-5">
                <li><a href="https://www.facebook.com/"><i className="bi bi-facebook duration-100 text-[24px] text-[#FCB72B] shadow-xl hover:text-[#E5ECF4] focus:text-[#fff]"></i></a></li>
                <li><a href="https://x.com/?lang=en"><i className="bi bi-twitter duration-100 text-[24px] text-[#FCB72B] shadow-xl hover:text-[#E5ECF4] focus:text-[#fff]"></i></a></li>
                <li><a href="https://www.instagram.com/"><i className="bi bi-instagram duration-100 text-[24px] text-[#FCB72B] shadow-xl hover:text-[#E5ECF4] focus:text-[#fff]"></i></a></li>
            </ul>
        </div>
    </Container>
</footer>

    );
};

export default index;