
import Header from "../components/generic/header";
import DashboardBody from "../components/dashboard/body";
import Footer from "../components/generic/footer";



export default function Dashboard(){
    let isAuthenticated = "";

    return (
        <div>
            <div>
                <Header userState={isAuthenticated}/>
            </div>
            <div>
                <DashboardBody/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>

    );
};
