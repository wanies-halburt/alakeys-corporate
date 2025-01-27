import DashboardLayout from "@/components/dashboard/DashboardLayout";

export default function RootLayout({ children }) {
  return (
    <main>
      <DashboardLayout>{children}</DashboardLayout>
    </main>
  );
}
