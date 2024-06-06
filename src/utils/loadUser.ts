import User from "../types/User";

async function loadUser(username: string, password: string): Promise<User | null>{
    console.log('loadUser()', username)
    try {
        const response = await fetch('http://localhost:8080/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        
        

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const user: User = await response.json();
        console.log('loadUser()', user)
        return user;
    } catch (error) {
        console.error('Failed to fetch user', error);
        return null;
    }
}

export default loadUser;
