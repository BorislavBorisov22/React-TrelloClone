
class StoreApi {

    constructor(reducer) {
        this.subscriptions = [];
        this.lastSubscriptionId = 0;

        this.reducer = reducer;
        this.state = this.updateState();
    }

    getState() {
        return this.state;
    }

    updateState(actionDispatched) {
        this.state = this.reducer(this.state, actionDispatched);
    }

    subscribe(callback) {
        this.lastSubscriptionId++;
        this.subscriptions[this.lastSubscriptionId] = callback;
        return this.lastSubscriptionId;
    }

    unsubscribe(subscriptionId) {
        delete this.subscriptions[subscriptionId];
    }

    notifySubscribers() {
        this.subscriptions.forEach(s => s());
    }

    dispatch(action) {
        this.updateState(action);
        this.notifySubscribers();
    }
}