// site = "https://myte.accenture.com/#/time"


javascript: (function () {
    const id_toFill = {
        "workStartTime + hours": 9,
        "workStartTime + minutes": 0,
        "workEndTime + hours": 6,
        "workEndTime + minutes": 0,
        "breakDuration + break": 1
    };

    for (let index = 0; index < 15; index++) {
        for (const [id_key, value] of Object.entries(id_toFill)) {
            const element = document.getElementById(index + id_key);
            if (element && element.parentElement.parentElement.parentElement.classList.contains("punch-clock-column")) {
                continue;
            }
            if (element) {
                element.value = value;
                element.dispatchEvent(new Event("change"));
            }
        }
    }
})();
