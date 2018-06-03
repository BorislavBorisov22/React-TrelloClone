
class StoreApi {

    constructor(reducer) {
        this.subscriptions = [];
        this.lastSubscriptionId = 0;

        this.reducer = reducer;
        this.updateState({});

        this.dispatch = this.dispatch.bind(this);
        this.updateState = this.updateState.bind(this);
        this.getState = this.getState.bind(this);
        this.subscribe = this.subscribe.bind(this);
        this.notifySubscribers = this.notifySubscribers.bind(this);
        this.unsubscribe = this.unsubscribe.bind(this);
    }

    getState() {
        return this.state;
    }

    updateState(actionDispatched) {
        this.state = this.state || {};
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

export default StoreApi;