import bcrypt from "bcrypt"

export async function hash(password){ 
    let newPassword = await bcrypt.hash(password, 8); 
    return newPassword
}
