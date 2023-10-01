// import {users} from '../domain/users';
import { Playlists } from "../domain/Playlists";

export const deleterecord=async(id:any)=>{
    console.log("id",id);
    const deleting=await Playlists.query().deleteById(id);
    console.log(deleting);
    return deleting;
    // console.log(allpersons);
}
