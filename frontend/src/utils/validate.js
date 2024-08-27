export const checkValidData = (email, password) => {
    console.log('Checking email:', email);
    console.log('Checking password:', password);

    const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

    if (!isEmailValid) {
        console.log('Email validation failed');
        return "Email address is not valid";
    }
    if (!isPasswordValid) {
        console.log('Password validation failed');
        return "Password is not valid";
    }

    return null;
}
