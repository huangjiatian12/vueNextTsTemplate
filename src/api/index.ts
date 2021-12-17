import { get } from "../request";
import { showDialog } from "../utils";

interface Date {
  name: string;
}
export async function getDataApi() {
  try {
    let data = await get("banner");
    console.log(data);
    return data;
  } catch (err: any) {
    console.log(err, "接口出错");
    showDialog({ message: err.message });
  }
}
export async function getData2Api() {
  try {
    let data = await get("data");
    console.log(data);
    return data;
  } catch (err: any) {
    showDialog({ message: err.message });
  }
}
