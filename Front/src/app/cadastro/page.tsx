import Link from "next/link";
import {
  TbArrowLeft,
  TbBox,
  TbHome,
  TbPencil,
  TbUser,
  TbUsers,
} from "react-icons/tb";
import LinkButton from "../components/LinkButton";
import { getDepartaments } from "../axios/requests";
async function Page() {
  return (
    <>
      <section className="flex flex-row items-center">
        <Link href="/">
          <TbArrowLeft className="font-bold text-xl cursor-pointer  " />
        </Link>
        <h1 className="text-xl font-bold ml-4">Oque deseja cadastrar?</h1>
      </section>
      <LinkButton
        href="/cadastro/departamento"
        text="Departamento"
        Icon={TbHome}
      />
      <LinkButton href="/cadastro/funcao" text="Função" Icon={TbPencil} />
      <LinkButton
        href="/cadastro/funcionario"
        text="Funcionário"
        Icon={TbUser}
      />
      <LinkButton href="/cadastro/fornecedor" text="Fornecedor" Icon={TbBox} />
      <LinkButton href="/cadastro/cliente" text="Cliente" Icon={TbUsers} />
    </>
  );
}

export default Page;
