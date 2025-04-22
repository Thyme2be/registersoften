import Logo from "@/components/Logo";
import Register from "@/components/Register";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className=" w-full flex h-screen ">
        <section className=" flex-1/2 px-24 py-14 ">
          <Logo />
          <Register />
          <Button className=" w-full p-6 rounded-2xl font-k2d font-bold text-2xl cursor-pointer mb-4 ">
            สมัครสมาชิก
          </Button>
          <Checkbox id="terms" className=" border-black mr-5 " />
          <label
            htmlFor="terms"
            className="text-xl font-k2d leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            ยอมรับ{" "}
            <u>
              <Link href="#">ข้อตกลงการใช้งาน</Link>
            </u>
          </label>
        </section>
        <section className=" bg-[url(../../public/Superstar.jpg)] bg-cover flex flex-1/2 ">
        </section>
      </main>
    </>
  );
}
