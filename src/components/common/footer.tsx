import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterText = styled.p`
    cursor: pointer;
`;

export default function Footer() {
    return (
        <>
            <Box
                color={"black"}
                px={20}
                py={10}
                fontSize={"13px"}
                opacity={"0.9"}
            >
                <HStack justify={"flex-end"} gap={40} alignItems={"flex-start"}>
                    <Box>
                        <a
                            href="https://www.instagram.com/_instead_of_me/"
                            target="blank"
                        >
                            <FooterText>INSTAGRAM</FooterText>
                        </a>
                    </Box>
                    <VStack alignItems={"flex-start"} gap={0}>
                        <Link to="about">
                            <FooterText>ABOUT</FooterText>
                        </Link>
                        <Link to="stores">
                            <FooterText>STORES</FooterText>
                        </Link>

                        <Link to="contact">
                            <FooterText>CONTACT</FooterText>
                        </Link>

                        <Link to="terms">
                            <FooterText>TERMS & CONDITIONS</FooterText>
                        </Link>

                        <Link to="guide">
                            <FooterText>GUIDE</FooterText>
                        </Link>
                    </VStack>
                    <VStack alignItems={"flex-start"} gap={0}>
                        <Text>COMPANY : INSTEAD OF ME</Text>
                        <Text>OWNER : YUHYEON KIM</Text>
                        <Text>REGISTRAION : 442-54-00852</Text>
                        <Text>EMAIL : insteadofme.service@gmail.com</Text>
                    </VStack>
                </HStack>
            </Box>
        </>
    );
}
