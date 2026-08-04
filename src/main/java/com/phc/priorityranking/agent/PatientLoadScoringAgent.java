public class PatientLoadAgent {

    public double calculatePatientLoadScore(int dailyPatients,
                                            int bedCapacity,
                                            int distanceToHospitalKm) {

        // Patients per bed
        double patientRatio = (double) dailyPatients / bedCapacity;

        // Convert ratio to score (Maximum 100)
        double patientScore = Math.min(patientRatio * 10, 100);

        // Distance score (Maximum 100)
        double distanceScore = Math.min(distanceToHospitalKm * 3, 100);

        // Final weighted score
        double finalScore =
                (patientScore * 0.70) +
                (distanceScore * 0.30);

        return finalScore;
    }
}