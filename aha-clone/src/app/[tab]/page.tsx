// 'use client';

import { Suspense } from "react";
import HomePage from "../page";

// import { useParams } from "next/navigation";


const TabPage = () => {

//    const { tab } = useParams();
   
   
   return (
     <Suspense fallback={<div>Loading...</div>}>
       <HomePage />
     </Suspense>
   )

}

export default TabPage;