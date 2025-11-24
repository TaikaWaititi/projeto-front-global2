import { useEffect } from "react";

interface ChatProps {
    containerId?: string;
}

export function Chat({ containerId = "chat-container" }: ChatProps) {
    useEffect(() => {
        if (!(window as any).watsonAssistantChatOptions) {
            (window as any).watsonAssistantChatOptions = {
                integrationID: "605277c8-7ed2-4b76-896d-e83c76b84c25", // novo ID
                region: "us-south", // região
                serviceInstanceID: "85a6d149-d111-4b6e-9168-e4043ea54dc1", // novo ID do serviço
                element: document.getElementById(containerId),
                hideCloseButton: true,
                showRestartButton: true,
                openChatByDefault: true,
                onLoad: function (instance: any) {
                    instance.render();
                },
            };

            if (!document.getElementById("watson-script")) {
                const script = document.createElement("script");
                script.id = "watson-script";
                script.src =
                    "https://web-chat.global.assistant.watson.appdomain.cloud/versions/latest/WatsonAssistantChatEntry.js";
                script.async = true;
                document.head.appendChild(script);
            }
        }
    }, [containerId]);

    return (

        <div id={containerId} className="h-96 w-full"></div>

    );
}

export default Chat;
