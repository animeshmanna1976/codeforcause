// E-Waste Calculator Function
function calculateRecyclability() {
    let deviceCount = document.getElementById("deviceCount").value;
    
    if (deviceCount < 1 || isNaN(deviceCount)) {
        document.getElementById("result").innerText = "Please enter a valid number.";
        return;
    }

    let estimatedRecyclability = deviceCount * 85; // Assuming 85% recyclability per device
    document.getElementById("result").innerText = 
        `Estimated recyclable material: ${estimatedRecyclability}% of total e-waste.`;
}

// Smooth Scrolling for Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        let targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});
