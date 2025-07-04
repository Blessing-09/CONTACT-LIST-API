export const initialStore=()=>{
  return{
    message: null,
    contacts: [],
    loading: true,  //iniciando en true en vez de false.
    //  error: null,
  }
}

// We need dispatch function to dispatch actions, so in this case we have 4 actions that needs to be dispatched
export default function storeReducer(store, action = {}) {
  switch(action.type){  

    // When the action type is 'getContact', the reducer will return a new state with the contacts updated from the action's payload.
    case 'getContact': //queremos traer los contactos añadido
      return {
        ...store, //para accedder a la tienda and keep other properties in the state unchanged
        contacts: action.payload // update the contacts with the payload

      }
    case 'addContact':
      return {
        ...store, //desestrructurrar (*extendiendo*) la tienda y dispatch es la acción que se dispara
        contacts: [...store.contacts, action.payload], //agregar un nuevo contacto y payLoad es la data que estamos enviando
        //primero (13) extiendiendo en la tienda(mensaje, contacts y loading), (14) y esta extiendo lo que esta dentro de store.contact
      }
    case 'editContact':
      return {
        ...store,
        contacts: store.contacts.map((contact) => contact.id === action.payload.id ? action.payload : contact) //payLoad es la data/la acción que estamos pasando
      //en editar necesitamos el id para saber cual es el contacto que queremos editar
      }

    case 'deleteContact': 
    return {
      ...store,
      contacts: store.contacts.filter((contact) => action.payload !== contact.id)
    }

    default:
      throw Error('Unknown action.');
  }    
}
