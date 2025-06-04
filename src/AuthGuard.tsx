// // src/hooks/useAuth.js
// import { createContext, useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Simulate fetching user from backend or Firebase
//         const unsubscribe = () => {
//             setTimeout(() => {
//                 setUser({ role: "employer", id: "emp123" }); // Simulated employer
//                 setLoading(false);
//             }, 1000);
//         };

//         return unsubscribe();
//     }, []);

//     const login = async (email, password) => {
//         // Call your backend/Firebase
//         const response = await fetch("/api/login", {
//             method: "POST",
//             body: JSON.stringify({ email, password }),
//         });

//         const data = await response.json();
//         if (data.role === "employer") {
//             setUser(data);
//             navigate("/employer/dashboard");
//         } else {
//             alert("Access Denied");
//         }
//     };

//     const logout = () => {
//         setUser(null);
//         navigate("/signin");
//     };

//     return (
//         <AuthContext.Provider value={{ user, loading, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// }

// export function useAuth() {
//     return useContext(AuthContext);
// }