import Action from "../types/Action";
import User from "../types/User";

const userLoginReducer = (user: User | null, action: Action): User | null => {
    switch(action.type) {
        case 'LOGIN_SUCCESS': {
            if(action.userDto) {
                return {
                    id: action.userDto.id,
                    name: action.userDto.name,
                    password: action.userDto.password,
                    consultas: action.userDto.consultas
                }
            }
        }

        case 'LOGOUT': {
            return null;
        }

        case 'REMOVER_CONSULTA': {
            const updatedConsultas = action.userDto?.consultas?.filter(consulta => consulta.id != action.userDto?.id)

            return {...user, consultas: updatedConsultas};
        }

        default:
            return null;
    }

}

export default userLoginReducer;