import http from "./httpService";

export function getPlans() {
    return http.get("subscriptions");
}

export function getPlan(id) {
    return http.get("subscriptions/" + id);
}

export function getSecretKey() {
    return http.get("create-payment-intent");
}

export function confirm(intent, plan_id) {
    return http.post("stripe/confirm", {
        id: plan_id,
        intent: intent,
    });
}
