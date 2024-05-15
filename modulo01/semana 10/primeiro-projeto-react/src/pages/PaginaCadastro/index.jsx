import { useForm } from "react-hook-form";
import styles from "./pgCadastro.module.css";
// import "./styles.js";
import { useContext } from "react";
import { TrilhasContext } from "../../context/TrilhasContext.jsx";
import { Link } from "react-router-dom";

function PaginaCadastro() {
 const { register, handleSubmit } = useForm();
 const { addTrilha } = useContext(TrilhasContext);

 function sendForm(formValue) {
  console.log(formValue);

  addTrilha({
   ...formValue,
   duracao: Number(formValue.duracao),
   trajeto: Number(formValue.trajeto)
  });
 }

 return (
  <>
   <div className={styles.container}>
    <PageTitle>Cadastro de nova trilha</PageTitle>
    <form onSubmit={handleSubmit(sendForm)}>
     {/*
     {/* nome da trilha */}
     <div>
      <label htmlFor="nomeTrilha">Nome da trilha</label>
      <input
       type="text"
       {...register("nomeTrilha", {
        required: "Este campo é obrigatório",
        maxLength: {
         value: 100,
         message: "Este campo deve ter no máximo 100 caracteres"
        }
       })}
      />
     </div>
     {/* cidade */}
     <div>
      <label htmlFor="cidade">Cidade</label>
      <input
       type="text"
       {...register("cidade", {
        required: "Este campo é obrigatório",
        maxLength: {
         value: 60,
         message: "Este campo deve ter no máximo 60 caracteres"
        }
       })}
      />
     </div>
     {/* estado */}
     <div>
      <label htmlFor="estado">Estado (UF)</label>
      <input
       type="text"
       {...register("estado", {
        required: "Este campo é obrigatório",
        maxLength: {
         value: 2,
         message: "Este campo deve ter no máximo 2 caracteres"
        }
       })}
      />
     </div>
     {/* duração */}
     <div>
      <label htmlFor="duracao">duração estimada (em minutos)</label>
      <input
       type="number"
       {...register("duracao", {
        required: "Este campo é obrigatório"
       })}
      />
     </div>
     {/* trajeto */}
     <div>
      <label htmlFor="trajeto">trajeto (km)</label>
      <input
       type="number"
       {...register("trajeto", {
        required: "Este campo é obrigatório"
       })}
      />
     </div>

     {/* dificuldade */}
     <div>
      <label htmlFor="dificuldade">Dificuldade</label>
      <select
       {...register("dificuldade", {
        required: "Este campo é obrigatório"
       })}>
       <option value="Caminhada / trekking">Caminhada / trekking</option>
       <option value="Ciclismo">Ciclismo</option>
      </select>
     </div>
     {/* tipo trajeto */}
     <div>
      <label htmlFor="tipo">Tipo de trilha</label>
      <select
       {...register("tipo", {
        required: "Este campo é obrigatório"
       })}>
       <option value="Iniciante">Iniciante</option>
       <option value="Intermediário">Intermediário</option>
       <option value="difícil">difícil</option>
      </select>
     </div>

     {/* nome usuario */}
     <div>
      <label htmlFor="nomeUsuario">Nome do usuário</label>
      <input
       type="text"
       {...register("nomeUsuario", {
        required: "Este campo é obrigatório",
        maxLength: {
         value: 100,
         message: "Máximo de 100 caracteres"
        }
       })}
      />
     </div>
     {/* imagem */}
     <div>
      <label htmlFor="urlImagem">Imagem da trilha</label>
      <input
       type="text"
       {...register("urlImagem", {
        required: "Este campo é obrigatório"
       })}
      />
     </div>
    </form>

    <button>Cadastrar</button>
    <Link to="/">
     <button>Voltar</button>
    </Link>
   </div>
  </>
 );
}

export default PaginaCadastro;
