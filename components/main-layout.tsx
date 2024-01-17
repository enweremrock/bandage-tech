import { Footer } from "@/components/section";
import { toastSelector, useSelector } from "@/redux";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const toast = useSelector(toastSelector);

  return (
    <div>
      {children}

      <Footer />
    </div>
  );
};

export const getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
);
