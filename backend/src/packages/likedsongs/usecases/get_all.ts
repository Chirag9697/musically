// import {users} from '../domain/users';
// import { platform } from "os";
// import { Playlists } from "../domain/Playlists";
// import { Music } from "../domain/Music";
import { Likedsong } from "../domain/Likedsong";
export const get_all=async(id)=>{
    const allMusic=await Likedsong.query().where('userid','=',id);
    console.log(allMusic);
    // return allpersons;
    return allMusic;
}
