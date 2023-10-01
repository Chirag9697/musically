// import {users} from '../domain/users';
// import { platform } from "os";
import { Playlists } from "../domain/Playlists";
export const get_all=async(userid:any)=>{
    const allplaylists=await Playlists.query().where('userid','=',userid);
    console.log(allplaylists);
    return allplaylists;
}
