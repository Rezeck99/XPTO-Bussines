"use client";
import { registerFornecedor } from "@/app/axios/requests";
import ButtonForm from "@/app/components/ButtonForm";
import InputForm from "@/app/components/InputForm";
import { formatarCNPJ } from "@/app/functions/formatCNPJ";
import Link from "next/link";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { TbArrowLeft } from "react-icons/tb";

type Inputs = {
  Nome: string;
  cnpj: string;
  municipio: string;
};

function Page() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();

  const onRegister = async (data: Inputs) => {
    const res = await registerFornecedor({
      name: data.Nome,
      cnpj: data.cnpj,
      municipio: data.municipio,
    });

    if (res == "OK") {
      setValue("Nome", "");
      setValue("cnpj", "");
      setValue("municipio", "");
      alert("Fornecedor cadastrado com sucesso!");
    } else {
      alert("Erro ao cadastrar Funcionário!");
    }
  };

  useEffect(() => {
    const cnpj = getValues("cnpj");
    if (cnpj) {
      setValue("cnpj", formatarCNPJ(cnpj));
    }
  }, [watch("cnpj")]);

  return (
    <form
      onSubmit={handleSubmit(onRegister)}
      className="w-96 flex flex-col gap-4 bg-slate-700 p-10 text-white rounded-xl relative"
    >
      <Link href="/cadastro" className="absolute top-4 left-4">
        <TbArrowLeft className="font-bold text-xl" />
      </Link>
      <h1 className="text-2xl font-bold text-center">Fornecedor</h1>
      <InputForm title="Nome" type="text" register={register("Nome")} />
      <InputForm title="CNPJ" type="text" register={register("cnpj")} />
      <section className="flex flex-col">
        <label htmlFor="ufs">Município/UF:</label>
        <select
          id="ufs"
          className="border border-slate-500 rounded-md p-1 pl-4 text-sm text-black"
          {...register("municipio")}
        >
          <option value="São Paulo/SP">São Paulo/SP</option>
          <option value="Campinas/SP">Campinas/SP</option>
          <option value="São Bernardo do Campo/SP">
            São Bernardo do Campo/SP
          </option>
          <option value="Santos/SP">Santos/SP</option>
          <option value="Sorocaba/SP">Sorocaba/SP</option>
          <option value="Ribeirão Preto/SP">Ribeirão Preto/SP</option>
          <option value="Guarulhos/SP">Guarulhos/SP</option>
          <option value="Osasco/SP">Osasco/SP</option>
          <option value="São José dos Campos/SP">São José dos Campos/SP</option>
          <option value="Barueri/SP">Barueri/SP</option>
          <option value="Piracicaba/SP">Piracicaba/SP</option>
        </select>
      </section>

      <ButtonForm />
    </form>
  );
}

export default Page;
