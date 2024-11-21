function calculateTroops() {
    // Retrieve values from the input fields
    const t1_1 = parseInt(document.getElementById('t1_1').value) || 0;
    const t1_2 = parseInt(document.getElementById('t1_2').value) || 0;
    const t1_3 = parseInt(document.getElementById('t1_3').value) || 0;
    const t1_4 = parseInt(document.getElementById('t1_4').value) || 0;
    const t2_1 = parseInt(document.getElementById('t2_1').value) || 0;
    const t2_2 = parseInt(document.getElementById('t2_2').value) || 0;
    const t2_3 = parseInt(document.getElementById('t2_3').value) || 0;
    const t2_4 = parseInt(document.getElementById('t2_4').value) || 0;
    const t3_1 = parseInt(document.getElementById('t3_1').value) || 0;
    const t3_2 = parseInt(document.getElementById('t3_2').value) || 0;
    const t3_3 = parseInt(document.getElementById('t3_3').value) || 0;
    const t3_4 = parseInt(document.getElementById('t3_4').value) || 0;
    const t4_1 = parseInt(document.getElementById('t4_1').value) || 0;
    const t4_2 = parseInt(document.getElementById('t4_2').value) || 0;
    const t4_3 = parseInt(document.getElementById('t4_3').value) || 0;
    const t4_4 = parseInt(document.getElementById('t4_4').value) || 0;
    const t5_1 = parseInt(document.getElementById('t5_1').value) || 0;
    const t5_2 = parseInt(document.getElementById('t5_2').value) || 0;
    const t5_3 = parseInt(document.getElementById('t5_3').value) || 0;
    const t5_4 = parseInt(document.getElementById('t5_4').value) || 0;

    // Calculate total enemy troops
    const totalEnemyTroops = t1_1 + t1_2 + t1_3 + t1_4 +
                              t2_1 + t2_2 + t2_3 + t2_4 +
                              t3_1 + t3_2 + t3_3 + t3_4 +
                              t4_1 + t4_2 + t4_3 + t4_4 +
                              t5_1 + t5_2 + t5_3 + t5_4;

    // Retrieve selected troop tier from dropdown
    const selectedTier = document.getElementById('troopTier').value;

    // Initialize recommended troops object
    let recommendedTroops = {
        T1: { RoyalGuard: 0, Footman: 0, Archer: 0, Scout: 0 },
        T2: { StealthSniper: 0, Pikeman: 0, Swordsman: 0, FlameKnight: 0 },
        T3: { AncientDrake: 0, Chiron: 0, Gargantua: 0, Phoenix: 0 },
        T4: { RoyalKnight: 0, Paladin: 0, DarkKnight: 0, EliteArcher: 0 },
        T5: { FireBucket: 0, Colossus: 0, Behemoth: 0, Hercules: 0 }
    };

    // Based on enemy troops, calculate recommended counters (sample logic)
    if (selectedTier === 'T1') {
        recommendedTroops.T1.RoyalGuard = Math.ceil(t1_1 / 5);
        recommendedTroops.T1.Footman = Math.ceil(t1_2 / 5);
        recommendedTroops.T1.Archer = Math.ceil(t1_3 / 5);
        recommendedTroops.T1.Scout = Math.ceil(t1_4 / 5);
    } else if (selectedTier === 'T2') {
        recommendedTroops.T2.StealthSniper = Math.ceil(t2_1 / 4);
        recommendedTroops.T2.Pikeman = Math.ceil(t2_2 / 4);
        recommendedTroops.T2.Swordsman = Math.ceil(t2_3 / 4);
        recommendedTroops.T2.FlameKnight = Math.ceil(t2_4 / 4);
    } else if (selectedTier === 'T3') {
        recommendedTroops.T3.AncientDrake = Math.ceil(t3_1 / 3);
        recommendedTroops.T3.Chiron = Math.ceil(t3_2 / 3);
        recommendedTroops.T3.Gargantua = Math.ceil(t3_3 / 3);
        recommendedTroops.T3.Phoenix = Math.ceil(t3_4 / 3);
    } else if (selectedTier === 'T4') {
        recommendedTroops.T4.RoyalKnight = Math.ceil(t4_1 / 2);
        recommendedTroops.T4.Paladin = Math.ceil(t4_2 / 2);
        recommendedTroops.T4.DarkKnight = Math.ceil(t4_3 / 2);
        recommendedTroops.T4.EliteArcher = Math.ceil(t4_4 / 2);
    } else if (selectedTier === 'T5') {
        recommendedTroops.T5.FireBucket = Math.ceil(t5_1 / 2);
        recommendedTroops.T5.Colossus = Math.ceil(t5_2 / 2);
        recommendedTroops.T5.Behemoth = Math.ceil(t5_3 / 2);
        recommendedTroops.T5.Hercules = Math.ceil(t5_4 / 2);
    }

    // Display the recommended troops in the output section
    const outputDiv = document.getElementById('output');
    let resultHtml = `<p>Total Enemy Troops: ${totalEnemyTroops}</p><ul>`;

    // Iterate through the selected tier's troops
    for (let troopType in recommendedTroops[selectedTier]) {
        let troopCount = recommendedTroops[selectedTier][troopType];
        resultHtml += `<li><strong>${troopType}:</strong> ${troopCount} troops</li>`;
    }

    resultHtml += `</ul>`;
    outputDiv.innerHTML = resultHtml;
            }
