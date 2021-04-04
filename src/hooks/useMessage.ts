import { useToast } from "@chakra-ui/toast";
import { useCallback } from "react"

type Props = {
  title: string;
  status: "info" | "warning" | "error" | "success"  ;
}
export const UseMassage = () => {
  const toast = useToast();

  const showMessage = useCallback((props: Props) => {
    const { title, status} = props;

    toast({
      title,
      status,
      position: "top",
      duration: 2000,
      isClosable: true,
    })
  }, [toast]);
  return { showMessage }
}