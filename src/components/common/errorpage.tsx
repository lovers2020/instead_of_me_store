import { Center, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
    const navigate = useNavigate();

    return (
        <>
            <Center
                w="100%"
                h="100vh"
                background="linear-gradient(180deg, #7b9fec, #c9c7c7)"
                color="black"
            >
                <VStack>
                    <Heading fontSize={["48px", "60px"]} mt="-200px">
                        404 ERROR
                    </Heading>
                    <Heading fontSize={["24px", "48px"]}>
                        잘못된 페이지 요청입니다 😭
                    </Heading>
                    <Heading
                        mt="100px"
                        _hover={{
                            cursor: "pointer",
                            color: "whitesmoke",
                            transition: "all 0.2s ease-in-out",
                        }}
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        Go to Home
                    </Heading>
                </VStack>
            </Center>
        </>
    );
}
