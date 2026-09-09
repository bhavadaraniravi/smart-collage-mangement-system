// Change Sections

function showSection(sectionName) {

    let sections = document.querySelectorAll(".section");

    sections.forEach(function(section) {
        section.classList.remove("active");
    });

    document.getElementById(sectionName).classList.add("active");
}


// Add Student

function addStudent() {

    let name = document.getElementById("studentName").value;
    let roll = document.getElementById("studentRoll").value;

    if (name === "" || roll === "") {
        alert("Please enter student name and roll number");
        return;
    }

    let table = document.getElementById("studentTable");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = roll;
    row.insertCell(2).innerHTML = "Active";

    document.getElementById("studentName").value = "";
    document.getElementById("studentRoll").value = "";

    alert("Student added successfully!");
}


// Attendance Check

function checkAttendance() {

    let name = document.getElementById("attendanceName").value;

    let attendance =
        Number(document.getElementById("attendanceValue").value);

    let result = document.getElementById("attendanceResult");

    if (name === "" || attendance === "") {
        result.innerHTML = "Please enter all details.";
        return;
    }

    if (attendance < 75) {

        result.innerHTML =
            "⚠️ " + name +
            " has low attendance. Attendance is below 75%.";

    } else {

        result.innerHTML =
            "✅ " + name +
            " has sufficient attendance.";
    }
}


// Complaint Submission

function submitComplaint() {

    let student =
        document.getElementById("complaintStudent").value;

    let complaint =
        document.getElementById("complaintText").value;

    if (student === "" || complaint === "") {
        alert("Please enter all complaint details.");
        return;
    }

    let category = "General";
    let priority = "Medium";

    let text = complaint.toLowerCase();

    // Category Detection

    if (text.includes("fan") ||
        text.includes("light") ||
        text.includes("electricity")) {

        category = "Electrical";

    } else if (text.includes("water") ||
               text.includes("toilet") ||
               text.includes("washroom")) {

        category = "Maintenance";

    } else if (text.includes("wifi") ||
               text.includes("internet")) {

        category = "Network";
    }


    // Priority Detection

    if (text.includes("urgent") ||
        text.includes("emergency") ||
        text.includes("danger")) {

        priority = "High";
    }


    let table =
        document.getElementById("complaintTable");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = student;
    row.insertCell(1).innerHTML = complaint;
    row.insertCell(2).innerHTML = category;
    row.insertCell(3).innerHTML = priority;

    document.getElementById("complaintStudent").value = "";
    document.getElementById("complaintText").value = "";

    document.getElementById("complaintResult").innerHTML =
        "✅ Complaint submitted successfully!";
}


// AI Academic Risk Prediction

function predictRisk() {

    let name =
        document.getElementById("predictionName").value;

    let marks =
        Number(document.getElementById("marks").value);

    let attendance =
        Number(document.getElementById("attendance").value);

    let assignments =
        Number(document.getElementById("assignments").value);

    let result =
        document.getElementById("predictionResult");

    if (name === "" ||
        marks === 0 ||
        attendance === 0 ||
        assignments === 0) {

        result.innerHTML =
            "Please enter all student details.";

        return;
    }


    /*
       Simple risk calculation
       This is a prototype.
       A real project can replace this
       with a trained Machine Learning model.
    */

    let score =
        (marks * 0.5) +
        (attendance * 0.3) +
        (assignments * 0.2);


    if (score >= 75) {

        result.innerHTML =
            "🟢 LOW RISK<br>" +
            name +
            " is performing well.";

    } else if (score >= 50) {

        result.innerHTML =
            "🟡 MEDIUM RISK<br>" +
            name +
            " needs some academic attention.";

    } else {

        result.innerHTML =
            "🔴 HIGH RISK<br>" +
            name +
            " may require immediate academic support.";
    }
}