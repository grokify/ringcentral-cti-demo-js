function rcCallWinMgr(rcSdk) {
    var t=this;
    t.rcSdk = rcSdk;
    t.domId = '#rcCallWindow';
    t.domIdStatus = '#rcCallWindowStatus';
    t.subscription = null;
    t.refreshIntervalId = null;
    t.show = function() {
        $(t.domId).show();
    }
    t.hide = function() {
        $(t.domId).hide();
    }
    t.toggle = function() {
        $(t.domId).toggle();
    }
    t.start = function(status) {
        t.show();
        $(t.domIdStatus).html(status);
        t.startCounter();
    }
    t.setStatusConnected = function() {
        $(t.domIdStatus).html('Connected');
    }
    t.setStatusEnded = function() {
        $(t.domIdStatus).html('Ended');
    }
    t.startCounter = function() {
        var minutesLabel = document.getElementById("rcMin");
        var secondsLabel = document.getElementById("rcSec");
        var totalSeconds = 0;
        t.refreshIntervalId = setInterval(setTime, 1000);

        function setTime()
        {
            ++totalSeconds;
            secondsLabel.innerHTML = pad(totalSeconds%60);
            minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
        }

        function pad(val)
        {
            var valString = val + "";
            if(valString.length < 2)
            {
                return "0" + valString;
            }
            else
            {
                return valString;
            }
        }
    }
    t.stopCounter = function() {
        if (t.refreshIntervalId) {
            clearInterval(t.refreshIntervalId);
        }
    }
    t.processCall = function(call) {
        var ts = call.telephonyStatus;
        $('#rcCallFrom').html(call.from);
        $('#rcCallTo').html(call.to);
        if (ts == 'Ringing') {
            t.start('Ringing');
        } else if (ts == 'CallConnected') {
            $(t.domIdStatus).html('Connected');
        } else if (ts == 'NoCall') {
            var curStatus = $(t.domIdStatus).html();
            if (curStatus == 'Ringing' || curStatus == 'Connected') {
                $(t.domIdStatus).html('Ended');
            }
            t.stopCounter();
        }
    }
    t.startSubscription = function() {
        if (!t.rcSdk.getPlatform().isTokenValid()) {
            console.log("E_IS_NOT_AUTHORIZED__SKIP_SUBSCRIPTION");
            return;
        }
        t.subscription = t.rcSdk.getSubscription();

        t.subscription
            .on(t.subscription.events.notification, function(msg) {
                var callerId = msg.body.activeCalls[0].from;
                console.log(msg.body.activeCalls[0].from); // activeCalls is array
                console.log(msg.body.activeCalls[0].to);
                var call0 = msg.body.activeCalls[0];
                var json = JSON.stringify(call0);
                console.log(json);
                rcCallWin.processCall(call0);
            })
            .register({
                events: [
                    '/account/~/extension/~/presence?detailedTelephonyState=true'
                ],
            })
            .then();
    }
    t.endSubscription = function() {
        if (t.rcSdk.getPlatform.isTokenValid()) {
            if (t.subscription) {
                t.subscription.remove({async: false});
            }
        }
        // Detach event listeners
        if (t.subscription) {
            subscription.destroy();
        }
    }
}
