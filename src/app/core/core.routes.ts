import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { AdminComponent } from "./components/admin/admin.component";

export var routes = [
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'logout',
        component:LogoutComponent
    },
    {
        path:'admin',
        component:AdminComponent
    }
]