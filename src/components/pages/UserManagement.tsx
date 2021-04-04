/* eslint-disable react-hooks/exhaustive-deps */
import { useDisclosure } from "@chakra-ui/hooks";
import { Center, Wrap, WrapItem } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { memo, useCallback, useEffect, VFC } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UseLoginUser } from "../../hooks/useLoginUser";
import { useSelectUser } from "../../hooks/useSelectUSer";
import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const UserManagement: VFC = memo(() => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { getUsers, users, loading} = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  const { loginUser } = UseLoginUser();

  const onClickUser = useCallback((id: number) => {
    onSelectUser({id, users, onOpen})
  },[users, onSelectUser, onOpen])

  useEffect(() => getUsers(), [])

  return (
    <>
    {loading ? (
      <Center h="100vh">
        <Spinner />
      </Center>) : (
      <Wrap p={{ base: 4, md: 10}}>
        {users.map((user) => (
          <WrapItem key={user.id} mx="auto" >
           <UserCard id={user.id} imageUrl="https://source.unsplash.com/random" userName={user.username} fullName={user.name} onClick={onClickUser}/>
          </WrapItem>
        ))}
      </Wrap>  
    )}
    <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} isAdmin={loginUser?.isAdmin}/>
    </>
  )
});