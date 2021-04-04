import { useContext } from "react";

import { LoginUserContext,LoginUserContextType } from "../providers/LoginUserProvider";

export const UseLoginUser = ():LoginUserContextType => useContext(LoginUserContext);