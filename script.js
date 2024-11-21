function calculateTroops() {
    // Get input values
    const t1 = parseInt(document.getElementById("t1").value) || 0;
    const t2 = parseInt(document.getElementById("t2").value) || 0;
    const t3 = parseInt(document.getElementById("t3").value) || 0;
    const t5 = parseInt(document.getElementById("t5").value) || 0;
    
    const selectedTier = document.getElementById("troopTier").value;

    let recommendedTroops = '';

    // Troop Might Values (Example values for each tier)
    const troopMight = {
        T1: 5,
        T2: 10,
        T3: 15,
        T4: 25,
        T5: 50
    };

    // Calculate total enemy might
    const totalEnemyMight = (t1 * troopMight.T1) + (t2 * troopMight.T2) + (t3 * troopMight.T3) + (t5 * troopMight.T5);

    // Generate recommendation based on selected tier
    if (selectedTier === "T1") {
        recommendedTroops = Math.ceil(totalEnemyMight / troopMight.T1);
    } else if (selectedTier === "T2") {
        recommendedTroops = Math.ceil(totalEnemyMight / troopMight.T2);
    } else if (selectedTier === "T3") {
        recommendedTroops = Math.ceil(totalEnemyMight / troopMight.T3);
    } else if (selectedTier === "T4") {
        recommendedTroops = Math.ceil(totalEnemyMight / troopMight.T4);
    } else if (selectedTier === "T5") {
        recommendedTroops = Math.ceil(totalEnemyMight / troopMight.T5);
    }

    // Output the results
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <p>Total Enemy Might: ${totalEnemyMight}</p>
        <p>Recommended Troops for ${selectedTier}: ${recommendedTroops}</p>
    `;
}
