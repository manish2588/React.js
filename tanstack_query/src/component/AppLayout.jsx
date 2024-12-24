import { Outlet, useNavigation } from "react-router-dom";
function AppLayout() {
  const loading = useNavigation();
  if (loading.state === "loading") return <h1> Loading</h1>;
  return (
    <>
      <h1>Header</h1>
      <Outlet />
      <h2>Footer</h2>
    </>
  );
}

export default AppLayout;
