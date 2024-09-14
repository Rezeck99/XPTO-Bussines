import Link from "next/link";
import LinkButton from "./components/LinkButton";

export default function Home() {
  return (
    <div>
      <h1 className="text-xl font-bold">Bem-vindo à XPTO!</h1>
      <LinkButton href="/cadastro" text="Ir para Página de Cadastro" />
      <LinkButton href="/funcionarios" text="Funcionários" />
      <LinkButton href="/fornecedores" text="Fornecedores" />
      <LinkButton href="/clientes" text="Clientes" />
    </div>
  );
}
