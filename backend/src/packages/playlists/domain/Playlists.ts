import { Model } from "objection";
import { users } from "../../users";
export class Playlists extends Model{
    nameofplaylist?:String
    // videoid?:String
    userid?:String
    static get tableName(){
        return 'playlists';
    }
    static relationMappings = {
        owner: {
          relation: Model.BelongsToOneRelation,
          modelClass: users,
          join: {
            from: 'playlists.userid',
            to: 'users.id'
          }
        }
      };
}