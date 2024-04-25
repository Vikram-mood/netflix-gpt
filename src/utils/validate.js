export const checkValidData = (email, password) => {

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isEmailValid) return "Email is invalid";
    if (!isPasswordValid) return "Password is invalid"

    return null;

}
export const checkValidDat = (name, email, password) => {
    const isNameValid = /^([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isNameValid) return "Name is invalid";
    if (!isEmailValid) return "Email is invalid";
    if (!isPasswordValid) return "Password is invalid"



    
    return null;
}