import { Image, Center } from "@chakra-ui/react";

import MainBanner from "../images/mainBanner.jpg";

export default function Home() {
    return (
        <>
            <Center mt={28}>
                <Image src={MainBanner} />
            </Center>
        </>
    );
}
