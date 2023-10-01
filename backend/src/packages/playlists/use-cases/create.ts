import { Playlists } from "../domain/Playlists";
export const create=async(data:Partial<Playlists>)=>{
    const hel=await Playlists.query().insert(data);
    return hel;
}
