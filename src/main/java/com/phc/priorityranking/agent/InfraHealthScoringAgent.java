public class InfraHealthAgent {

    public double calculateInfrastructureScore(int buildingCondition,
                                               int electricity,
                                               int waterSupply,
                                               int equipmentScore) {

        // Convert good values into urgency values
        double buildingScore = (10 - buildingCondition) * 10;
        double equipment = (10 - equipmentScore) * 10;
        double electricityScore = (electricity == 1) ? 0 : 100;
        double waterScore = (waterSupply == 1) ? 0 : 100;

        // Weighted average
        double finalScore =
                (buildingScore * 0.40) +
                (equipment * 0.30) +
                (electricityScore * 0.15) +
                (waterScore * 0.15);

        return finalScore;
    }
}