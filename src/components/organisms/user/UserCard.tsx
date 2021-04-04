import { Image } from "@chakra-ui/image";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { memo, VFC } from "react";

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
};

export const UserCard: VFC<Props> = memo((props) => {
  const { id, imageUrl, userName, fullName, onClick } = props;
  return (
    <Box w="260px" h="260px" bg="white" borderRadius="10px" shadow="md"p={4} _hover={{ cursor: "pointer", opacity: 0.8}} onClick={() => onClick(id)} autoFcous={false} motionPreset="slideInBottom" >
      <Stack textAlign="center">
        <Image borderRadius="full" boxSize="160px" src={imageUrl} alt="プルフィール画像" m="auto" />
          <Text fontSize="lg" fontWeight="bold">{userName}</Text>
          <Text fontSize="sm" fontWeight="gray">{fullName}</Text>
      </Stack>
    </Box>
  )
});