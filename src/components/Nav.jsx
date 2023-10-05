import { useState } from "react";
import { useMediaQuery } from "../util/useMediaQuery";
import { motion } from "framer-motion";
export default function Nav() {
    const [toggled, setToggled] = useState(false);
    const matches = useMediaQuery("(min-width: 1280px)");

    const navMotion = {
        visible: {
            opacity: 1,

            transition: {
                when: "beforeChildren",
                staggerChildren: 0.15,
            },
        },
        hidden: {
            opacity: 0,
        },
    };
    const itemMotion = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
    };

    return (
        <nav className="relative mb-12 flex justify-between items-center pt-12 font-medium mx-2">
            <svg
                className="absolute bottom-0 left-0"
                viewBox="0 0 250 4"
                fill="none"
                width="25%"
            >
                <path d="M2 2L450 2" stroke="#282828" />
            </svg>
            <svg
                className="absolute bottom-0 right-0"
                viewBox="0 0 250 4"
                fill="none"
                width="25%"
            >
                <path d="M2 2L450 2" stroke="#282828" />
            </svg>

            <img
                src="/shanerookeylogo.png"
                alt="shane rookey"
                height={100}
                width={100}
            />

            <div className="text-center">
                <h1>Shane Rookey</h1>
                <h1>Full-Stack Software Engineer</h1>
            </div>

            {!matches ? (
                <div
                    onClick={() => setToggled(!toggled)}
                    className="space-y-1.5 ml-14 cursor-pointer z-50"
                >
                    <motion.span
                        animate={{
                            rotateZ: toggled ? 45 : 0,
                            y: toggled ? 8 : 0,
                        }}
                        className="block h-0.5 w-8 bg-black"
                    ></motion.span>
                    <motion.span
                        animate={{
                            width: toggled ? 0 : 24,
                        }}
                        className="block h-0.5 w-6 bg-black"
                    ></motion.span>
                    <motion.span
                        animate={{
                            rotateZ: toggled ? 135 : 0,
                            width: toggled ? 32 : 16,
                            y: toggled ? -8 : 0,
                        }}
                        className="block h-0.5 w-4 bg-black"
                    ></motion.span>
                </div>
            ) : (
                <div className="flex gap-5">
                    <a href="/">Home</a>
                    <a href="/contact">Contact</a>
                </div>
            )}

            {toggled & !matches ? (
                <div className="fixed flex bg-white bottom-0 left-0 w-full h-screen items-center justify-center z-40">
                    <motion.div
                        variants={navMotion}
                        animate="visible"
                        initial="hidden"
                        className="flex flex-col text-xl gap-12"
                    >
                        <motion.a variants={itemMotion} href="/">
                            Home
                        </motion.a>
                        <motion.a variants={itemMotion} href="/contact">
                            Contact
                        </motion.a>
                    </motion.div>
                </div>
            ) : undefined}
        </nav>
    );
}
