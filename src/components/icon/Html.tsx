import React from 'react'
import { motion } from "framer-motion";


function Html({ time=1.5 }: { time?: number }) {
    return (
        <svg width={100} height={100} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><motion.path

            initial={{
                pathLength: 0,
                scale: 0
            }}
            animate={{
                pathLength: 1,
                scale: 1
            }}
            transition={{
                duration: time
            }} 
            d="m5.902 27.201-2.247-25.201h24.69l-2.25 25.197-10.11 2.803z" fill="#e44f26" /><motion.path
                initial={{
                    pathLength: 0,
                    scale: 0
                }}
                animate={{
                    pathLength: 1,
                    scale: 1
                }}
                transition={{
                    duration: time
                }} d="m16 27.858 8.17-2.265 1.922-21.532h-10.092z" fill="#f1662a" /><motion.path
                initial={{
                    pathLength: 0,
                    scale: 0
                }}
                animate={{
                    pathLength: 1,
                    scale: 1
                }}
                transition={{
                    duration: time
                }} d="m16 13.407h-4.09l-.282-3.165h4.372v-3.091h-.011-7.739l.074.83.759 8.517h6.917z" fill="#ebebeb" /><motion.path
                initial={{
                    pathLength: 0,
                    scale: 0
                }}
                animate={{
                    pathLength: 1,
                    scale: 1
                }}
                transition={{
                    duration: time
                }} d="m16 21.434-.014.004-3.442-.929-.22-2.465h-1.673-1.43l.433 4.852 6.332 1.758.014-.004z" fill="#ebebeb" /><g fill="#fff"><motion.path
                    initial={{
                        pathLength: 0,
                        scale: 0
                    }}
                    animate={{
                        pathLength: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: time
                    }} d="m15.989 13.407v3.091h3.806l-.358 4.009-3.448.93v3.216l6.337-1.757.046-.522.726-8.137.076-.83h-.833z" /><motion.path
                    initial={{
                        pathLength: 0,
                        scale: 0
                    }}
                    animate={{
                        pathLength: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: time
                    }} d="m15.989 7.151v1.92 1.164.007h7.456.01l.062-.694.141-1.567.074-.83z" /></g></svg>
    )
}

export default Html

