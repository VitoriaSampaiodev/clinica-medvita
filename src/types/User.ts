import Consulta from "./Consulta";

type User = {
    id?: number,
    name?: string,
    password?: string,
    consultas?: Consulta[]
}

export default User;