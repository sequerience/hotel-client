"use client"
import "./style.css"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { loginUser, registerUser } from "../utils/authentication"


//#region FORM SCHEMA
const formLoginSchema = z.object({
  username: z.string().min(2, {
    message: "Введите логин",
  }),
  password: z.string().min(2, {
    message: "Введите пароль",
  })
})

const formRegisterSchema = z.object({
  username: z.string().min(2, {
    message: "Введите логин",
  }),
  last_name: z.string().min(2, {
    message: "Введите фамилию",
  }),
  first_name: z.string().min(2, {
    message: "Введите имя",
  }),
  middle_name: z.string().min(2, {
    message: "Введите отчество",
  }),
  date_of_birth: z.string().min(2, {
    message: "Введите дату рождения",
  }),
  email: z.string().min(2, {
    message: "Введите Email",
  }),
  phone_number: z.string().min(2, {
    message: "Введите номер телефона",
  }),
  password: z.string().min(2, {
    message: "Введите пароль",
  })
})
//#endregion
export default function Authorize() {  
    //#region RESOLVER FORM
    const loginForm = useForm<z.infer<typeof formLoginSchema>>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
        username: "",
        password: "",
    },
    })

    const registerForm = useForm<z.infer<typeof formRegisterSchema>>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
        username: "",
        last_name: "",
        first_name: "",
        middle_name: "",
        date_of_birth: "",
        email: "",
        phone_number: "",
        password: "",
    },
    })
    //#endregion

    async function getLoginStatus(username: string, password: string) {
        try {
            const response = await fetch('http://localhost:8000/users/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                    },
                body: JSON.stringify({
                    username,
                    password
                    }),
                });
                
            if (!response.ok){
                throw new Error("error");
            }    
            const data = await response.json();
            console.log(data)
            return data.user;
            
        } catch (error) {
            return null
        }
    }

    async function onLoginSubmit(values: z.infer<typeof formLoginSchema>) {
        const { username, password } = values;
        const loginStatus = await getLoginStatus(username, password);
        console.log(loginStatus);

        if (loginStatus) {
            console.log("Авторизация успешна")
            sessionStorage.setItem("username", loginStatus.username)
            sessionStorage.setItem("last_name", loginStatus.last_name)
            sessionStorage.setItem("first_name", loginStatus.first_name)
            sessionStorage.setItem("middle_name", loginStatus.middle_name)
            sessionStorage.setItem("date_of_birth", loginStatus.date_of_birth)
            sessionStorage.setItem("phone_number", loginStatus.phone_number)
            sessionStorage.setItem("email", loginStatus.email)
            window.location.href = "/account";
        }
        else {
            console.log("Неверный логин или пароль")
        }
    }
  
  async function onRegisterSubmit(values: z.infer<typeof formRegisterSchema>) 
  {
    const registerResult = await registerUser(values) //регистрируем пользователя и получаем ответ с сервера
    console.log("данные из функции onregsubmit", registerResult) //выводим данные
    const loginResult = await loginUser(values)
    /*const { username, last_name, first_name, middle_name, date_of_birth, email, phone_number, password } = values;
    const response = await fetch('http://localhost:8000/users/signup', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, last_name, first_name, middle_name, date_of_birth, email, phone_number, password,}),});
    console.log(response)

    if (response.ok){
        sessionStorage.setItem("username", username)
        sessionStorage.setItem("last_name", last_name)
        sessionStorage.setItem("first_name", first_name)
        sessionStorage.setItem("middle_name", middle_name)
        sessionStorage.setItem("date_of_birth", date_of_birth)
        sessionStorage.setItem("phone_number", phone_number)
        sessionStorage.setItem("email", email)
        window.location.href = "/account";
    }
    return response.json();*/
  }

  return (
    <div>
      <div className="form-container">
        <Tabs defaultValue="login">
          <TabsList className="select-blocks">
            <TabsTrigger value="login">Войти</TabsTrigger>
            <TabsTrigger value="register">Регистрация</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <div className="form-style" style={{ marginLeft: '25px', width: '350px' }}>
              <Form {...loginForm}>
                <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-8">
                  <FormField
                    control={loginForm.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Логин" {...field} type="text" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <br />
                </form>
                <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-8">
                  <FormField
                    control={loginForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Пароль" {...field} type="password" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="text-center">
                    <div className="decorative"></div>
                    <br />
                    <Button variant="outline" type="submit">Авторизоваться</Button>
                  </div>
                </form>
              </Form>
            </div>
          </TabsContent>
          <TabsContent value="register">
            <div className="form-style" style={{ marginLeft: '25px', width: '350px' }}>
              <Form {...registerForm}>
              <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className="space-y-8">
                  <FormField
                    control={registerForm.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Логин" {...field} type="text" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <br/>
                </form>
                <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className="space-y-8">
                  <FormField
                    control={registerForm.control}
                    name="last_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Фамилия" {...field} type="text" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <br/>
                </form>
                <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className="space-y-8">
                  <FormField
                    control={registerForm.control}
                    name="first_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Имя" {...field} type="text" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <br/>
                </form>
                <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className="space-y-8">
                  <FormField
                    control={registerForm.control}
                    name="middle_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Отчество" {...field} type="text" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <br/>
                </form>
                <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className="space-y-8">
                  <FormField
                    control={registerForm.control}
                    name="date_of_birth"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Дата рождения" {...field} type="date" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <br/>
                </form>
                <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className="space-y-8">
                  <FormField
                    control={registerForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Email" {...field} type="email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <br />
                </form>
                <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className="space-y-8">
                  <FormField
                    control={registerForm.control}
                    name="phone_number"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Номер телефона" {...field} type="tel" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <br/>
                </form>
                <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className="space-y-8">
                  <FormField
                    control={registerForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Пароль" {...field} type="password" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="text-center">
                    <div className="decorative"></div>
                    <br />
                    <Button variant="outline" type="submit">Зарегистрироваться</Button>
                  </div>
                </form>
              </Form>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
