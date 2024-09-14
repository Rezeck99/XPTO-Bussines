"use client";
import ButtonForm from "@/app/components/ButtonForm";
import InputForm from "@/app/components/InputForm";
import Link from "next/link";
import { TbArrowLeft } from "react-icons/tb";
import { useForm } from "react-hook-form";
import DPTS from "./DPTS";
import Functions from "./Functions";
import { registerFunc } from "@/app/axios/requests";
import { useEffect } from "react";
import { formatarCPF } from "@/app/functions/formatCPF";

type Inputs = {
  Nome: string;
  CPF: string;
  datanascimento: string;
  Entrada: string;
  Saida: string;
  Funcao: string;
  departament: string;
};

function Func({
  dpt,
  funcs,
  matricula,
}: {
  dpt: string[] | { error: boolean };
  funcs: string[] | { error: boolean };
  matricula: string;
}) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();

  const onRegister = async (data: Inputs) => {
    if (data.departament == "default") {
      alert("Escolha um departamento");
    } else if (data.Funcao == "default") {
      alert("Escolha uma função");
    } else {
      const res = await registerFunc({
        cpf: data.CPF,
        dataNasc: data.datanascimento,
        dpt: data.departament,
        entrada: data.Entrada,
        funcao: data.Funcao,
        matricula: matricula,
        name: data.Nome,
        saida: data.Saida,
      });

      if (res == "OK") {
        setValue("CPF", "");
        setValue("datanascimento", "");
        setValue("departament", "");
        setValue("Entrada", "");
        setValue("Funcao", "");
        setValue("Nome", "");
        setValue("Saida", "");
        alert("Funcionário cadastrado com sucesso!");
      } else {
        alert("Erro ao cadastrar Funcionário!");
      }
    }
  };

  useEffect(() => {
    const CPF = getValues("CPF");
    if (CPF) {
      setValue("CPF", formatarCPF(CPF));
    }
  }, [watch("CPF")]);

  return (
    <form
      className="w-96 flex flex-col gap-4 bg-slate-700 p-10 text-white rounded-xl relative"
      onSubmit={handleSubmit(onRegister)}
    >
      <Link href="/cadastro" className="absolute top-4 left-4">
        <TbArrowLeft className="font-bold text-xl" />
      </Link>
      <h1 className="text-2xl font-bold text-center">Funcionário</h1>
      <InputForm title="Nome" type="text" register={register("Nome")} />
      <InputForm title="CPF" type="text" register={register("CPF")} />
      <InputForm
        title="Data nascimento"
        type="date"
        register={register("datanascimento")}
      />
      <DPTS register={register("departament")} dpt={dpt} />
      <p className="font-bold">Ponto de Horas:</p>
      <section className="flex flex-row gap-4">
        <InputForm
          title="Entrada"
          type="time"
          clasName="w-full"
          register={register("Entrada")}
        />
        <InputForm
          title="Saída"
          type="time"
          clasName="w-full"
          register={register("Saida")}
        />
      </section>
      <Functions register={register("Funcao")} dpt={funcs} />
      <p>
        Matricula: <span>{matricula}</span>
      </p>
      <ButtonForm />
    </form>
  );
}

export default Func;
