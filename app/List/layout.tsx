import Navigation from "@/components/Navigation";
import Pagination from "@/components/Pagination";

export default function ListLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      
 
       <body>
   <Navigation/>
        {children}
        
        </body>
      
       
      
    );
  }
  