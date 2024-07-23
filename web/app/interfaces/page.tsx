'use client'
import EmblaCarousel from '@/components/ui/carousel/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel'

import storeTablet1 from "@/public/wireframes/FE_store_tablet/1.png";
import storeTablet2 from "@/public/wireframes/FE_store_tablet/2.png";
import storeTablet3 from "@/public/wireframes/FE_store_tablet/3.png";
import storeTablet4 from "@/public/wireframes/FE_store_tablet/4.png";

import storeUtil1 from "@/public/wireframes/FE_store_util/1.png";
import storeUtil2 from "@/public/wireframes/FE_store_util/2.png";

import userWeb1 from "@/public/wireframes/FE_user_web/1.png";
import userWeb2 from "@/public/wireframes/FE_user_web/2.png";
import userWeb3 from "@/public/wireframes/FE_user_web/3.png";


export default function InterfacePage() {
    const FE_store_tablet_images = [
        storeTablet1,
        storeTablet2,
        storeTablet3,
        storeTablet4
    ];

    const FE_store_util_images = [
        storeUtil1,
        storeUtil2,
    ];

    const FE_user_web_images = [
        userWeb1,
        userWeb2,
        userWeb3
    ];

    const OPTIONS: EmblaOptionsType = { slidesToScroll: 'auto' }

    return (
        // display as a 2 x 3 grid
        <div className="flex flex-col items-center justify-center items center min-h-screen py-6">
            <p className="text-4xl text-center">
                Wireframes for UI's currently in development.
            </p>
            <div className="flex flex-col items-center justify-center items center min-h-screen py-6">
                <div className= "flex flex-col items-center gap-6">
                    <p className="text-2xl text-center">
                        Front-End for Stores (Tablet View)
                    </p>
                    <EmblaCarousel slides={FE_store_tablet_images} options={OPTIONS} />
                </div>
                <div className= "flex flex-col items-center gap-6">
                    <p className="text-2xl text-center">
                        Front-End for Stores (Utility Interfaces)
                    </p>
                    <EmblaCarousel slides={FE_store_util_images} options={OPTIONS} />
                </div>
                <div className= "flex flex-col items-center gap-6">
                    <p className="text-2xl text-center">
                        Front-End for Users (Web View)
                    </p>
                    <EmblaCarousel slides={FE_user_web_images} options={OPTIONS} />
                </div>
            </div>
        </div>
    );
}