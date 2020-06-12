import { conn } from "../config/typeORM"

const initDependencies = async () => {
    // await initRedis();
    conn.connect();

};

export { initDependencies };
