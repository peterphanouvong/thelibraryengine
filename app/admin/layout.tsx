import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./admin-sidebar";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full p-8">
        {/* <SidebarTrigger /> */}
        {props.children}
      </main>
    </SidebarProvider>
  );
}
