import mixpanel from "mixpanel-browser";

export class MixpanelTracking {
    static getInstance(){
        if(!MixpanelTracking.instance){
            MixpanelTracking.instance = new MixpanelTracking();
        }
        return MixpanelTracking.instance;

    }
    constructor(){
        if(MixpanelTracking.instance){
            throw new Error("Error:  Instance creation of MixpanelTracking is not allowed. Use Mixpanel.getInstance() instead.");
        }
        mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_ID || '', {
            debug: process.env.NODE_ENV == 'development' ? true :false, 
            ignore_dnt: true,
            track_pageview: true,
            persistence: 'localStorage'
        });

    }

    track(name,data){
     return;
     //   mixpanel.track(name,data);

    }
    pageView(name){
        return;
        mixpanel.track("page_viewed", name);
    }
    identify(userID)
    {return;
        mixpanel.identify(userID);
    }
    reset()
    {return;
        mixpanel.reset();
    }
    
    
}

