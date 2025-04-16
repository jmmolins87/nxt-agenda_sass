

// "use server";

// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";

// import { signinMock } from "@/app/services/signin";


// export const signinAction = async (email: string, pass: string) => {

//     const logged = await signinMock(email, pass);
//     if(!logged) {
//         return false;
//     }

//     // Set Cookies
//     const cookiesHadler = await cookies();
//     cookiesHadler.set("isLogged", "ok");
//     const username = {
//         name: "Juan María Molins",
//         email: "demo@demo.com",
//         avatar: "/avatar/01.png"
//     }
//     cookiesHadler.set("username", JSON.stringify(username));

//     redirect("/dashboard");
// }

// export const signoutAction = async () => {

//     // Delete cookies
//     const cookiesHandler = await cookies();
//     cookiesHandler.delete("isLogged");
//     cookiesHandler.delete("username");

//     redirect("/");
// }