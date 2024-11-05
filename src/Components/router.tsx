import LoginPage from "Pages/loginpage";
import MainPage from "Pages/mainpage";
import SignUpPage from "Pages/signuppage";
import Test from "Pages/test";
import {Routes,Route,Navigate} from "react-router-dom";

const Router = () => {
    return (
        <Routes>
            <Route path="/test" element={<Test/>}/>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="*" element={<Navigate replace to = "/"/>}/>
        </Routes>
    );
}

export default Router;