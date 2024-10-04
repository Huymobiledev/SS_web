/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';

// Service Card
export const ServiceCard = ({ index, title, icon }: { index: number, title: string, icon: string }) => {
    return (
        <Tilt
            // options={{
            //     max: 45,
            //     scale: 1,
            //     speed: 450,
            // }}
            className="w-full"
        >
            <motion.div
                initial={{ opacity: 0.5, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: index + 0.2, delay: 0.2, ease: "easeOut" }}
                className="w-full green-pink-gradient rounded-[20px] shadow-card"
            >
                <div className="rounded-[20px] flex justify-evenly items-center flex-col">
                    <img src={icon} alt={title} className="w-full h-full object-contain" />
                </div>
            </motion.div>
        </Tilt>

    );
};