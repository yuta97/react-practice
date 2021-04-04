import { Stack } from "@chakra-ui/layout";
import { ChangeEvent, memo, useEffect, useState, VFC } from "react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/modal";
import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  user: User | null | undefined;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose, isAdmin = false, user } = props;
  
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setUsername(user?.username ?? '')
    setName(user?.name ?? '')
    setEmail(user?.name ?? '')
    setPhone(user?.phone ?? '')
  });

  const onchangeUserName = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
  const onchangeName = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
  const onchangeEmail = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
  const onchangePhone = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
  
  const onclickUpdate = () => alert();

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>ユーザーの詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input value={username} isReadonly={!isAdmin} onChange={onchangeUserName}/>
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input value={name} isReadonly={!isAdmin} onChange={onchangeUserName}/>
            </FormControl>
            <FormControl>
              <FormLabel>MAIL</FormLabel>
              <Input value={email} isReadonly={!isAdmin} onChange={onchangeEmail} />
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input value={phone} isReadonly={!isAdmin} onChange={onchangePhone} />
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin  && (
          <ModalFooter>
          <PrimaryButton onClick={onclickUpdate}>更新</PrimaryButton>
        </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  )
});