import { useForm } from "react-hook-form";
import styles from "./pgCadastro.module.css";

function PaginaCadastro() {
 const {
  register,
  handleSubmit,
  formState: { errors }
 } = useForm();

 return (
  <>
   <div className={styles.container}>
    <h2>Cadastro de nova trilha</h2>
    <form>
     <div>
      <label htmlFor="name">Nome da trilha</label>
      <input type="text" name="name" />
     </div>
     <div>
      <label htmlFor="duration">Duração estimada</label>
      <input type="number" name="duration" />
     </div>
     <div>
      <label htmlFor="traject">trajeto (km)</label>
      <input type="number" name="traject" />
     </div>
     <div>
      <label htmlFor="city">Cidade</label>
      <input type="text" name="city" />
     </div>
     <div>
      <label htmlFor="stateUf">Estado</label>
      <input type="text" name="stateUf" />
     </div>
     <div>
      <label htmlFor="userName">Nome completo do Usuário</label>
      <input type="text" name="userName" />
     </div>
     <div>
      <label htmlFor="difficulty">Dificuldade do trajeto</label>
      <select name="difficulty">
       <option value="Iniciante">Iniciante</option>
       <option value="Intermediário">Intermediário</option>
       <option value="difícil">difícil</option>
      </select>
     </div>

     <div>
      <label htmlFor="typeTrail">Tipo da </label>
      <select name="typeTrail">
       <option value="Caminhada">Caminhada</option>
       <option value="Trekking">Trekking</option>
      </select>
     </div>
     <div>
      <label htmlFor="nomusername">URL imagem da trilha</label>
      <input type="text" name="imagetrail" />
     </div>
    </form>
   </div>

   {/* 
        <h1>Página Cadastro Trilhas</h1>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <label htmlFor="nome">Nome da Trilha</label>
          <input type="text" name="nome" id="nome" />
          <label htmlFor="durac">duração da trilha</label>
          <input type="number" name="nome" id="durac" placeholder='Insira o valor em km' />
          <label htmlFor="durac">duração da trilha</label>
          <input type="number" name="nome" id="durac" placeholder='Insira o valor em km' />
          <input type="submit" value="Cadastrar" className={styles.btnSubmit} />
        </form>
      </div> */}
  </>
 );
}

export default PaginaCadastro;
