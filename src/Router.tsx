import { Route } from "react-router"
import { Routes } from "react-router-dom"
import { Home } from "./pages/Pet/Home"
import { Login } from "./pages/Auth/Login"
import { Pet } from "./pages/Pet/Pet"
import { ChangePassword } from "./pages/Auth/ChangePassword"
import { Register } from "./pages/Auth/Register"
import { RegisterPet } from "./pages/Pet/RegisterPet"
import { UserAdoptions } from "./pages/user/dashboard/UserAdoptions"
import { UserInfo } from "./pages/user/dashboard/UserInfo"
import { UserPets } from "./pages/user/dashboard/UserPets"
import { UserLayout } from "./pages/user/UserLayout"
import { EditPet } from "./pages/Pet/EditPet"

export const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/register" element={<Register />}  />
            <Route path="/login" element={<Login />}  />
            <Route path="/user" element={<UserLayout />}>
                <Route path="" element={<UserInfo/>} />
                <Route path="pets" element={<UserPets/>} />
                <Route path="adoptions" element={<UserAdoptions/>} />
            </Route>
            <Route path="/change-password" element={<ChangePassword />}>
            </Route>
            <Route path="/pet">
                <Route path=":id" element={<Pet />} />
                <Route path="register" element={<RegisterPet />} />
                <Route path="edit/:id" element={<EditPet />} />
            </Route>
        </Routes>
    )
}