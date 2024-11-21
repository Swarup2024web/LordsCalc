function calculateTroops() {
    // Get values from the inputs
    let t1_1 = parseInt(document.getElementById('t1_1').value) || 0;
    let t1_2 = parseInt(document.getElementById('t1_2').value) || 0;
    let t1_3 = parseInt(document.getElementById('t1_3').value) || 0;
    let t1_4 = parseInt(document.getElementById('t1_4').value) || 0;
    
    let t2_1 = parseInt(document.getElementById('t2_1').value) || 0;
    let t2_2 = parseInt(document.getElementById('t2_2').value) || 0;
    let t2_3 = parseInt(document.getElementById('t2_3').value) || 0;
    let t2_4 = parseInt(document.getElementById('t2_4').value) || 0;
    
    let t3_1 = parseInt(document.getElementById('t3_1').value) || 0;
    let t3_2 = parseInt(document.getElementById('t3_2').value) || 0;
    let t3_3 = parseInt(document.getElementById('t3_3').value) || 0;
    let t3_4 = parseInt(document.getElementById('t3_4').value) || 0;
    
    let t4_1 = parseInt(document.getElementById('t4_1').value) || 0;
    let t4_2 = parseInt(document.getElementById('t4_2').value) || 0;
    let t4_3 = parseInt(document.getElementById('t4_3').value) || 0;
    let t4_4 = parseInt(document.getElementById('t4_4').value) || 0;
    
    let t5_1 = parseInt(document.getElementById('t5_1').value) || 0;
    let t5_2 = parseInt(document.getElementById('t5_2').value) || 0;
    let t5_3 = parseInt(document.getElementById('t5_3').value) || 0;
    let t5_4 = parseInt(document.getElementById('t5_4').value) || 0;

    // Get the selected tier from the dropdown
    let selectedTier = document.getElementById('troopTier').value;

    // Initialize the recommended troops array
    let recommendedTroops = [];

    // Perform the calculation based on the selected tier
    if (selectedTier === "T1") {
        recommendedTroops = [
            { name: "Grunts", amount: t1_1 },
            { name: "Archer", amount: t1_2 },
            { name: "Cataphract", amount: t1_3 },
            { name: "Ballista", amount: t1_4 }
        ];
    } else if (selectedTier === "T2") {
        recommendedTroops = [
            { name: "Gladiator", amount: t2_1 },
            { name: "Sharpshooter", amount: t2_2 },
            { name: "Reptilian Rider", amount: t2_3 },
            { name: "Catapult", amount: t2_4 }
        ];
    } else if (selectedTier === "T3") {
        recommendedTroops = [
            { name: "Royal Guard", amount: t3_1 },
            { name: "Stealth Sniper", amount: t3_2 },
            { name: "Royal Cavalry", amount: t3_3 },
            { name: "Fire Trebuchet", amount: t3_4 }
        ];
    } else if (selectedTier === "T4") {
        recommendedTroops = [
            { name: "Heroic Fighter", amount: t4_1 },
            { name: "Heroic Cannoneer", amount: t4_2 },
            { name: "Ancient Drake Rider", amount: t4_3 },
            { name: "Destroyer", amount: t4_4 }
        ];
    } else if (selectedTier === "T5") {
        recommendedTroops = [
            { name: "Luminary Avenger", amount: t5_1 },
            { name: "Gawrilla", amount: t5_2 },
            { name: "Necrosis", amount: t5_3 },
            { name: "Gear", amount: t5_4 }
        ];
    }

    // Generate the output HTML
    let outputHTML = `<h2>Recommended ${selectedTier} Troops:</h2><ul>`;
    recommendedTroops.forEach(troop => {
        if (troop.amount > 0) {
            outputHTML += `<li>${troop.name}: ${troop.amount}</li>`;
        }
    });
    outputHTML += `</ul>`;

    // Display the result
    document.getElementById('output').innerHTML = outputHTML;
}
