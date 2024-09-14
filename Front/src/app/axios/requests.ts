"use server"
import axios from 'axios';

export const axiosIntantce = axios.create({
    baseURL: process.env.BACKEND_URL,
    validateStatus: (status) => {
        return status < 500;
    }
});


export const getDepartaments = async (): Promise<string[] | {
    error: boolean
}> => {
    const res = await axiosIntantce.get("/departament", { headers: { "Content-Type": "application/json" } })
    if (res.status == 200) {
        return res.data
    }
    else return { error: true }
}

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


export const getFuncionario = async (): Promise<funcsProps[] | void> => {
    const res = await axiosIntantce.get("/funcionario", { headers: { "Content-Type": "application/json" } })
    if (res.status == 200) {
        return res.data as funcsProps[]
    }
}


export type FornecedoresProps = {
    name: string
    cnpj: string
    municipio: string
};

export const getFornecedores = async (): Promise<FornecedoresProps[] | void> => {
    const res = await axiosIntantce.get("/fornecedor", { headers: { "Content-Type": "application/json" } })
    if (res.status == 200) {
        return res.data as FornecedoresProps[]
    }
}

export const getClientes = async (): Promise<FornecedoresProps[] | void> => {
    const res = await axiosIntantce.get("/cliente", { headers: { "Content-Type": "application/json" } })
    if (res.status == 200) {
        return res.data as FornecedoresProps[]
    }
}

export const registerDepartaments = async (name: string) => {
    const res = await axiosIntantce.post("/departament", {
        name: name
    }, {
        headers: { "Content-Type": "application/json" }
    })

    if (res.status == 200) {
        return "OK"
    }

    else return "ERROR"
}

export const getFunctions = async (): Promise<string[] | {
    error: boolean
}> => {
    const res = await axiosIntantce.get("/function", { headers: { "Content-Type": "application/json" } })
    if (res.status == 200) {
        return res.data
    }
    else return { error: true }
}

export const registerFunction = async (name: string) => {
    const res = await axiosIntantce.post("/function", {
        name: name
    }, {
        headers: { "Content-Type": "application/json" }
    })

    if (res.status == 200) {
        return "OK"
    }

    else return "ERROR"
}

type registerFuncProps = {
    name: string
    cpf: string
    dataNasc: string
    dpt: string
    entrada: string
    saida: string
    funcao: string
    matricula: string
}

export const registerFunc = async ({ cpf, dataNasc, dpt, entrada, funcao, matricula, name, saida }: registerFuncProps) => {
    const res = await axiosIntantce.post("/funcionario", {
        cpf: cpf,
        dataNasc: dataNasc,
        dpt: dpt,
        entrada: entrada,
        funcao: funcao,
        matricula: matricula,
        name: name,
        saida: saida,
    }, {
        headers: { "Content-Type": "application/json" }
    })

    if (res.status == 200) {
        return "OK"
    }

    else return "ERROR"
}

type registerFornecedorProps = {
    name: string,
    cnpj: string,
    municipio: string
}

export const registerFornecedor = async ({ name, cnpj, municipio }: registerFornecedorProps) => {
    const res = await axiosIntantce.post("/fornecedor", {
        name: name,
        cnpj: cnpj,
        municipio: municipio,
    }, {
        headers: { "Content-Type": "application/json" }
    })

    if (res.status == 200) {
        return "OK"
    }

    else return "ERROR"
}

export const registerCliente = async ({ name, cnpj, municipio }: registerFornecedorProps) => {
    const res = await axiosIntantce.post("/cliente", {
        name: name,
        cnpj: cnpj,
        municipio: municipio,
    }, {
        headers: { "Content-Type": "application/json" }
    })

    if (res.status == 200) {
        return "OK"
    }

    else return "ERROR"
}

