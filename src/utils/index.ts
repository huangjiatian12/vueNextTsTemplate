import { Dialog } from "vant";
import { DialogParams } from "../types";

export async function showDialog({
  title = "",
  message,
  confirm,
  cancel,
  cancelText = "取消",
  cancelColor = "#000",
  confirmText = "确定",
  confirmColor = "#DD442F",
}: DialogParams) {
  await Dialog.alert({
    title,
    message,
    confirmButtonColor: confirmColor,
    confirmButtonText: confirmText,
    cancelButtonText: cancelText,
    cancelButtonColor: cancelColor,
    showCancelButton: cancel ? true : false,
  })
    .then(() => {
      if (confirm) {
        confirm();
      }
    })
    .catch(() => {
      if (cancel) {
        cancel();
      }
    });
}
