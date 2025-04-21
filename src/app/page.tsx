import Logo from "@/components/Logo";
import Register from "@/components/Register";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <main className=" w-full flex h-screen ">
        <section className=" flex-1/2 px-24 py-14 ">
          <Logo />
          <Register />
          <Button className=" w-full p-6 rounded-2xl font-k2d font-bold text-2xl cursor-pointer ">
            สมัครสมาชิก
          </Button>
        </section>
        <section className=" bg-blue-800 flex flex-1/2 ">
          <h1>Hello</h1>
        </section>
      </main>
    </>
  );
}
