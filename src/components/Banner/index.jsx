import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import headerImg from '../../assets/headerImg.svg';
import { motion } from 'framer-motion';

export default function Banner(params) {
    const [loop, setLoop] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    const toRotate = ["Matheus Sousa","Web Developer", "Web Designer", "UI/UX Designer"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loop % toRotate.length;
        let fulltext = toRotate[i];
        let updatedText = deleting ? fulltext.substring(0, text.length - 1) : fulltext.substring(0, text.length + 1);

        setText(updatedText);

        if (deleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!deleting && updatedText === fulltext) {
            setDeleting(true);
            setDelta(period);
        } else if (deleting && updatedText === '') {
            setDeleting(false);
            setLoop(loop + 1);
            setDelta(500);
        }
    }

    return (
        <section className="flex items-center justify-around w-full h-full text-white">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", damping: 10, stiffness: 100 }}
                className="flex flex-col w-full h-1/3 items-start justify-center font-semibold gap-5">
                <div className="flex gap-4 text-5xl h-full items-center">
                    <h1>{`Hi! I'm`}</h1><h1 className="bg-gradient-to-r from-purple-500 to-sky-500 bg-clip-text text-transparent h-full flex items-center">{text}</h1>
                </div>
            </motion.div>
        </section>
    )
}