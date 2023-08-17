'use client'

import AgoraUIKit from "agora-react-uikit";
import { useState } from "react";



export default function Agura() {
  const [videoCall, setVideoCall] = useState(true);

  const callbacks = {
    EndCall: () => setVideoCall(false),
};


    const rtcProps = {
        appId: '80c9f63cb7de4c5282952cda7b6b8da3', 
        channel: 'test', 
        token: null, // enter your channel token as a string 
      }; 
      return (<>
        {videoCall ?  (<div className="flex h-screen w-screen">
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Join</h3>
      ) 
  }
      </>
      )
}
