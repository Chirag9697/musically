// import {users} from '../domain/users';
// -import { Playlists } from "../domain/Playlists";
// import { Music } from "../domain/Music";
import { Likedsong } from "../domain/Likedsong";
export const get_one=async(id:any)=>{
    const music=await Likedsong.query().first().where('musicid','=',id);
    return music;
}
// export const get_onebyplaylistid=async(playlistid:any)=>{
    // const music=await Music.query().where('playlistid','=',playlistid);
    // return music;
// }
// export const get_one2=async(email:any)=>{
    // const person=await users.query().first().where('email','=',email);
    // return person;
// }
