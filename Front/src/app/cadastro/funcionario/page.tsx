import { getDepartaments, getFunctions } from "@/app/axios/requests";
import Func from "./components/func";
import { gerarMatriculaAleatoria } from "@/app/functions/generateMatricula";

async function Page() {
  const dpt = await getDepartaments();
  const funcs = await getFunctions();
  const matricula = gerarMatriculaAleatoria(10);

  return <Func dpt={dpt} matricula={matricula} funcs={funcs} />;
}

export default Page;
