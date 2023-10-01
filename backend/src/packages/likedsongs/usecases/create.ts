// import { Playlists } from "../domain/Playlists";
import { Likedsong } from "../domain/Likedsong";
export const create=async(data:Partial<Likedsong>)=>{
    const hel=await Likedsong.query().insert(data);
    console.log(hel);
    // return hel;
}
