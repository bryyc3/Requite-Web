import Navbar from "./components/Navbar/Navbar";

export default function PublicLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return(
        <>
            <Navbar />
            {children}
        </>
    )
}