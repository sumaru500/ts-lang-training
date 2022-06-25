class DBConnection {
    protected static instance: DBConnection | null;
    private id: number  = 0;
    
    constructor () {
        // ...simulate a db coonection by a random
        this.id = Math.random()
    }

    public getId(): number {
        return this.id;
    }

    public static getInstance(): DBConnection {
        if (!DBConnection.instance) {
            DBConnection.instance = new DBConnection();
        }
        return DBConnection.instance;
    } 
}
 
export {DBConnection};

