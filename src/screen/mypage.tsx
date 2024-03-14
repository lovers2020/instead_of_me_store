import {
    Button,
    Center,
    FormControl,
    FormLabel,
    HStack,
    Input,
    Text,
    VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ILoginForm } from "../global/types";
import { Link } from "react-router-dom";

export default function MyPage() {
    const { register, handleSubmit } = useForm<ILoginForm>();
    function onSubmit() {}
    // backend로 ID PW 넘겨주어 로그인 구현
    return (
        <>
            <Center mt={28} flexDir={"column"} pb={20}>
                <VStack w={"30%"} as="form" onSubmit={handleSubmit(onSubmit)}>
                    <Text fontSize={"14px"}>LOGIN</Text>

                    <FormControl>
                        <FormLabel fontSize={"12px"} fontWeight={600}>
                            아이디를 입력하세요.
                        </FormLabel>
                        <Input
                            {...register("id", { required: true })}
                            type="text"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel fontSize={"12px"} fontWeight={600}>
                            비밀번호를 입력하세요.
                        </FormLabel>
                        <Input
                            {...register("pw", { required: true })}
                            type="password"
                        />
                    </FormControl>
                    <Button w={"100%"} type="submit" fontSize={"12px"}>
                        LOGIN
                    </Button>
                    <HStack
                        w={"100%"}
                        py={10}
                        fontSize={"12px"}
                        justify={"flex-start"}
                        alignItems={"flex-start"}
                        overflow={"hidden"}
                        borderBottom={"1px solid rgba(0,0,0,.2)"}
                    >
                        <Link to="findid" style={{ cursor: "pointer" }}>
                            <Text
                                _hover={{
                                    fontWeight: "700",
                                }}
                            >
                                아이디를 잊어버리셨나요?
                            </Text>
                        </Link>
                        <Link to="findpw" style={{ cursor: "pointer" }}>
                            <Text
                                _hover={{
                                    fontWeight: "700",
                                }}
                            >
                                비밀번호가 생각나지 않으세요?
                            </Text>
                        </Link>
                    </HStack>
                </VStack>
                <VStack py={10} justify={"flex-start"} w={"30%"}>
                    <FormControl>
                        <FormLabel
                            fontSize={"12px"}
                            fontWeight={600}
                            marginBottom={10}
                        >
                            회원가입을 하면 특별한 혜택을 받아볼 수 있습니다.
                        </FormLabel>
                        <Link to="/join">
                            <Button type="submit" fontSize={"12px"} w={"100%"}>
                                CREATE AN ACCOUNT
                            </Button>
                        </Link>
                    </FormControl>
                </VStack>
            </Center>
        </>
    );
}
