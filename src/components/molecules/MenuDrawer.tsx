import { Button } from "@chakra-ui/button";
import { Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/modal";
import { memo, VFC } from "react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
}
export const MenuDrawer: VFC<Props> = memo((props) => {
  const { onClose, isOpen, onClickHome, onClickUserManagement, onClickSetting } = props;
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen} >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%" onClick={onClickHome}>Top</Button>
            <Button w="100%" onClick={onClickUserManagement}>ユーザー一覧</Button>
            <Button w="100%" onClick={onClickSetting}>設定</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
});