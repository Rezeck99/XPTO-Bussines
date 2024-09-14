function DPTS({
  register,
  dpt,
}: {
  register: any;
  dpt: string[] | { error: boolean };
}) {
  return (
    <section className="flex flex-col">
      <label htmlFor="ufs">Departamento:</label>
      <select
        id="dpt"
        className="border border-slate-500 rounded-md p-1 pl-4 text-sm text-black"
        {...register}
      >
        <option value="default">Selecione um departamento</option>
        {!dpt.hasOwnProperty("error") &&
          (dpt as string[]).map((d) => {
            return (
              <option key={d} value={d}>
                {d}
              </option>
            );
          })}
      </select>
    </section>
  );
}

export default DPTS;
