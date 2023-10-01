// import {users} from '../domain/users';
// import { Playlists } from "../domain/Playlists";
// import { Music } from "../domain/Music";
import { Likedsong } from "../domain/Likedsong";
export const deleterecordbymusicid=async(musicid:number)=>{
    // console.log(id);
    const deleting=await Likedsong.query().delete().where('id','=',musicid);
    console.log(deleting);
    return deleting;
    // console.log(allpersons);
}

