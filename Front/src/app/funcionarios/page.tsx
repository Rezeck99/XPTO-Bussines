import { TbArrowLeft } from "react-icons/tb";
import { getFuncionario } from "../axios/requests";
import Link from "next/link";

export type funcsProps = {
  name: string;
  cpf: string;
  dataNasc: string;
  dpt: string;
  entrada: string;
  saida: string;
  funcao: string;
  matricula: string;
};

async function Page() {
  const funcs = await getFuncionario();
  if (funcs) {
    return (
      <>
        <section className="flex flex-row">
          <Link href={"/"} className="">
            <TbArrowLeft className="mb-4 cursor-pointer text-xl" />
          </Link>
          <p className="m-auto text-xl font-bold">Funcionários</p>
        </section>
        <table className="bg-slate-700 text-white rounded-md">
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>Departamento</th>
              <th>Função</th>
              <th>Mt.</th>
              <th className="px-4">Hora entrada</th>
              <th className="px-4">Hora saída</th>
            </tr>
          </thead>
          <tbody>
            {funcs.map((f, index) => (
              <tr key={index}>
                <td className="px-4 text-center">{f.name}</td>
                <td className="px-4 text-center">{f.cpf}</td>
                <td className="px-4 text-center">{f.dpt}</td>
                <td className="px-4 text-center">{f.funcao}</td>
                <td className="px-4 text-center">{f.matricula}</td>
                <td className="px-4 text-center">{f.entrada}</td>
                <td className="px-4 text-center">{f.saida}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Page;
