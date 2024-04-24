import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";



export function middleware(request: NextRequest) {
    
    
    if (request.nextUrl.pathname === "/"){
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    /*if (request.nextUrl.pathname === "/account") {
        const authToken = request.cookies.get("vc") //проверка наличия токена
        if (authToken){ //если он есть
            return NextResponse.redirect(new URL("/account", request.url));
        }
    }*/
    if (request.nextUrl.pathname === "/auth") {

    }
    //Пробуем получить значение session токена
    //если токена нет - то переход на dashboard 

    /*return NextResponse.redirect(new URL("/", request.url))*/
}

/*export const config = {
    matcher: "/profile",
};*/

