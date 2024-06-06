import User from "./User";

type Action = {
    type: string;
    userDto?: User; 
}

export default Action;