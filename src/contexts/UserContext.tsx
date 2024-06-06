import React, { ReactNode, useReducer } from "react";
import { globalUserState } from "../states/userGlobalState";
import User from "../types/User";
import userLoginReducer from "../reducers/userReducer";
import loadUser from "../utils/loadUser";


export type GlobalStateManager = {
    user: User | null,
    handleLogin: (username: string, password: string) => void,
    handleLogout: () => void,
    handleCancelarConsulta: any
}

export const UserContext = React.createContext<GlobalStateManager | null>(null);

const GlobalUserContext : React.FC<{ children: ReactNode }>  = ({children}) => {
    const [user, dispatch] = useReducer(userLoginReducer, globalUserState);

    const handleLogin = async (username: string, password: string): Promise<void> => {
        console.log('handleLogin()', username);
        try {
            const user = await loadUser(username, password);

            if (user) {
                dispatch({ type: 'LOGIN_SUCCESS', userDto: {
                    id: user.id,
                    name: user.name,
                    password: user.password,
                    consultas: user.consultas,
                } });
            } else {
                console.error('Credenciais inválidas!');
            }
        } catch (error) {
            console.error('Failed to login', error);
        }
    }

    const handleLogout = () : void => {
        dispatch({
            type: 'LOGOUT'
        });
    }

    const handleCancelarConsulta = (id : number) : void => {
        const updatedConsultas = user?.consultas?.filter(consulta => consulta.id != id);

        const newUser : User = {
            id: user?.id,
            name: user?.name,
            password: user?.password,
            consultas: updatedConsultas
        }
        dispatch({
            type: 'REMOVER_CONSULTA',
            userDto: newUser
        })
    }

    return (
        <UserContext.Provider value={{user, handleLogin, handleLogout, handleCancelarConsulta}}>
            {children}
        </UserContext.Provider>
    )
}

export default GlobalUserContext;