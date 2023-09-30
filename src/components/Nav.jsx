import { useState } from "react";
import { useMediaQuery } from "../util/useMediaQuery";
export default function Nav() {
    const [toggled, setToggled] = useState(false);
    const matches = useMediaQuery("(min-width: 1280px)");
    return (
        <nav className="relative mx-8 mb-24 flex justify-between items-center pt-12 pb-1 font-medium md:mx-16 lg:mx-32">
            <svg
                className="absolute bottom-0 right-1/2 translate-x-1/2"
                width="380"
                height={4}
                viewBox="0 0 250 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M2 2L428 2"
                    strokeWidth={2}
                    stroke="#282828"
                    strokeLinecap="round"
                />
            </svg>
            <div>
                <img
                    src="/shanerookeylogo.png"
                    alt="shane rookey"
                    height={100}
                    width={100}
                />
            </div>

            {!matches ?? (
                <h1 className="text-2xl font-bold">
                    <a href="/">Welcome.</a>
                </h1>
            )}

            <div
                onClick={() => setToggled(!toggled)}
                className="space-y-1 cursor-pointer"
            >
                <span className="block h-0.5 w-8 bg-black"></span>
                <span className="block h-0.5 w-6 bg-black"></span>
                <span className="block h-0.5 w-4 bg-black"></span>
            </div>
        </nav>
    );
}
