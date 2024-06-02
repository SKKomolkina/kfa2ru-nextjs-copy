import {Rtx30X} from "@/sections/Rtx30X/Rtx30X";
import {ProductNavigation} from "@/shared/ui/ProductNavigation/ProductNavigation";

const Page = () => {
    return (
        <>
            <ProductNavigation pageLink={'/graphics-cards/x/rtx30'}/>
            <Rtx30X/>
        </>
    )
}

export default Page
