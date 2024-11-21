function calculateTroops() {
    // Getting the values of enemy troops (numbers entered by the user)
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

    // Getting the selected troop tier from the dropdown
    let selectedTier = document.getElementById('troopTier').value;

    // Defining the recommended troops output element
    let outputElement = document.getElementById('output');

    // Perform the calculations and generate the result based on the selected tier
    let recommendedTroops = [];
    
    switch (selectedTier) {
        case 'T1':
            recommendedTroops = [
                { name: 'Grunts', count: Math.ceil(t1_1 * 0.5) },
                { name: 'Archer', count: Math.ceil(t1_2 * 0.5) },
                { name: 'Cataphract', count: Math.ceil(t1_3 * 0.5) },
                { name: 'Ballista', count: Math.ceil(t1_4 * 0.5) }
            ];
            break;
        case 'T2':
            recommendedTroops = [
                { name: 'Gladiator', count: Math.ceil(t2_1 * 0.5) },
                { name: 'Sharpshooter', count: Math.ceil(t2_2 * 0.5) },
                { name: 'Reptilian Rider', count: Math.ceil(t2_3 * 0.5) },
                { name: 'Catapult', count: Math.ceil(t2_4 * 0.5) }
            ];
            break;
        case 'T3':
            recommendedTroops = [
                { name: 'Royal Guard', count: Math.ceil(t3_1 * 0.5) },
                { name: 'Stealth Sniper', count: Math.ceil(t3_2 * 0.5) },
                { name: 'Royal Cavalry', count: Math.ceil(t3_3 * 0.5) },
                { name: 'Fire Trebuchet', count: Math.ceil(t3_4 * 0.5) }
            ];
            break;
        case 'T4':
            recommendedTroops = [
                { name: 'Heroic Fighter', count: Math.ceil(t4_1 * 0.5) },
                { name: 'Heroic Cannoneer', count: Math.ceil(t4_2 * 0.5) },
                { name: 'Ancient Drake Rider', count: Math.ceil(t4_3 * 0.5) },
                { name: 'Destroyer', count: Math.ceil(t4_4 * 0.5) }
            ];
            break;
        case 'T5':
            recommendedTroops = [
                { name: 'Luminary Avenger', count: Math.ceil(t5_1 * 0.5) },
                { name: 'Gawrilla', count: Math.ceil(t5_2 * 0.5) },
                { name: 'Necrosis', count: Math.ceil(t5_3 * 0.5) },
                { name: 'Gear', count: Math.ceil(t5_4 * 0.5) }
            ];
            break;
        default:
            recommendedTroops = [];
    }

    // Display the recommended troops and their counts
    if (recommendedTroops.length > 0) {
        let outputHTML = `<h2>Recommended Troops for ${selectedTier}</h2><ul>`;
        recommendedTroops.forEach(troop => {
            outputHTML += `<li><strong>${troop.name}</strong>: ${troop.count}</li>`;
        });
        outputHTML += `</ul>`;
        outputElement.innerHTML = outputHTML;
    } else {
        outputElement.innerHTML = `<p>Please enter enemy troop data and select a tier to calculate.</p>`;
    }
        }
