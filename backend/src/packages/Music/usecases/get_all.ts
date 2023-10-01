// import {users} from '../domain/users';
// import { platform } from "os";
// import { Playlists } from "../domain/Playlists";
import { Music } from "../domain/Music";
export const get_all=async()=>{
    const allMusic=await Music.query();
    console.log(allMusic);
    // return allpersons;
}
