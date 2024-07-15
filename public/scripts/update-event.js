        // JavaScript code to fetch and display event details
        document.addEventListener('DOMContentLoaded', (event) => {
            async function fetchEventById(eventId) {
                try {
                    const response = await fetch(`/events/${eventId}`);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const event = await response.json();
                    displayEvent(event);
                } catch (error) {
                    console.error('Failed to fetch event:', error);
                }
            }

            function displayEvent(event) {
                const eventDetails = document.getElementById('event-details');
                eventDetails.innerHTML = ''; // Clear previous content

                const eventItem = document.createElement("div");
                eventItem.classList.add("event"); // Add a CSS class for styling

                // Create elements for title, description, start time, end time, etc.
                const eventNameElement = document.createElement("h2");
                eventNameElement.textContent = event.EventName;

                const eventDescElement = document.createElement("p");
                eventDescElement.textContent = event.EventDesc;

                const eventStartTimeElement = document.createElement("p");
                eventStartTimeElement.textContent = `Start Time: ${event.EventStartTime}`;

                const eventEndTimeElement = document.createElement("p");
                eventEndTimeElement.textContent = `End Time: ${event.EventEndTime}`;

                const eventEntryPriceElement = document.createElement("p");
                eventEntryPriceElement.textContent = `Entry Price: $${event.EntryPrice}`;

                const eventHostIdElement = document.createElement("p");
                eventHostIdElement.textContent = `Host ID: ${event.HostID}`;

                // Append elements to the event item
                eventItem.appendChild(eventNameElement);
                eventItem.appendChild(eventDescElement);
                eventItem.appendChild(eventStartTimeElement);
                eventItem.appendChild(eventEndTimeElement);
                eventItem.appendChild(eventEntryPriceElement);
                eventItem.appendChild(eventHostIdElement);

                // Append the event item to the event details container
                eventDetails.appendChild(eventItem);
            }

            // Get the event ID from the URL
            function getEventIdFromUrl() {
                const urlParams = new URLSearchParams(window.location.search);
                return urlParams.get('id');
            }

            const eventId = getEventIdFromUrl();
            if (eventId) {
                fetchEventById(eventId);
            } else {
                console.error('Event ID is missing in the URL');
            }
        });        
        
        
        
        
        
        
        
        // // Get the full URL of the current page
        // const url = window.location.href;

        // // Create a URL object
        // const urlObj = new URL(url);

        // // Use URLSearchParams to extract the query parameters
        // const params = new URLSearchParams(urlObj.search);

        // // Get the 'id' parameter value
        // const eventId = params.get('id');

        // // Log the id to the console
        // console.log('Event ID:', eventId);

        // // Optionally, you can use the eventId in your application logic
        // if (eventId) {
        //     // Do something with the eventId, e.g., fetch event details from the server
        //     console.log(`Event ID is ${eventId}`);

            

        // } else {
        //     console.log('No event ID found in the URL.');
        // }