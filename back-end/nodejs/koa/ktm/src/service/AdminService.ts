import Admin from "../model/Admin";

class AdminService {
    async getAdminOne(){
        return Admin.findOne();
    }
    async getAdminByUsername(username: string) {
        return Admin.findOne({
            where: {
                username: username
            }
        });
    }
    getAdminById(admin_id: number) {
        return Admin.findByPk(admin_id);
    }
    getAdminListByPage(page: number = 1, limit: number = 10) {
        return Admin.findAndCountAll({
            limit,
            offset: (page - 1) * limit
        })
    }
    addAdmin(admin:any){
        return Admin.create(admin)
    }
    updateAdmin(id:number,admin:any){
        return Admin.update(admin,{where:{id}});
    }
    deleteAdmin(id: number) {
        return Admin.destroy({ where: { id } });
    }
}

export default new AdminService;