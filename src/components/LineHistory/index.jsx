import React from "react";
import { Student, RocketLaunch } from "@phosphor-icons/react";
import { delay, motion } from "framer-motion";

export default function LineHistory(params) {

    const linehistory = [
        { nome: 'Formação', tipo: 'Estudo', ano: '2019', desc: 'Formação do ensino médio.', icon: Student },
        { nome: 'Formação', tipo: 'Estudo', ano: '2021', desc: 'Entrada na faculdade.', icon: Student },
        { nome: 'Carreira', tipo: 'Estágio', ano: '2022', desc: 'Entrada no primeiro estágio.', icon: RocketLaunch }
    ];

    return (
        <div className="max-w-full w-full h-full flex items-center justify-center relative px-5">
            <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: 'easeInOut' }}
                className="w-[2px] h-full bg-white absolute" />
            <div className="w-full h-full flex flex-col justify-around">
                {linehistory.map((line, index) => (
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ delay: 1.6, duration: 1.5, ease: 'anticipate' }}
                        key={index}
                        className={`w-full h-20 flex items-center justify-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                        <div className={`${index % 2 === 0 ? 'flex-row-reverse' : ''} w-1/2 h-full justify-between flex flex-col items-center`}>
                            <div className={`${index % 2 === 0 ? 'flex-row-reverse' : ''} w-full h-full flex items-center justify-around gap-4`}>
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 3.2, duration: 0.5, ease: 'easeInOut' }}
                                    className="w-14 h-14 rounded-full bg-clip-content border-4 justify-center flex items-center font-semibold text-lg text-white">{line.ano}</motion.span>
                                <div className="w-[80%] h-px bg-white flex items-center justify-center">
                                    <p className="font-aquire absolute text-white drop-shadow-md text-4xl -translate-y-1">{line.tipo}</p>
                                </div>
                            </div>
                            <span className={`flex items-center text-white font-thin text-sm justify-center flex-col-reverse ${index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'}`}>
                                {React.createElement(line?.icon, { size: "30" })} {line.desc}
                            </span>
                        </div>
                        <div className="w-1/2 h-full" />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
