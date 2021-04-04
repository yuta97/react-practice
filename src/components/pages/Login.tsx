import { Input } from "@chakra-ui/input";
import { Box, Divider, Flex, Heading } from "@chakra-ui/layout";
import { ChangeEvent, memo, useState, VFC } from "react";
import { useAuth } from "../../hooks/useAuth";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Login: VFC = memo(() => {
  const { login, loading} = useAuth();
  const [userId, setUserId] = useState("");
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);
  const onClickLogin = () => login(userId);
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md" >
        <Heading as="h1">ユーザー管理アプリ</Heading>
        <Divider my={4} />
        <Input placeholder="ユーザーID" value={userId} onChange={onChangeUserId} />
        <PrimaryButton disabled={userId === ""} loading={loading} onClick={onClickLogin}>ログインボタン</PrimaryButton>
      </Box>
    </Flex>
  )
});