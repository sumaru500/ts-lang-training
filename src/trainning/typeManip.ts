export{}

// Generic Identify Function Interface
interface GenericIdentifyFn<T> {
    (param: T[]) : T[]
  }
  
  function identity<T> (param1 : T[]) : T[] {
    console.log(param1.length);
    return param1;
  }
  
  let otherIdentity : GenericIdentifyFn<number> = identity;
  
  // console.log(otherIdentity([1]));
  
  
  // Generic Class
  class NumUniverse<NumType> {
    addNeutreValue!: NumType;
    add!: (x: NumType,y: NumType) => NumType;
    factorable : Boolean = false;
  }
  
  let numberUniverse = new NumUniverse<number>();
  numberUniverse.addNeutreValue = 0;
  numberUniverse.add = function(x, y) {
    return x + y;
  }
  
  let stringUniverse = new NumUniverse<string>();
  stringUniverse.addNeutreValue = '';
  stringUniverse.add = function(x, y) {
    return x + y;
  }
  
  // console.log(stringUniverse.add('','Mai'));
  
  // Constrained Type Parameter
  interface LengthWise {length: number}
  
  function logIdentity<T extends LengthWise> (param : T) {
    console.log(param.length);
    return param;
  }
  
  // logIdentity([3])
  // logIdentity({length : 10, weight : 100})
  
  // Type Operator keyof, []
  function getProperty<K extends keyof T, T> (obj: T, key: K) : T[K] {
    return obj[key];
  }
  
  const obj = {length: 10, weight : 100, height : 0};
  const numObj = {1: 10, 2: 11, 5: 16}; 
  obj.height = 50;
  // console.log(getProperty(obj, "length"));
  // console.log(getProperty(numObj,  5));
  
  function factory<C extends Object>(klass : {new() : C}) {
    return new klass();
  }
  
  // let objNumUniverseNumber = factory(NumUniverse<number>);
  // objNumUniverseNumber.addNeutreValue = 0;
  // console.log(objNumUniverseNumber.addNeutreValue);
  // let objNumUniverseNumber = factory(NumUniverse<number>);
  // console.log([NumUniverse<number>]);
  
  type Circle = {point : Point, radius: number};
  type Point = {x : number, y: number};
  
  type CircleKeys = keyof Circle;
  let keys : CircleKeys = "radius"
  console.log()
  
  type Arrayish = {[index: number]: unknown};
  type ArrKeys = keyof Arrayish
  
  type Objectish = {[index: string]: unknown};
  type ObjKeys = keyof Objectish;
  
  // typeof
  type IdentityReturnType = ReturnType<(x: number) => boolean>
  
  function add(x: number, y: number) {
    return x + y;
  }
  
  function createPoint(x: number, y: number) {
    return {x, y};
  }
  
  type AddReturnType = ReturnType<typeof createPoint>
  
  // indexed access type
  type Person = {age: number, name: string, marriaged: boolean}
  type KeysType = Person[keyof Person];
  
  const myArray = [
    {name: "Thang", age: 40},
    {name: "Mai", age: 32},
    {name: "Louis"}
  ]
  
  type Person2 = typeof myArray[number];
  type AgeType2 = Person2["age"]
  
  const person : Person2 = {age: 8, name: "Alex"}
  
  // Conditional types
  
  type NameOrIdLabel<T extends number | string> = T extends number ? IdLabel : NameLabel; 
  
  interface IdLabel {
    label : number;
  }
  interface NameLabel {
    label : string;
  }
  
  function createLabel<T extends number | string>(value : T) : NameOrIdLabel<T> {
    return {label : value} as NameOrIdLabel<T>;
  }
  
  let nameLabel = createLabel("thang");
  let idLabel = createLabel(1);
  
  // Conditional type constraint
  
  // type MessageOf<T extends {message : unknown}> = T["message"]
  type MessageOf<T> = T extends {message : unknown} ? T["message"] : never
  type ChefExchange = {message: string, dealine: number}
  type LeadExchange = {message: number, dealine: unknown}
  type DogExchange = {gau() :void};
  const chefMessage : ChefExchange = {message: "Urgence", dealine : 1};
  const leadMessage : LeadExchange = {message: 2, dealine : "Need to finished tomorrow"};
  const dogMessage : DogExchange = {gau() {}};
  
  let a : MessageOf<ChefExchange>;
  let b : MessageOf<LeadExchange>;
  let c : MessageOf<DogExchange>;
  
  function getMessage<T> (from : T) : MessageOf<T>{
    throw 'unimplemented' // TODO??
  }
  
  // a = getMessage(chefMessage);
  // b = getMessage(leadMessage);
  // c = getMessage(dogMessage);
  
  // flatten example
  
  // type Flatten<T> = T extends any[] ? T[number] : T;
  type Flatten<T> = T extends Array<infer ItemType> ? ItemType : T;
  
  type FlattenStringArray = Flatten<string[]>;
  type FlattenNumberArray = Flatten<number[]>;
  type FlattenBooleanArray = Flatten<boolean[]>;
  
  function flatten<T> (input : T) : Flatten<T> {
  
    throw "unimplemented" // TODO?
  }
  
  // let flattenString : FlattenStringArray = flatten(["Thang", "Mai"])
  // let flattenNumber : FlattenNumberArray = flatten([1, 2])
  // let flattenBoolean : FlattenBooleanArray = flatten([true, false])
  // let singleNumber : Flatten<number> = flatten(1);
  
  // infer type example
  type GetReturnType<T> = T extends (...param : any[]) => infer OutType ? OutType : never; 
  
  type StringToNumReturn = GetReturnType<(v: string) => number>
  type AddNumReturn = GetReturnType<(x :number, y: number) => number>
  type ConcatStringReturn = GetReturnType<(str1 : string, str2 : string) => string>
  type AsStringArrayReturn = GetReturnType<(...param : string[]) => string[]>
  type AsNumberArrayReturn = GetReturnType<(...param : number[]) => number[]>
  
  let addResult : AddNumReturn;
  
  // addResult = "unknown"; error
  // in case of overload => get latest declare in order
  declare function stringOrNumber(input : string) : number;
  declare function stringOrNumber(input : number) : string;
  type T = GetReturnType<typeof stringOrNumber>
  let t : T; // => string, not number
  
  // Distributive conditional types
  
  type ToArray<T> = T extends any ? T[] : never
  type ToArrayNonDist<T> = [T] extends [any] ? T[] : never
  
  type ToArrayString = ToArray<string>
  type ToArrayNumber = ToArray<number>
  type ToArrayStringOrNumber = ToArray<string | number>
  type ToArrayEnum = ToArray<"Thang" | "Mai">
  type ToArrayEnumNonDist = ToArrayNonDist<"Thang" | "Mai">
  let thangArray : ToArrayEnum = ["Thang", "Thang"]
  let maiArray : ToArrayEnum = ["Mai", "Mai"]
  let thangMaiMixinArray : ToArrayEnumNonDist = ["Thang", "Thang", "Mai"]
  
  /**
   * Mapped Types
   */
  
  type OptionFlags = {
    [key: string] : boolean
  }
  
  const prodConfigFlags : OptionFlags = {
    lazyLoad : true,
    autoMargin : false
  }
  
  // example on off feature
  
  type AuthenFeatures = {
    login: (username : string, password : string) => boolean,
    logout?: () => boolean,
  }
  
  type ConfigOptionFlags<T> = {
    [Key in keyof T] : boolean
  }
  type AuthenFeatureConfig = ConfigOptionFlags<AuthenFeatures>
  const availableAuthenFeatures : AuthenFeatureConfig = {
    login: true,
    logout: false
  }
  
  function configAuthen(config:  AuthenFeatureConfig) : void {
    if (config.login) {
  
    }
  
    if (config.logout) {
  
    }
  }
  
  configAuthen(availableAuthenFeatures);
  // configAuthen({
  //   login: true,
  //   logout: false,
  //   subcribe: false}
  // ) // Error : Object literal may only specify known properties
  
  // example modifiers readonly and ? with +-
  // create a mutate type
  type Account = {
    readonly username : string,
    password? : string
  }
  
  let immutateAccount : Account = {
    username : "thangmai",
    password: "yyy"
  }
  
  // immutateAccount.username = "thang"
  immutateAccount.password = "xxx"
  console.log(immutateAccount)
  
  type ToMutate<T> = {
    -readonly[Key in keyof T]-? : T[Key]
  }
  
  type MutateAccount = ToMutate<Account>
  
  let mutateAccount : MutateAccount = {
    username : "sumaru",
    password: "xxx"
  }
  
  mutateAccount.username = "thangmai"
  mutateAccount.password = "yyy"
  
  // Remapping via as => rename to new properties
  // gennerate type with getter
  
  type Getter<T> = {
    [Key in keyof T as `get${Capitalize<string & Key>}`] : () => T[Key];
  }
  
  type PersonEntity = {
    name: string,
    age : number
  }
  
  type LazyPerson = Getter<Person>
  
  let lazyPerson : LazyPerson;
  
  // exclude property
  
  type PersonWithMarriage = {
    marriaged : boolean,
    name : string
  }
  
  type WithoutMarriage<T> = {
    [Key in keyof T as Exclude<Key, "marriaged">] : T[Key]
  }
  
  type PersonWithoutMarriage = WithoutMarriage<PersonWithMarriage>
  
  // map over union type
  // redux like
  // model/todo.entity.ts
  interface Todo {
    id: number | string,
    title: string
  }
  // action/todo.action.ts
  type CheckAllAction = {type: "checkAll", checked: boolean}
  type ToggleAction = {type: "toggle", index : number, checked: boolean}
  type AddAction = {type: "add", item : Todo}
  type AllActions = CheckAllAction | ToggleAction | AddAction
  // reducer/todo.reducer.ts
  type ReducerConfig<Actions extends {type: string} > = {
    [Action in Actions as Action["type"]]: (action : Action) => void;
  }
  
  type TodoActionReducerConfig = ReducerConfig<AllActions>
  let todoReducerConfig : TodoActionReducerConfig
  type State = {}
  function reducer(state : State, action : AllActions) {
    todoReducerConfig[action.type].bind(state)
  }
  
  /**
   * Tempalte Literral Types
   */
  
  // simplest
  type Message = "world" | "mama" | "papa"
  type HelloMessage = `Hello ${Message}`
  
  type Countries = "fr" | "en" | "vn"
  type Domains = "com" | "net"
  type RegistedDomainNames = "eesolution" | "engie"
  
  type AllDomains = `www.${RegistedDomainNames}.${Domains}.${Countries}`
  
  let domain : AllDomains = "www.eesolution.com.vn"
  
  // example generate watched object
  const thang : Person = {
      name: "Thang",
      age: 40,
      marriaged: true  
    }
  
  type Watched<T> = T & {
    on<Key extends string & keyof T>(eventName: `${Key}Changed`, callback : (newValue : T[Key]) => void): void;
  }
  // & {
  //   [Key in keyof T as `set${Capitalize<string & Key>}`]: (value : T[Key]) => void 
  // }
  
  function makeWatched<T>( obj : T) : Watched<T> {
    const callbackMap = new Map<string, Function>();
    // use Proxy to change comportement of setter
    const watchedObj = {
      ...obj,
      on(eventName: string, callback: Function) {
        callbackMap.set(eventName, callback)
      }
    }
  
    const handlerObj = {
      set(target: object, prop: string, value : any) {
        const cb = callbackMap.get(`${prop}Changed`);
        cb && cb(value);
        return Reflect.set(target, prop, value)
      }
    }
  
    const proxyObj = new Proxy (watchedObj, handlerObj)
  
    return proxyObj as Watched<T>;
  }
  
  const watchedThang : Watched<Person> = makeWatched(thang)
  
  watchedThang.on("ageChanged", (value) => {
    console.log("New age : ", value);
  })
  watchedThang.on("nameChanged", (value) => {
    console.log("New name : ", value);
  })
  
  watchedThang.name = "Mai";
  watchedThang.age = 32;
  
  // built-in string manipulation types : 
  // Uppercase<StringType> 
  // Lowercase<StringType> 
  // Capitalize<StringType> 
  // Uncapitalize<StringType> 
  
  