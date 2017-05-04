declare module "treo-promise" {

    interface TreoPromiseStore {
        get<T>(key: string): Promise<T>;
        put<T>(obj: T): Promise<void>;
        del(key: string): Promise<void>;
        all<T>(): Promise<T[]>;
    }

    class TreoPromiseInstance {
        store(name: string): TreoPromiseStore;
        version: number;
    }

    export default function treoPromise(): TreoPromiseInstance;

}