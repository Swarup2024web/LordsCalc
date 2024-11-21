function calculateTroops() {
    // Get input values
    const infantry = parseInt(document.getElementById("infantry").value) || 0;
    const ranged = parseInt(document.getElementById("ranged").value) || 0;
    const cavalry = parseInt(document.getElementById("cavalry").value) || 0;
    const siege = parseInt(document.getElementById("siege").value) || 0;

    // Troop Might Values (T3)
    const T3Might = 8;
    const T4Might = 36;

    // Calculate enemy total might
    const totalMight = (infantry + ranged + cavalry + siege) * T3Might;

    // Calculate the recommended T4 counter troops
    const rangedCounter = Math.ceil((infantry * T3Might) / T4Might);
    const cavalryCounter = Math.ceil((ranged * T3Might) / T4Might);

    // Output the results
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <p>Total Enemy Might: ${totalMight}</p>
        <p>Recommended Troops to Counter:</p>
        <ul>
            <li><strong>${rangedCounter}</strong> T4 Sharpshooters (Ranged)</li>
            <li><strong>${cavalryCounter}</strong> T4 Ancient Drake Riders (Cavalry)</li>
        </ul>
    `;
}
