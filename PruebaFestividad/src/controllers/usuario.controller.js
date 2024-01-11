import { PostofUsuario } from '../services/usuario.service.js';


export const createUser = async (req, res) => {
    try {
        const data = req.body;
        PostofUsuario(data);
        return res.status(201).json({
            message: 'Usuario creado exitosamente'
        });
    } catch (error) {
        console.error('Error al crear usuario:', error);

        return res.status(500).json({
            message: 'Ocurrió un error al crear usuario',
            error: error.message,
        });
    }
};
