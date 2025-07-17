function generateResume() {
    // Collect user input
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const education = document.getElementById("education").value.trim();
    const skills = document.getElementById("skills").value.trim();
    const experience = document.getElementById("experience").value.trim();

    // Check for required fields
    if (!fullName || !email || !phone || !education || !skills) {
        alert("Please fill in all required fields.");
        return;
    }

    // Generate resume preview dynamically
    const resumeOutput = `
        <h3>${fullName}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h4>Education</h4>
        <p>${education}</p>
        <h4>Skills</h4>
        <p>${skills}</p>
        <h4>Work Experience</h4>
        <p>${experience || "No work experience provided."}</p>
    `;

    // Insert content into the preview container
    const resumeContainer = document.getElementById("resumeOutput");
    if (resumeContainer) {
        resumeContainer.innerHTML = resumeOutput;
    } else {
        console.error("Resume container element not found.");
    }
}