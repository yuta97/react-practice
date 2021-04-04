import axios from "axios";
import { useCallback, useState } from "react"
import { useHistory } from "react-router";

import { User } from "../types/api/user"
import { UseLoginUser } from "./useLoginUser";
import { UseMassage } from "./useMessage";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = UseMassage()
  const { setLoginUser } = UseLoginUser();

  const [ loading, setLaoding] = useState(false);

  const login = useCallback((id: string) => {
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      if (res.data) {
        const isAdmin = res.data.id === 10 ? true : false;
        setLoginUser({...res.data, isAdmin})
        showMessage({ title: "ログインしました", status: "success"})
        history.push("/home");
      } else {
        showMessage({ title: "ユーザーが見つかりません", status: "error"});
        setLaoding(false)
      }
    }).catch(() => {
      showMessage({ title: "ログインできません", status: "error"})
      setLaoding(false)
    })
  }, [history, showMessage]);
  return { login, loading }
}