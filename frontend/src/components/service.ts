import http from "../http";

class ToDoDataService {
  getAll() {
    return http.get("items");
  }
  create(data: any) {
    return http.post("/item", data);
  }
  delete(id: any) {
    return http.post(`/delete/${id}`);
  }
  update(id:any, data:any){
    return http.patch(`/update/${id}`,data)
  }

}

export default new ToDoDataService();