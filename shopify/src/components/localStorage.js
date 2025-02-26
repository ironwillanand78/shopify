
export const saveUser = (email, password) => {
    const user = { email, password };
    localStorage.setItem("user", JSON.stringify(user));
  };
  
  
  export const getUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  };
  
  
  export const validateUser = (email, password) => {
    const storedUser = getUser();
    if (!storedUser) {
      return { success: false, message: "No user found. Please sign up." };
    }
    if (storedUser.email === email && storedUser.password === password) {
      return { success: true, message: "Login successful" };
    }
    return { success: false, message: "Invalid email or password" };
  };
  