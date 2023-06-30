import AppUtil from "../utils/AppUtil";

const appUtil = new AppUtil();

export const config = {
    server: {
        port: 3000,
        host: appUtil.getIp(),
    }
}