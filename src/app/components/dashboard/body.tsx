
import Image from "next/image";
import Link from 'next/link';
import './../generic/style.css'

import * as React from "react"
import DashboardRoomCard from "./roomcard";
 



export default function DashboardBody(){
    const isAuthenticated = true;
    return (
        <div className="">
            <div className="card-container">
                <div className="card">
                    <DashboardRoomCard title="титульный" description="sdf" currentName="fsdf"/>
                </div>
                <div className="card">
                    <DashboardRoomCard title="титульный" description="sdf" currentName="fsdf"/>
                </div>
                <div className="card">
                    <DashboardRoomCard title="титульный" description="sdf" currentName="fsdf"/>
                </div>
                <div className="card">
                    <DashboardRoomCard title="титульный" description="sdf" currentName="fsdf"/>
                </div>
            </div>
        </div>
    );
};
