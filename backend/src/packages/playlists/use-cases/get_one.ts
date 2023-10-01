// import {users} from '../domain/users';
import { Playlists } from "../domain/Playlists";

export const get_one=async(id:any)=>{
    const person=await Playlists.query().where('id','=',id);
    return person;
}
// export const get_one2=async(email:any)=>{
    // const person=await users.query().first().where('email','=',email);
    // return person;
// }
