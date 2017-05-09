declare class TreoPromiseInstance {
    store(name: string): TreoPromiseStore;
    version: number;
}

declare class TreoPromiseStore {
    get<T>(key: string): Promise<T>;
    put<T>(obj: T): Promise<void>;
    del(key: string): Promise<void>;
    all<T>(): Promise<T[]>;
    clear(): Promise<void>;
}

declare module "treo-promise" {

    export default function treoPromise(): TreoPromiseInstance;

}

