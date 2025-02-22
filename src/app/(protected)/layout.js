import DashboardLayout from "@/components/dashboard/DashboardLayout";

export const experimental_ppr = true;

export default function RootLayout({ children }) {
  return (
    <main>
      <DashboardLayout>{children}</DashboardLayout>
    </main>
  );
}
