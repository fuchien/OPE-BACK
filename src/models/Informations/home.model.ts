import { ISerializable } from '../../interface/serializable.interface';
import { IHome } from '../../interface/home.interface';
import homeschema from '../../schemas/Home';

export class Home implements ISerializable<Home, IHome> {
    constructor(
        public informations: {}[],
        public type?: string,
        public title1?: string,
        public title2?: string,
        public moongose = homeschema
    ) {
    }

    public static deserialize(obj: Home){
        return obj.deserialize();
    }

    public deserialize(): IHome{
        return {
            "informations": this.informations,
            "type": this.type,
            "title1": this.title1,
            "title2": this.title2,
        }
    }

    public static serialize(json: IHome): Home{
        return new Home(
            json.informations,
            json.type,
            json.title1,
            json.title2,
        );
    }

    public serialize(json: IHome): Home {
        return Home.serialize(json);
    }
}