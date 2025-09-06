// Simulated real-time data updates
        let droneCount = 15;
        let crowdCount = 2800000;
        let foundToday = 47;
        let currentMissing = 12;

        function updateMetrics() {
            // Simulate real-time updates
            droneCount = Math.max(10, droneCount + Math.floor(Math.random() * 3) - 1);
            crowdCount += Math.floor(Math.random() * 10000) - 5000;
            foundToday += Math.random() > 0.95 ? 1 : 0;
            currentMissing = Math.max(0, currentMissing + (Math.random() > 0.8 ? 1 : -1));
            
            // Update display (simplified for demo)
            console.log('Metrics updated:', {droneCount, crowdCount, foundToday, currentMissing});
        }

        function addAlert(message, type = '') {
            const alertList = document.getElementById('alertList');
            const time = new Date().toLocaleTimeString('en-IN', {hour: '2-digit', minute: '2-digit'});
            
            const alertDiv = document.createElement('div');
            alertDiv.className = `alert-item ${type}`;
            alertDiv.innerHTML = `
                <div class="alert-time">${time}</div>
                <strong>System Alert</strong><br>
                ${message}
            `;
            
            alertList.insertBefore(alertDiv, alertList.firstChild);
            
            // Remove old alerts if too many
            if (alertList.children.length > 10) {
                alertList.removeChild(alertList.lastChild);
            }
        }

        function toggleDrones() {
            addAlert('Drone fleet configuration updated. Redistributing coverage areas.');
        }

        function fullScreenMap() {
            addAlert('Switching to full-screen aerial view mode.');
        }

        function recordFeed() {
            addAlert('Recording started for all active drone feeds.', 'success');
        }

        function reportMissing() {
            addAlert('New missing person report filed. AI facial recognition activated.', '');
        }

        function emergencyAlert() {
            addAlert('EMERGENCY ALERT: Broadcasting evacuation instructions to all sectors.', 'critical');
        }

        function dispatchTeam() {
            addAlert('Emergency response team dispatched to high-priority location.', 'success');
        }

        // Simulate periodic alerts
        setInterval(() => {
            const alerts = [
                'Predictive analytics detected potential surge in Sector 5-B.',
                'New optimal pilgrim route calculated based on current crowd flow.',
                'Medical unit successfully reached emergency location.',
                'Drone maintenance completed. Unit back online.',
                'Facial recognition match found. Updating missing persons database.'
            ];
            
            const randomAlert = alerts[Math.floor(Math.random() * alerts.length)];
            addAlert(randomAlert);
        }, 15000);

        // Update metrics every 5 seconds
        setInterval(updateMetrics, 5000);

        // Initialize
        console.log('Drona Smart Aerial Sentinel System - Online');
        addAlert('Drona surveillance system fully operational. All systems green.', 'success');