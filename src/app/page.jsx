'use client'
import { JitsiMeeting } from "@jitsi/react-sdk"
import { useState } from "react";


export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
	const YOUR_DOMAIN = "vitamoveapp.com"
    const recordingFileName = `${YOUR_DOMAIN}.mp4`;

	
	const handleApiReady = (externalApi) => {
		setIsLoading(false);
		// here you can attach custom event listeners to the Jitsi Meet External API
		// you can also store it locally to execute commands
	  }
	return (
		<>
		{isLoading && <div>Loading...</div>}
			<JitsiMeeting
    domain = { YOUR_DOMAIN }
    roomName = "PleaseUseAGoodRoomName"
	spinner="true"
     getRecordingFileName={() => recordingFileName}
    configOverwrite = {{
        startWithAudioMuted: true,
        disableModeratorIndicator: true,
        startScreenSharing: true,
        enableEmailInStats: false
    }}
    interfaceConfigOverwrite = {{
        DISABLE_JOIN_LEAVE_NOTIFICATIONS: true
    }}
    userInfo = {{
        displayName: 'YOUR_USERNAME'
    }}
    onApiReady = { (externalApi) => {
        // here you can attach custom event listeners to the Jitsi Meet External API
        // you can also store it locally to execute commands
    } }
    getIFrameRef = { (iframeRef) => { 
		setIsLoading(false)
		iframeRef.style.height = '600px';
	 }
}
style={{ display: isLoading ? 'none' : 'block' }}
/>
		</>

	)
}
