import { Suspense } from "react";
import CardList from "./components/CardList";
import CategoryList from "./components/CategoryList";
import Featured from "./components/Featured";
import Menu from "./components/menu/Menu";
import Loading from "./components/Loading/Loading";
import DashboardSkeleton from "./components/Loading/DashboardSkeleton";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    // <Suspense fallback={<DashboardSkeleton />}>
    <Suspense fallback={<Loading />}>
      <div className="bg-white dark:bg-[#111b2b]">
        <Featured />
        <CategoryList />
        <div className="flex gap-12">
          <CardList page={page} />
          <Menu />
        </div>
      </div>
    </Suspense>
  );
}
