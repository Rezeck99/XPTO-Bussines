import express from "express";
import { MongoClient } from "mongodb";
const app = express();
const port = 3001;
const client = new MongoClient("mongodb://localhost:27017");
let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}
let db = conn.db("tcc");

app.use(express.json());

app.post("/cadastro", async (req, res) => {
  const name = req.body.name ?? "";
  const surname = req.body.surname ?? "";
  const tel = req.body.tel ?? "";

  const users = await db.collection("users").find({}).toArray();

  if (users.find((u) => u.name == name)) {
    res.status(400);
    res.send("Usuario já existe");
  } else {
    await db.collection("users").insertOne({
      name: name,
      surname: surname,
      tel: tel,
    });

    res.status(200);
    res.send("Usuário Criado");
  }
});

app
  .route("/departament")
  .get((req, res) => {
    db.collection("departament")
      .find({})
      .toArray()
      .then((departments) => {
        res.send(departments.map((d) => d.departamentName));
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  })
  .post(async (req, res) => {
    const name = req.body.name;
    try {
      await db.collection("departament").insertOne({
        departamentName: name,
      });
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  });

app
  .route("/function")
  .get((req, res) => {
    db.collection("functions")
      .find({})
      .toArray()
      .then((departments) => {
        res.send(departments.map((d) => d.departamentName));
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  })
  .post(async (req, res) => {
    const name = req.body.name;
    try {
      await db.collection("functions").insertOne({
        departamentName: name,
      });
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  });

app
  .route("/funcionario")
  .get((req, res) => {
    db.collection("funcionarios")
      .find({})
      .toArray()
      .then((funcionarios) => {
        res.send(
          funcionarios.map((f) => {
            delete f._id;
            return {
              ...f,
            };
          })
        );
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  })
  .post(async (req, res) => {
    const name = req.body.name;
    const cpf = req.body.cpf;
    const dataNasc = req.body.dataNasc;
    const dpt = req.body.dpt;
    const entrada = req.body.entrada;
    const saida = req.body.saida;
    const funcao = req.body.funcao;
    const matricula = req.body.matricula;

    try {
      await db.collection("funcionarios").insertOne({
        name: name,
        cpf: cpf,
        dataNasc: dataNasc,
        dpt: dpt,
        entrada: entrada,
        saida: saida,
        funcao: funcao,
        matricula: matricula,
      });
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  });

app
  .route("/fornecedor")
  .get((req, res) => {
    db.collection("fornecedor")
      .find({})
      .toArray()
      .then((departments) => {
        res.send(departments);
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  })
  .post(async (req, res) => {
    const name = req.body.name;
    const cnpj = req.body.cnpj;
    const municipio = req.body.municipio;

    try {
      await db.collection("fornecedor").insertOne({
        name: name,
        cnpj: cnpj,
        municipio: municipio,
      });
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  });

app
  .route("/cliente")
  .get((req, res) => {
    db.collection("cliente")
      .find({})
      .toArray()
      .then((departments) => {
        res.send(departments);
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  })
  .post(async (req, res) => {
    const name = req.body.name;
    const cnpj = req.body.cnpj;
    const municipio = req.body.municipio;

    try {
      await db.collection("cliente").insertOne({
        name: name,
        cnpj: cnpj,
        municipio: municipio,
      });
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  });

app.get("/listar", async (req, res) => {
  const users = await db.collection("users").find({}).toArray();

  console.log("Isso que eu quero", users);
  res.status(200);

  res.send(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
