import CreateBusiness from "./create-business/page";
import { apiRequest } from "@/app/library/api/api";
import { redirect } from "next/navigation";

export default async function CreateBusinessLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    const res = await apiRequest('dashboard');
    res.status == (401 || 404) && redirect('/authenticate');

    return(
        <CreateBusiness />
    )
}