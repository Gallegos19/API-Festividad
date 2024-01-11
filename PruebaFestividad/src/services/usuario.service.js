import { validarUsuario } from "../validations/usuario.validation.js";
import { PostUsuario } from "../repositories/usuario.repositories.js";
import bcrypt from 'bcrypt';
const saltosBcrypt= process.env.SALTOS;

export const PostofUsuario = async (Usuario) => {

    const {correo,contrasena} = Usuario;
    console.log(Usuario);
    try {
      const festivalidator = validarUsuario(Usuario);

      if(festivalidator.success) {

        const password = bcrypt.hashSync(contrasena, parseInt(saltosBcrypt));
        console.log('Contraseña cifrada:', password);

        const result = await PostUsuario(correo,password);
        return result[0];
      }else{
       
        throw new Error (festivalidator.error.message)
      }
       
     
    } catch (err) {
      throw new Error(err.message);
    }
  };