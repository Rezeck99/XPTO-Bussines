import { TbArrowLeft } from "react-icons/tb";
import { getFornecedores, getFuncionario } from "../axios/requests";
import Link from "next/link";

async function Page() {
  const forn = await getFornecedores();
  if (forn) {
    return (
      <>
        <section className="flex flex-row">
          <Link href={"/"} className="">
            <TbArrowLeft className="mb-4 cursor-pointer text-xl" />
          </Link>
          <p className="m-auto text-xl font-bold">Fornecedores</p>
        </section>
        <table className="bg-slate-700 text-white rounded-md">
          <thead>
            <tr>
              <th>Nome</th>
              <th>CNPJ</th>
              <th>Municipio</th>
            </tr>
          </thead>
          <tbody>
            {forn.map((f, index) => (
              <tr key={index}>
                <td className="px-4 text-center">{f.name}</td>
                <td className="px-4 text-center">{f.cnpj}</td>
                <td className="px-4 text-center">{f.municipio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Page;
