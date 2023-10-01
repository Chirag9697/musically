// import { Playlists } from "../domain/Playlists";
import { Music } from "../domain/Music";
export const create=async(data:Partial<Music>)=>{
    const hel=await Music.query().insert(data);
    console.log(hel);
    // return hel;
}
