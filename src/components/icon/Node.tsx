import React from 'react';
import { motion } from "framer-motion";

function Node({ time = 1.5 }: { time?: number }) {
    return (
        <svg height={100} preserveAspectRatio="xMidYMid" viewBox="0 0 512 314" width={100} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="a"><stop offset="0" stop-color="#41873f" /><stop offset=".3288" stop-color="#418b3d" /><stop offset=".6352" stop-color="#419637" /><stop offset=".9319" stop-color="#3fa92d" /><stop offset="1" stop-color="#3fae2a" /></linearGradient><linearGradient id="b" x1="68.188441%" x2="27.822694%" xmlnsXlink="#a" y1="17.486831%" y2="89.755142%" /><motion.path

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
            }} id="c" d="m57.903386 1.84920993c-1.8492099-1.04018058-4.0451467-1.04018058-5.8943567 0l-48.6573363 28.08487587c-1.84920993 1.0401806-2.88939052 3.0049661-2.88939052 5.0853273v56.2853273c0 2.0803612 1.15575621 4.0451467 2.88939052 5.0853273l48.6573363 28.0848763c1.84921 1.04018 4.0451468 1.04018 5.8943567 0l48.657336-28.0848763c1.84921-1.0401806 2.889391-3.0049661 2.889391-5.0853273v-56.2853273c0-2.0803612-1.155756-4.0451467-2.889391-5.0853273z" /><linearGradient id="d" x1="43.276547%" x2="159.245277%" y1="55.168777%" y2="-18.306138%"><stop offset=".1376" stop-color="#41873f" /><stop offset=".4032" stop-color="#54a044" /><stop offset=".7136" stop-color="#66b848" /><stop offset=".9081" stop-color="#6cc04a" /></linearGradient><linearGradient id="e"><stop offset=".09191646" stop-color="#6cc04a" /><stop offset=".2864" stop-color="#66b848" /><stop offset=".5968" stop-color="#54a044" /><stop offset=".8624" stop-color="#41873f" /></linearGradient><linearGradient id="f" x1="-4413.77%" x2="5327.93%" xmlnsXlink="#e" y1="13.43%" y2="13.43%" /><linearGradient id="g" x1="-4.388804%" x2="101.499239%" xmlnsXlink="#e" y1="49.997207%" y2="49.997207%" /><linearGradient id="h" x1="-9713.77%" x2="27.93%" xmlnsXlink="#e" y1="36.21%" y2="36.21%" /><linearGradient id="i" x1="-103.860714%" x2="100.796849%" xmlnsXlink="#e" y1="50.275421%" y2="50.275421%" /><linearGradient id="j" x1="130.613025%" x2="4.393277%" xmlnsXlink="#a" y1="-211.06936%" y2="201.605387%" /><mask id="k" fill="#fff"><use fill="#fff" xmlnsXlink="#c" /></mask></defs><g fill="none"><motion.path

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
                }} d="m253.110609 313.094357c-1.733634 0-3.351693-.462303-4.854176-1.271332l-15.371557-9.130474c-2.311513-1.271332-1.155756-1.733635-.462303-1.964786 3.120542-1.04018 3.69842-1.271332 6.934538-3.120542.346726-.231151.809029-.115575 1.155756.115576l11.788713 7.050113c.462303.231151 1.040181.231151 1.386908 0l46.114672-26.697968c.462303-.231152.693454-.693454.693454-1.271332v-53.280361c0-.577879-.231151-1.040181-.693454-1.271332l-46.114672-26.582393c-.462303-.231151-1.040181-.231151-1.386908 0l-46.114673 26.582393c-.462302.231151-.693453.809029-.693453 1.271332v53.280361c0 .462302.231151 1.04018.693453 1.271332l12.597743 7.281264c6.818962 3.467268 11.09526-.577878 11.09526-4.623025v-52.586908c0-.693453.577878-1.386907 1.386907-1.386907h5.894357c.693454 0 1.386907.577878 1.386907 1.386907v52.586908c0 9.130474-4.969751 14.446952-13.637923 14.446952-2.658239 0-4.7386 0-10.632957-2.88939l-12.13544-6.934537c-3.004966-1.733635-4.854176-4.969752-4.854176-8.437021v-53.280361c0-3.467268 1.84921-6.703386 4.854176-8.43702l46.114672-26.697969c2.889391-1.618058 6.818962-1.618058 9.708353 0l46.114672 26.697969c3.004966 1.733634 4.854176 4.969752 4.854176 8.43702v53.280361c0 3.467269-1.84921 6.703386-4.854176 8.437021l-46.114672 26.697968c-1.502484.693454-3.236118 1.040181-4.854177 1.040181zm14.215802-36.637472c-20.225734 0-24.386456-9.24605-24.386456-17.105192 0-.693454.577878-1.386907 1.386907-1.386907h6.009933c.693453 0 1.271331.462302 1.271331 1.155756.924605 6.125508 3.582845 9.130474 15.83386 9.130474 9.708353 0 13.869075-2.195937 13.869075-7.39684 0-3.004966-1.155756-5.200903-16.296163-6.703386-12.597742-1.271332-20.456884-4.045147-20.456884-14.100226 0-9.361625 7.859142-14.909255 21.034763-14.909255 14.793679 0 22.074943 5.085328 22.999548 16.180587 0 .346727-.115576.693454-.346727 1.040181-.231151.231151-.577878.462302-.924605.462302h-6.009932c-.577878 0-1.155756-.462302-1.271332-1.04018-1.386907-6.356659-4.969752-8.437021-14.446952-8.437021-10.632958 0-11.904289 3.69842-11.904289 6.472235 0 3.351693 1.502483 4.391874 15.83386 6.241084 14.215801 1.84921 20.919187 4.507449 20.919187 14.446952-.115576 10.170655-8.43702 15.949436-23.115124 15.949436z" fill="#539e43" /><motion.path

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
                    }} d="m110.027991 104.711512c0-2.080361-1.155756-4.045146-3.004966-5.0853269l-49.0040634-28.2004515c-.8090293-.4623024-1.7336343-.6934537-2.6582393-.8090293h-.4623024c-.924605 0-1.84921.3467269-2.6582393.8090293l-49.00406322 28.2004515c-1.84920993 1.0401809-3.00496614 3.0049659-3.00496614 5.0853269l.11557562 75.817608c0 1.04018.57787811 2.080361 1.50248307 2.542663.92460497.577878 2.08036118.577878 2.88939052 0l29.12505645-16.642889c1.8492099-1.040181 3.0049661-3.004966 3.0049661-5.085327v-35.481716c0-2.080361 1.1557562-4.045147 3.0049662-5.085327l12.3665914-7.165689c.924605-.577878 1.9647855-.809029 3.0049661-.809029s2.0803612.231151 2.8893905.809029l12.3665915 7.165689c1.8492099 1.04018 3.0049661 3.004966 3.0049661 5.085327v35.481716c0 2.080361 1.1557562 4.045146 3.0049661 5.085327l29.1250561 16.642889c.924605.577878 2.080362.577878 3.004967 0 .924604-.462302 1.502483-1.502483 1.502483-2.542663z" fill="#333" /><motion.path

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
                    }} d="m345.571106.34672686c-.924605-.46230248-2.080361-.46230248-2.88939 0-.924605.57787811-1.502483 1.50248307-1.502483 2.54266366v75.12415348c0 .6934537-.346727 1.3869075-1.040181 1.84921-.693454.3467268-1.386908.3467268-2.080361 0l-12.251016-7.0501129c-1.84921-1.0401806-4.045147-1.0401806-5.894357 0l-49.004063 28.3160269c-1.84921 1.040181-3.004966 3.004966-3.004966 5.085327v56.516479c0 2.080361 1.155756 4.045147 3.004966 5.085327l49.004063 28.316027c1.84921 1.040181 4.045147 1.040181 5.894357 0l49.004063-28.316027c1.84921-1.04018 3.004966-3.004966 3.004966-5.085327v-140.8866817c0-2.1959368-1.155756-4.1607223-3.004966-5.2009029zm-4.507449 143.77607214c0 .577878-.231151 1.040181-.693454 1.271332l-16.758465 9.708352c-.462302.231151-1.04018.231151-1.502483 0l-16.758465-9.708352c-.462302-.231151-.693454-.809029-.693454-1.271332v-19.416704c0-.577878.231152-1.040181.693454-1.271332l16.758465-9.708352c.462303-.231151 1.040181-.231151 1.502483 0l16.758465 9.708352c.462303.231151.693454.809029.693454 1.271332z" fill="#333" /><g transform="translate(401.047404 70.501129)"><motion.path

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
                        }} d="m107.600903 53.7426637c1.84921-1.0401806 2.88939-3.0049662 2.88939-5.0853274v-13.7534988c0-2.0803612-1.155756-4.0451468-2.88939-5.0853273l-48.6573364-28.20045151c-1.8492099-1.04018059-4.0451467-1.04018059-5.8943567 0l-49.00406317 28.31602711c-1.84920994 1.0401806-3.00496614 3.0049661-3.00496614 5.0853273v56.5164785c0 2.0803612 1.1557562 4.0451468 3.00496614 5.0853274l48.65733637 27.738149c1.8492099 1.040181 4.0451467 1.040181 5.778781 0l29.4717833-16.411738c.924605-.462303 1.5024831-1.502483 1.5024831-2.542664 0-1.04018-.5778781-2.080361-1.5024831-2.542664l-49.2352144-28.3160266c-.924605-.5778781-1.5024831-1.5024831-1.5024831-2.5426637v-17.6830699c0-1.0401806.5778781-2.0803612 1.5024831-2.5426637l15.3715575-8.7837472c.924605-.5778781 2.0803612-.5778781 3.0049662 0l15.3715575 8.7837472c.924605.5778781 1.5024831 1.5024831 1.5024831 2.5426637v13.8690745c0 1.0401805.5778781 2.0803611 1.5024831 2.5426636.9246049.5778781 2.0803611.5778781 3.0049661 0z" fill="#333" /><motion.path

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
                        }} d="m55.2451467 51.0844244c.3467269-.2311513.8090294-.2311513 1.1557562 0l9.3616253 5.4320542c.3467269.2311512.5778781.5778781.5778781 1.0401805v10.8641084c0 .4623025-.2311512.8090293-.5778781 1.0401806l-9.3616253 5.4320542c-.3467268.2311512-.8090293.2311512-1.1557562 0l-9.3616253-5.4320542c-.3467268-.2311513-.5778781-.5778781-.5778781-1.0401806v-10.8641084c0-.4623024.2311513-.8090293.5778781-1.0401805z" fill="#539e43" /></g><g transform="translate(134.06772 70.501129)"><use fill="url(#b)" xmlnsXlink="#c" /><g mask="url(#k)"><motion.path

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
                            }} d="m51.8934537 1.84920993-48.77291194 28.08487587c-1.84920993 1.0401806-3.12054176 3.0049661-3.12054176 5.0853273v56.2853273c0 1.3869075.5778781 2.6582393 1.50248307 3.6984199l54.78284423-93.84740409c-1.3869074-.23115124-3.0049661-.11557562-4.3918736.69345372z" /><motion.path

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
                                }} d="m56.6320542 125.052822c.4623025-.115576.9246049-.346727 1.3869074-.577878l48.7729124-28.0848763c1.84921-1.0401806 3.004966-3.0049661 3.004966-5.0853273v-56.2853273c0-1.5024831-.693454-3.0049661-1.733635-4.0451467z" /><motion.path

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
                                }} d="m106.676298 29.9340858-48.8884876-28.08487587c-.4623025-.23115124-1.0401806-.46230248-1.5024831-.5778781l-54.78284423 93.84740407c.46230248.5778781 1.04018059 1.0401806 1.61805869 1.3869074l48.88848754 28.0848757c1.3869075.80903 3.0049662 1.040181 4.5074493.577878l51.4311514-94.078555c-.346727-.4623025-.80903-.8090294-1.271332-1.1557562z" fill="url(#d)" /></g><g mask="url(#k)"><g transform="translate(0 -9.24605)"><motion.path

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
                                    }} d="m109.79684 100.55079v-56.2853272c0-2.0803612-1.271332-4.0451468-3.120542-5.0853274l-48.8884876-28.0848758c-.5778781-.3467269-1.1557562-.5778781-1.8492099-.6934537l53.5115125 91.4203161c.231151-.346727.346727-.809029.346727-1.271332z" fill="none" /><motion.path

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
                                        }} d="m3.12054176 39.1801354c-1.84920993 1.0401806-3.12054176 3.0049662-3.12054176 5.0853274v56.2853272c0 2.080361 1.38690745 4.045147 3.12054176 5.085327l48.88848754 28.084876c1.1557563.693454 2.4270881.924605 3.8139955.693454l-52.35575618-95.3498872z" fill="none" /><g fill-rule="evenodd"><motion.path

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
                                            }} d="m50.3909707.80902935-.6934538.34672686h.924605z" fill="url(#f)" /><motion.path

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
                                            }} d="m106.791874 105.636117c1.386907-.809029 2.427088-2.195936 2.88939-3.698419l-53.6270879-91.5358921c-1.3869075-.2311513-2.8893905-.1155757-4.1607224.6934537l-48.5417607 27.9693002 52.3557562 95.4654632c.6934537-.115576 1.5024831-.346727 2.1959368-.693454z" fill="url(#g)" /><motion.path

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
                                            }} d="m111.299323 104.711512-.346727-.577878v.80903z" fill="url(#h)" /><motion.path

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
                                            }} d="m106.791874 105.636117-48.7729124 28.084876c-.6934537.346727-1.3869074.577878-2.1959368.693454l.924605 1.733634 54.0893902-31.320993v-.693454l-1.386907-2.311512c-.231151 1.618059-1.271332 3.004966-2.658239 3.813995z" fill="url(#i)" /><motion.path

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
                                            }} d="m106.791874 105.636117-48.7729124 28.084876c-.6934537.346727-1.3869074.577878-2.1959368.693454l.924605 1.733634 54.0893902-31.320993v-.693454l-1.386907-2.311512c-.231151 1.618059-1.271332 3.004966-2.658239 3.813995z" fill="url(#j)" /></g></g></g></g></g></svg>
    )
}

export default Node