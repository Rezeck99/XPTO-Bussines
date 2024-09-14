import { HTMLInputTypeAttribute, useId } from "react";
import { UseFormRegister } from "react-hook-form";

type InputFormProps = {
  type: HTMLInputTypeAttribute;
  title: string;
  clasName?: string;
  register?: any;
};

function InputForm({ title, type, clasName, register }: InputFormProps) {
  const id = useId();
  return (
    <section className={`flex flex-col ${clasName ?? ""}`}>
      <label htmlFor={id} className="text-sm font-medium">
        {title}
      </label>
      <input
        id={id}
        type={type ?? "text"}
        className="border border-slate-500 rounded-md p-1 pl-4 text-sm text-black"
        {...register}
      />
    </section>
  );
}

export default InputForm;
