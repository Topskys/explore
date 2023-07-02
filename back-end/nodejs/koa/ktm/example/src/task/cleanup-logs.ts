import fs from 'fs'; 
import cron from 'node-cron';
import { getLogger } from 'log4js';
import { config } from '../config';


/**
 * 每周执行一次清理任务
 */
cron.schedule('0 0 * * 0', () => { // 0 0 * * 0，表示每周日凌晨 00:00 执行任务
    const logsDir = 'logs/';
    const logger = getLogger();
    /**
     * 获取当前时间和一周前的时间
     */
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - Number(config.log.clear_often || 7 * 24 * 60 * 60 * 1000));

    /**
     * 读取日志目录中的所有文件
     */
    fs.readdir(logsDir, (err, files) => {
        if (err) {
            logger.error('Error reading logs directory:', err);
            return;
        }
        /**
         * 遍历日志文件并删除一周前的文件
         */
        files.forEach((file) => {
            const filePath = logsDir + file;
            const stats = fs.statSync(filePath);
            if (stats.isFile() && stats.mtime < oneWeekAgo) {
                fs.unlink(filePath, (err) => {
                    if (err) {
                        logger.error('Error deleting log file:', err);
                    } else {
                        logger.info('Deleted log file:', filePath);
                    }
                });
            }
        });
    });
});