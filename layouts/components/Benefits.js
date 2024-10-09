import Image from "next/image";
import React from "react";
import {Container} from "@components/Container";

import Accordin from "@components/Accordion";



export const Benefits = (props) => {
    const { data } = props;
    const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, /p sed do eiusmod tempor incididunt ut   labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."



    return (
        <Container className=" flex flex-wrap mb-8 lg:gap-7 lg:flex-nowrap m-0 ">
            <div
                className={`flex items-center justify-center w-full lg:w-1/3  place-items-center   ${
                    props.imgPos === "right" ? "lg:order-1" : ""
                }`}
            >
            
               <div    className=" "    >
                <Image
                    src={data.image}
                    width={700}
                    height={700}
                    alt="Benefits"
                    className="object-cover"
                    placeholder="blur"
                   blurDataURL={data.image.src}
                />
                </div>
            </div>
            <div
                className={`flex flex-wrap items-center w-full lg:w-1/2 ${
                    data.imgPos === "right" ? "lg:justify-end" : ""
                }`}
            >
                
                <div>
                    <div className="flex flex-col w-full mt-4">
                        <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                            Lorem ipsum dolor sit amet
                        </h3>
                        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Nulla facilisi.
                        </p>
                    </div>

                    <div className="w-full mt-5">
                    
 
                    </div>
                   <Accordin />

                </div>
            </div>
        </Container>
    );
};


