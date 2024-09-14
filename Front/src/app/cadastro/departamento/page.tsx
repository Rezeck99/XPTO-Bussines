"use client";

import ButtonForm from "@/app/components/ButtonForm";
import InputForm from "@/app/components/InputForm";
import Link from "next/link";
import { TbArrowLeft } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { registerDepartaments } from "@/app/axios/requests";

type Inputs = {
  name: string;
};

function Page() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  const RegisterDPT = async (data: { name: string }) => {
    const res = await registerDepartaments(data.name);
    if (res == "OK") {
      setValue("name", data.name);
      alert("Departamento cadastrado com sucesso!");
    } else {
      alert("Erro ao cadastrar departamento!");
    }
  };

  return (
    <form
      className="w-96 flex flex-col gap-8 bg-slate-700 p-10 text-white rounded-xl relative"
      onSubmit={handleSubmit(RegisterDPT)}
    >
      <Link href="/cadastro" className="absolute top-4 left-4">
        <TbArrowLeft className="font-bold text-xl" />
      </Link>
      <h1 className="text-2xl font-bold text-center">Departamento</h1>
      <InputForm
        title="Nome do departamento"
        type="text"
        register={register("name")}
      />
      <ButtonForm />
    </form>
  );
}

export default Page;
