import * as notifications from "../../../../notifications.json";
import { normalize, schema } from "normalizr";

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notification", {
  author: user,
  context: message,
});

const normalized = normalize(notifications, [notification]);

export default function getAllNotificationsByUser(userId) {
  const result = [];
  const notify = normalized.entities.notification;
  const mssg = normalized.entities.messages;

  for (let key in notify) {
    if (notify[key].author === userId) {
      const context = notify[key].context;
      result.push(mssg[context]);
    }
  }

  return result;
}

export { normalized };