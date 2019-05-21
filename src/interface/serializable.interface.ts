
export interface ISerializable<T,K>{
    moongose: any;
    deserialize(obj:T): K;
    serialize(json: K): T;
}