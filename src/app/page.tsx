import Logo from "@/components/Logo";
import Register from "@/components/Register";


export default function Home() {
  return (
    <>
      <main className=" w-full flex h-screen ">
        <section className=" flex-1/2 px-24 py-14 ">
          <Logo />
          <Register />
          
          
        </section>
        <section className=" bg-[url(../../public/Superstar.jpg)] bg-cover flex flex-1/2 ">
        </section>
      </main>
    </>
  );
}
