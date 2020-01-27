export class ErrorMsg {
    public static ERROR_MSG_REGISTER = {
        'nickname' : [
          {type: 'required', message: 'Es necesario el ingresar un nombre de usuario'},
          {type: 'minlength', message: 'El nombre de usuario debe ser mayor a 3 caracteres'},
          {type: 'maxlength', message: 'El nombre de usuario debe ser menor a 20 caracteres'}
        ],
        'nombre' : [
          {type: 'required', message: 'El nombre es necesario'},
          {type: 'minlength', message: 'La longitud debe ser mayor a 3 caracteres'},
          {type: 'maxlength', message: 'La longitud debe ser menor a 50 caracteres'}
        ],
        'apellido' : [
          {type: 'required', message: 'El apellido es necesario'},
          {type: 'minlength', message: 'La longitud debe ser mayor a 3 caracteres'},
          {type: 'maxlength', message: 'La longitud debe ser menor a 50 caracteres'}
        ],
        'correo' : [
          {type: 'required', message: 'Es necesario ingresar un correo'},
          {type: 'pattern', message: 'El texto ingresado no representa un correo'}
        ],
        'fechanacimiento' : [
          {type: 'required', message: 'Debe seleccionar una fecha'}
        ],
        'password' : [
          {type: 'required', message: 'Debe ingresar una contraseña'},
          {type: 'minlength', message: 'La contraseña debe tener más de 5 caracteres'}
        ],
        'passwordVerif' : [
          {type: 'required', message: 'Valide su contraseña'}
        ],
        'same_password' : [
          {type: 'equalPasswords', message: 'Las contraseñas no son iguales'}
        ]
      }

    public static ERROR_MSG_SINT_PADS = {
        'nombreSint' : [
            {type: 'required', message: 'Es necesario ingresar el nombre del síntoma'},
            {type: 'minlength', message: 'El nombre del sintoma debe ser mayor a 4 caracteres'},
            {type: 'maxlength', message: 'La longitud debe ser menor a 50 caracteres'}
          ],
          'descripcion' : [
            {type: 'required', message: 'Es necesario ingresar una descripción'},
            {type: 'minlength', message: 'La descripción debe ser mayor a 20 caracteres'},
            {type: 'maxlength', message: 'La longitud debe ser menor a 200 caracteres'}
          ],
          'categoria' : [
            {type: 'required', message: 'Es necesario el seleccionar una categoría'}
          ],
          'especializacion' : [
            {type: 'required', message: 'Es necesario el seleccionar una especializacion para el padecimiento'}
          ],
          'nombrePad' : [
            {type: 'required', message: 'Es necesario ingresar el nombre del padecimiento'},
            {type: 'minlength', message: 'El nombre del padecimiento debe ser mayor a 4 caracteres'},
            {type: 'maxlength', message: 'La longitud debe ser menor a 50 caracteres'}
          ],
          'keyword' : [
            {type: 'required', message: 'Es necesario ingresar una palabra clave para el síntoma'},
            {type: 'minlength', message: 'La palabra clave debe ser mayor a 4 caracteres'},
            {type: 'maxlength', message: 'La longitud debe ser menor a 30 caracteres'}
          ]
    }
}