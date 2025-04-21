import React from "react";
import { Button } from "@/components/ui/button";

const Register = () => {
  return (
    <div className=" mt-20 mb-6 ">
      <h1 className=" text-4xl font-k2d font-bold ">สมัครสมาชิก</h1>
      <div className="flex flex-col w-full gap-5 mt-5 ">
        <div className="flex gap-5">
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="ชื่อจริง *"
            className="border-1 px-3 py-2 flex-1"
          />
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="นามสกุล *"
            className="border-1 px-3 py-2 flex-1"
          />
        </div>

        <input
          type="text"
          id="email"
          name="email"
          placeholder="อีเมล *"
          className="border-1 px-3 py-2 "
        />
        <input
          type="text"
          id="studentId"
          name="studentId"
          placeholder="รหัสประจำตัวนักศึกษา *"
          className="border-1 px-3 py-2 "
        />

        <div className="flex gap-5">
          <input
            type="text"
            id="dateOfBirth"
            name="dateOfBirth"
            placeholder="วว/ดด/ปปปป เกิด *"
            className="border-1 px-3 py-2 flex-1"
          />
          <div className=" px-3 flex-1 mt-1 text-center ">
            <Button variant="outline" className=" bg-gray-200 px-14 rounded-3xl font-bold font-k2d cursor-pointer ">รีเซ็ต</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
