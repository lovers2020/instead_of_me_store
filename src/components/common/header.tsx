import { Box, Text, HStack } from "@chakra-ui/react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const HeaderText = styled.p`
    font-size: 13px;
    cursor: pointer;
`;

export default function Header() {
    const navigate = useNavigate();
    function onLogoClick() {
        navigate("/");
        window.scrollTo(0, 0);
    }
    return (
        <>
            <header>
                <HStack
                    px={10}
                    py={2}
                    color={"black"}
                    justify={"space-between"}
                    position={"fixed"}
                    top={0}
                    w={"100%"}
                >
                    <HStack mr={52} gap={8}>
                        <Link to="women">
                            <HeaderText>WOMEN</HeaderText>
                        </Link>
                        <Link to="men">
                            <HeaderText>MEN</HeaderText>
                        </Link>
                    </HStack>
                    <Box onClick={onLogoClick}>
                        <Text
                            fontSize={"48px"}
                            fontWeight={600}
                            cursor={"pointer"}
                        >
                            INSTEAD OF ME
                        </Text>
                    </Box>
                    <HStack gap={8}>
                        <Link to="mypage">
                            <HeaderText>MY</HeaderText>
                        </Link>
                        <Link to="bag">
                            <HStack gap={1}>
                                <HeaderText>BAG</HeaderText>
                                <HeaderText>0</HeaderText>{" "}
                                {/* backend에서 데이터 받아와서 장바구니 숫자 기입 */}
                            </HStack>
                        </Link>
                        <Link to="cspage">
                            <HeaderText>CUSTOMER SERVICE</HeaderText>
                        </Link>

                        <Link to="search">
                            <HeaderText>SEARCH</HeaderText>
                        </Link>
                    </HStack>
                </HStack>
            </header>
        </>
    );
}
