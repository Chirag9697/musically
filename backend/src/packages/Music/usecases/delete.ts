// import {users} from '../domain/users';
// import { Playlists } from "../domain/Playlists";
import { Music } from "../domain/Music";
export const deleterecord=async(id:number)=>{
    console.log(id);
    const deleting=await Music.query().deleteById(id);
    console.log(deleting);
    return deleting;
    // console.log(allpersons);
}
export const deleterecordbyplaylistod=async(playlistid:any)=>{
    const deleting=await Music.query().delete().where("playlistid","=",playlistid);
    console.log(deleting);
    return deleting;
    // console.log(allpersons);
}
